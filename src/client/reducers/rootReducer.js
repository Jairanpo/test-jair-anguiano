'use strict';
import { combineReducers } from 'redux';
import emailsReducer from './emailReducer';
import displayEmailReducer from './displayEmailReducer';

/*-----------------------------------------------------------------*/

const rootReducer = combineReducers({
  emails: emailsReducer,
  displayEmail: displayEmailReducer,
});

export default rootReducer;
