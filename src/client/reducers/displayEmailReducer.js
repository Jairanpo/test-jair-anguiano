'use strict';

function displayEmailReducer(state = [], action) {
  switch (action.type) {
    case 'UPDATE_DISPLAYED_EMAIL':
      let newState = action.payload;
      return newState;
    default:
      return state;
  }
}
