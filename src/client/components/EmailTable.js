'use strict';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import updateEmailAction from './actionCreators/updateEmailAction';

/*-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --*/

function EmailTable(props) {
  const [search, setSearch] = useState('');

  function handleInput(event) {
    setSearch(event.target.value);
  }

  return (
    <div>
      <table className="email-table">
        <tbody>
          <tr>
            <td className="email-table-searchbar-tr">
              <div className="search-bar">
                <input
                  className="search-bar-input"
                  name="search-bar"
                  value={search}
                  onChange={handleInput}
                  onKeyDown={handleKeyPressed(
                    props,
                    {
                      action: 'FILTERED_EMAILS',
                    },
                    { keyword: search }
                  )}
                />
              </div>
            </td>
          </tr>
          {fillTableWithEmails(props)}
        </tbody>
      </table>
    </div>
  );
}
/*-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --*/

function handleKeyPressed(
  props,
  operation,
  payload
) {
  return function handleKeyPressedEvent(event) {
    if (event.key === 'Enter') {
      props.updateEmailAction(operation, payload);
    }
  };
}

/* .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .*/

function setListElementClass(isRead) {
  if (isRead === true) {
    return 'email-table-readed-tr';
  } else {
    return 'email-table-unreaded-tr';
  }
}

/* .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .*/

function handleClick(props, operation, payload) {
  return function handleEvent(event) {
    payload.type = props.filter;
    props.updateEmailAction(
      { action: 'UPDATE_DISPLAY_EMAIL' },
      payload
    );
    props.updateEmailAction(operation, payload);
  };
}

/* .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .*/

function fillTableWithEmails(props) {
  var _html;
  if (props.emails[props.filter].length !== 0) {
    _html = props.emails[props.filter].map(
      (email, index) => {
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
              props,
              { action: 'EMAIL_HAS_BEEN_READ' },
              email
            )}
            name={email.from}
          >
            <td className="email-table-data">
              <div className="email-table-data-top">
                <div className="email-table-data-top-from">
                  {email.from}
                </div>
                <div className="email-table-data-top-date">
                  {email.date}
                </div>
              </div>
              <div className="email-table-data-bottom">
                <div className="email-table-data-bottom-subject">
                  {email.subject}
                </div>
                <div className="email-table-data-bottom-attachment">
                  <ion-icon name="attach-outline"></ion-icon>
                </div>
              </div>
            </td>
          </tr>
        );
      }
    );
  } else {
    if (props.emails.filtered.length === 0) {
      _html = (
        <tr className="email-table-readed-tr">
          <td className="email-table-data">
            No messages to show
          </td>
        </tr>
      );
    }
  }
  return _html;
}

/*=================================================================*/

function mapStateToProps(state) {
  return {
    emails: state.emails,
    displayEmail: state.displayEmail,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      updateEmailAction,
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmailTable);
