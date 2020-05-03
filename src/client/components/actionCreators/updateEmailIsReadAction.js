'use strict';

/*-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --*/

function updateEmailIsReadAction(payload) {
  return {
    type: 'EMAIL_HAS_BEEN_READ',
    payload: payload,
  };
}

/*=================================================================*/

export default updateEmailIsReadAction;
