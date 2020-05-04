'use strict';

import seedEmail from '../seed/emailSeed';

/*-----------------------------------------------------------------*/

function emailReducers(
  state = seedEmail,
  action
) {
  switch (action.type) {
    case 'EMAIL_HAS_BEEN_READ':
      return update_has_been_readed(
        state,
        action.operation,
        action.payload
      );
    case 'EMAIL_HASNT_BEEN_READ':
      return update_has_been_readed(
        state,
        action.operation,
        action.payload
      );
    case 'MOVE_EMAIL':
      return move_email(
        state,
        action.operation,
        action.payload
      );
    case 'FILTERED_EMAILS':
      return filtered_email(
        state,
        action.operation,
        action.payload
      );
    default:
      return state;
  }
}

/*-----------------------------------------------------------------*/

function update_has_been_readed(
  state,
  operation,
  payload
) {
  let newState = {
    inbox: state.inbox,
    spam: state.spam,
    deleted: state.deleted,
    filtered: state.filtered,
  };

  if (
    operation.action === 'EMAIL_HAS_BEEN_READ'
  ) {
    newState[payload.type] = newState[
      payload.type
    ].map((email) => {
      if (
        email.from === payload.from &&
        email.date === payload.date
      ) {
        email.isReaded = true;
      }
      return email;
    });
    return newState;
  }
  if (
    operation.action === 'EMAIL_HASNT_BEEN_READ'
  ) {
    newState[payload.type] = newState[
      payload.type
    ].map((email) => {
      if (
        email.from === payload.from &&
        email.date === payload.date
      ) {
        email.isReaded = false;
      }
      return email;
    });
    return newState;
  }
}

/* .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .*/

function move_email(state, operation, payload) {
  let newState = {
    inbox: state.inbox,
    deleted: state.deleted,
    spam: state.spam,
    filtered: state.filtered,
  };

  let alsoRemoveFrom = manage_update_from_filtered_field(
    newState,
    operation,
    payload
  );

  if (operation.from !== operation.to) {
    for (
      var i = 0;
      i < newState[operation.from].length;
      i++
    ) {
      if (
        newState[operation.from][i].from ===
          payload.from &&
        newState[operation.from][i].date ===
          payload.date
      ) {
        break;
      }
    }
    if (operation.to === 'inbox') {
      payload.isReaded = false;
    }

    newState[operation.to].push(payload);
    newState[operation.from].splice(i, 1);
  } else if (
    operation.from === 'inbox' &&
    operation.from === 'inbox'
  ) {
    let updatedInboxMessages = newState[
      'inbox'
    ].map(function changeIsRead(email) {
      if (
        email.from === payload.from &&
        email.date === payload.date
      ) {
        email.isReaded = false;
      }
      return email;
    });

    newState['inbox'] = updatedInboxMessages;
  }

  if (
    alsoRemoveFrom.field !== null &&
    alsoRemoveFrom.index !== null
  ) {
    newState[alsoRemoveFrom.field].splice(
      alsoRemoveFrom.index,
      1
    );
  }

  return newState;
}

function manage_update_from_filtered_field(
  newState,
  operation,
  payload
) {
  var removeFrom = { index: null, field: null };
  var fields = ['inbox', 'spam', 'deleted'];
  if (operation.from === 'filtered') {
    fields.forEach((field) => {
      newState[field].forEach((email, i) => {
        if (
          payload.from === email.from &&
          payload.date === email.date
        ) {
          removeFrom.index = i;
          removeFrom.field = field;
        }
      });
    });
  }
  return removeFrom;
}

/* .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .*/

function filtered_email(
  state,
  operation,
  payload
) {
  let newState = {
    inbox: state.inbox,
    spam: state.spam,
    deleted: state.deleted,
    filtered: state.filtered,
  };

  let keyword = payload.keyword.toLowerCase();

  let fields = ['inbox', 'spam', 'deleted'];

  let filtered = [];

  fields.forEach((field) => {
    newState[field].forEach((email) => {
      let word = email.from.toLowerCase();
      if (word.includes(keyword)) {
        filtered.push(email);
      }
    });
  });

  newState.filtered = filtered;

  return newState;
}

/*=================================================================*/

export default emailReducers;
