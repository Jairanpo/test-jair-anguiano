import React from 'react';

var mockEmails = [
  {
    from: 'Jair',
    subject: 'This is a test message',
    date: '2020-10-23',
    content:
      'Wanted to wish you a happy birthday, here is a check for you',
  },
  {
    from: 'Sofia',
    subject: 'This is a test message',
    date: '2020-10-23',
    content:
      'Wanted to wish you a happy birthday, here is a check for you',
  },
  {
    from: 'Joelo',
    subject: 'This is a test message',
    date: '2020-10-23',
    content:
      'Wanted to wish you a happy birthday, here is a check for you',
  },
];

function EmailList(props) {
  return (
    <div>
      <ul
        style={{
          listStyleType: 'none',
          padding: '0px',
        }} /*TODO: replace this with sass*/
      >
        {mockEmails.map(function fillEmails(
          email,
          index
        ) {
          return (
            <li key={index}>
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
    </div>
  );
}

export default EmailList;
