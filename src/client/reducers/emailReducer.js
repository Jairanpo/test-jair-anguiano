'use strict';

import seedEmail from '../seed/emailSeed';

/*============================================================================*/

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
        action.payload
      );
    case 'UPDATE_FILTER':
      return update_in_filter(
        state,
        action.payload
      );

    default:
      return state;
  }
}

/*============================================================================*/

function update_has_been_readed(
  state,
  operation,
  payload
) {
  let newState = [...state];

  if (
    operation.action === 'EMAIL_HAS_BEEN_READ'
  ) {
    toggleIsReaded(newState, payload, true);
  } else if (
    operation.action === 'EMAIL_HASNT_BEEN_READ'
  ) {
    toggleIsReaded(newState, payload, false);
  }
  return newState;
}

/*   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .  .  .  .  .  . */

function toggleIsReaded(
  newState,
  payload,
  value
) {
  newState.map((element) => {
    if (
      payload.from === element.from &&
      payload.date === element.date
    ) {
      element.isReaded = value;
    }
    return element;
  });
}

/* ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- */

function move_email(state, operation, payload) {
  let newState = [...state];

  if (operation.from !== operation.to) {
    newState.map((element) => {
      if (
        element.from === payload.from &&
        element.date === payload.date
      ) {
        element.field = operation.to;
      }
      return element;
    });
  }

  return newState;
}

/* ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- */

function filtered_email(state, payload) {
  let newState = [...state];
  let keyword = payload.keyword.toLowerCase();

  newState.map((element) => {
    if (
      element.from
        .toLowerCase()
        .includes(keyword) ||
      element.subject
        .toLowerCase()
        .includes(keyword)
    ) {
      element.inFilter = true;
    }
    return element;
  });

  return newState;
}

/* ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- */

function update_in_filter(state, payload) {
  let newState = [...state];
  newState.map((element) => {
    if (element.inFilter !== payload.value) {
      element.inFilter = payload.value;
    }
    return element;
  });
  return state;
}

/*////////////////////////////////////////////////////////////////////////////*/

export default emailReducers;
