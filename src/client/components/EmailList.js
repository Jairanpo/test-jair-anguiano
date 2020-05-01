import React, { useState } from 'react';

var mockEmails = [
  {
    from: 'mhallatt0@walmart.com',
    to: 'cziem0@surveymonkey.com',
    subject: 'Office Assistant IV',
    body:
      'condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis',
    date: '3/31/2017',
    isReaded: false,
    avatar:
      'https://robohash.org/dignissimosetsuscipit.jpg?size=50x50&set=set1',
    tag: 'Indigo',
    attachements: [
      {
        file:
          'http://dummyimage.com/250x250.jpg/5fa2dd/ffffff',
        name: 'ut_nulla_sed.jpeg',
      },
    ],
  },
  {
    from: 'nmulbery1@seattletimes.com',
    to: 'idimont1@usa.gov',
    subject: 'Technical Writer',
    body:
      'sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet',
    date: '11/17/2016',
    isReaded: false,
    avatar:
      'https://robohash.org/aliquamautdolore.jpg?size=50x50&set=set1',
    tag: 'Teal',
    attachements: [
      {
        file:
          'http://dummyimage.com/250x250.jpg/dddddd/000000',
        name: 'sodales_scelerisque_mauris.jpeg',
      },
    ],
  },
];

function EmailList(props) {
  const [display, setDisplay] = useState('');

  function handleClick(event) {
    setDisplay(event.currentTarget.dataset.from);
  }

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
            <li
              style={{
                cursor: 'pointer',
                borderStyle: 'solid',
                borderWidth: '1px',
                borderColor: '#888',
              }} /*TODO: Replace this CSS*/
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

export default EmailList;
