import React from 'react';
import EmailList from './EmailList';
import SearchBar from './SearchBar';
import Inbox from './Inbox';
import EmailContent from './contents/EmailContents';

function EmailDashboard(props) {
  return (
    <div
      className="email-dashboard"
      style={{
        display: 'grid',
        gridTemplateColumns: '40% 60%',
        margin: '5rem',
        height: '80%',
        boxShadow: '3px 3px 10px #00000055',
      }} /*TODO: Remove styles from here*/
    >
      <div className="email-list">
        <Inbox />
        <SearchBar />
        <EmailList />
      </div>
      <div className="email-content">
        <EmailContent />
      </div>
    </div>
  );
}

export default EmailDashboard;
