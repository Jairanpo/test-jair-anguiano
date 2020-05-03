'use strict';
/*-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --*/

function updateDisplayEmail(payload) {
  return {
    type: 'UPDATE_DISPLAY_EMAIL',
    payload: payload,
  };
}

/*=================================================================*/

export default updateDisplayEmail;
