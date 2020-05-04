'use strict';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import updateEmailAction from './actionCreators/updateEmailAction';

/*============================================================================*/

function EmailList(props) {
  const [search, setSearch] = useState('');
  const [
    isFilterCleared,
    setIsFilterCleared,
  ] = useState(true);

  function handleInput(event) {
    setSearch(event.target.value);
  }
  return (
    <div className="email-list">
      <div className="email-list-searchbar">
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
              { keyword: search },
              isFilterCleared,
              setIsFilterCleared
            )}
          />
        </div>
      </div>
      <div className="email-list-body">
        {fillTableWithEmails(props)}
      </div>
    </div>
  );
}

/*============================================================================*/

function handleKeyPressed(
  props,
  operation,
  payload,
  isFilterCleared,
  setIsFilterCleared
) {
  return function handleKeyPressedEvent(event) {
    if (
      event.key === 'Backspace' &&
      event.target.value.length === 1 &&
      isFilterCleared === false
    ) {
      props.updateFilter('inbox');

      props.updateEmailAction(
        { action: 'UPDATE_FILTER' },
        { value: false }
      );
      setIsFilterCleared(true);
    }

    /*     .     .     .     .     .     */

    if (
      event.key === 'Enter' &&
      event.target.value.length !== 0
    ) {
      props.updateEmailAction(operation, payload);
      props.updateFilter('filtered');
      setIsFilterCleared(false);
    }
  };
}

/* ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- */

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

/* ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- */

function fillTableWithEmails(props) {
  var _html;
  var _currentInboxEmails = [];

  if (props.filter !== 'filtered') {
    props.emails.forEach((element) => {
      if (element.field === props.filter) {
        _currentInboxEmails.push(element);
      }
    });
  } else {
    props.emails.forEach((element) => {
      if (element.inFilter) {
        _currentInboxEmails.push(element);
      }
    });
  }

  if (_currentInboxEmails.length !== 0) {
    _html = _currentInboxEmails.map(
      (email, index) => {
        return (
          <div
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
            <div className="email-list-data">
              <div className="email-list-data-top">
                <div className="email-list-data-top-from">
                  {email.from}
                </div>
                <div className="email-list-data-top-date">
                  {email.date}
                </div>
              </div>
              <div className="email-list-data-bottom">
                <div className="email-list-data-bottom-subject">
                  {email.subject}
                </div>
                <div className="email-list-data-bottom-attachment">
                  <ion-icon name="attach-outline"></ion-icon>
                </div>
              </div>
            </div>
          </div>
        );
      }
    );
  } else {
    if (_currentInboxEmails.length === 0) {
      _html = (
        <div className="email-list-readed">
          <div className="email-list-data">
            No messages to show
          </div>
        </div>
      );
    }
  }
  return _html;
}

/*   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .  .  .  .  .  . */

function setListElementClass(isRead) {
  if (isRead === true) {
    return 'email-list-readed';
  } else {
    return 'email-list-unreaded';
  }
}

/*////////////////////////////////////////////////////////////////////////////*/

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
)(EmailList);
