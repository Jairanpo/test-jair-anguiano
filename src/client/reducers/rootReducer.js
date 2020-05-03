'use strict';
import { combineReducers } from 'redux';
import emailReducer from './emailReducer';
import displayEmailReducer from './displayEmailReducer';

/*-----------------------------------------------------------------*/

const rootReducer = combineReducers({
  email: emailReducer,
  displayEmail: displayEmailReducer,
});

export default rootReducer;
