'use strict';

/*-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --*/

function editEmailAction(operation, payload) {
  return {
    type: operation.type,
    payload: payload,
    operation: operation,
  };
}

/*=================================================================*/

export default editEmailAction;
