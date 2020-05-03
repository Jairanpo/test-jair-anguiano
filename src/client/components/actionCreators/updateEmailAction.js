'use strict';
/*-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --*/

function updateDisplayEmail(operation, payload) {
  return {
    type: operation.action,
    operation: operation,
    payload: payload,
  };
}

/*=================================================================*/

export default updateDisplayEmail;
