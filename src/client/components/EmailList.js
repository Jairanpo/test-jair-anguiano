import React, { useState } from 'react';
import { connect } from 'react-redux';

/*-----------------------------------------------------------------*/

function EmailList(props) {
  const [display, setDisplay] = useState('');

  function handleClick(event) {
    setDisplay(event.currentTarget.dataset.from);
  }

  return (
    <div>
      <ul className="email-list">
        {props.emails.map(function fillEmails(
          email,
          index
        ) {
          return (
            <li
              className="email-list-li"
              data-date={email.date}
              data-from={email.from}
              key={index}
              onClick={handleClick}
              name={email.from}
            >
              <div className="email-top">
                <div>{email.from}</div>
                <div>{email.date}</div>
              </div>
              <div className="email-top">
                <div>{email.subject}</div>
                <div>{'icon'}</div>
              </div>
            </li>
          );
        })}
      </ul>
      <div>We shoud display: {display}</div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    emails: state.emails,
  };
}

export default connect(mapStateToProps)(
  EmailList
);
