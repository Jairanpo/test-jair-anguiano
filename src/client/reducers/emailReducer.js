'use strict';

import seedEmail from '../seed/emailSeed';

/*-----------------------------------------------------------------*/

function emailReducers(
  state = seedEmail,
  action
) {
  switch (action.type) {
    case 'EMAIL_HAS_BEEN_READ':
      return email_has_been_read(
        state,
        action.payload
      );
    case 'MOVE_EMAIL':
      return move_email(
        state,
        action.operation,
        action.payload
      );
    default:
      return state;
  }
}

/*-----------------------------------------------------------------*/

function email_has_been_read(state, payload) {
  let newState = state;
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

/* .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .*/

function move_email(state, operation, payload) {
  let newState = {
    inbox: state.inbox,
    deleted: state.deleted,
    spam: state.spam,
  };
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
    console.log(payload);

    newState[operation.to].push(payload);
    newState[operation.from].splice(i, 1);
  }

  return newState;
}

/*=================================================================*/

export default emailReducers;
