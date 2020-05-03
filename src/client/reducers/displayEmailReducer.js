'use strict';

function displayEmailReducer(state = {}, action) {
  switch (action.type) {
    case 'UPDATE_DISPLAY_EMAIL':
      let newState = action.payload;
      return newState;
    default:
      return state;
  }
}

export default displayEmailReducer;
