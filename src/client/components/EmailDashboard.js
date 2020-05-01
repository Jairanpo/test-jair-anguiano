import React from 'react';
import EmailList from './EmailList';
import SearchBar from './SearchBar';
import Inbox from './Inbox';
import EmailContent from './contents/EmailContents';

function EmailDashboard(props) {
  return (
    <div className="email-dashboard">
      <div className="email-dashboard-grid">
        <div className="email-list">
          <Inbox />
          <SearchBar />
          <EmailList />
        </div>
        <div className="email-content">
          <EmailContent />
        </div>
      </div>
    </div>
  );
}

export default EmailDashboard;
