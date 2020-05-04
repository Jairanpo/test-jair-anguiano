'use strict';
import { combineReducers } from 'redux';
import emailReducer from './emailReducer';
import displayEmailReducer from './displayEmailReducer';

/*============================================================================*/

const rootReducer = combineReducers({
  emails: emailReducer,
  displayEmail: displayEmailReducer,
});

/*============================================================================*/

export default rootReducer;
