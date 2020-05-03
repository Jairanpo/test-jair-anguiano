'use strict';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import updateDisplayAction from './actionCreators/updateDisplayEmailAction';
import updateEmailIsReadAction from './actionCreators/updateEmailIsReadAction';
import Searchbar from './Searchbar';

/*-----------------------------------------------------------------*/

function EmailTable(props) {
  function handleClick(payload, filter) {
    return function handleEvent(event) {
      payload.type = filter;
      props.updateDisplayAction(payload);
      props.updateEmailIsReadAction(payload);
    };
  }

  function setListElementClass(isRead) {
    if (isRead === true) {
      return 'email-table-readed-tr';
    } else {
      return 'email-table-unreaded-tr';
    }
  }

  return (
    <div>
      <table className="email-table">
        <tbody>
          <tr>
            <td className="email-table-searchbar-tr">
              <Searchbar />
            </td>
          </tr>
          {props.email[props.filter].map(
            function fillEmails(email, index) {
              return (
                <tr
                  tabIndex="0"
                  className={setListElementClass(
                    email.isReaded
                  )}
                  data-date={email.date}
                  data-from={email.from}
                  key={index}
                  onClick={handleClick(
                    email,
                    props.filter
                  )}
                  name={email.from}
                >
                  <td className="email-table-data">
                    <div>{email.from}</div>
                    <div>{email.date}</div>
                    <div>{email.subject}</div>
                    <ion-icon name="attach-outline"></ion-icon>
                  </td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </div>
  );
}

/*=================================================================*/

function mapStateToProps(state) {
  return {
    email: state.email,
    displayEmail: state.displayEmail,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      updateDisplayAction,
      updateEmailIsReadAction,
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmailTable);
