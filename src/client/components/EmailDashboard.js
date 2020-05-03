import React, { useState } from 'react';
import EmailTable from './EmailTable';
import Inbox from './Inbox';
import EmailDetails from './EmailDetails';

function EmailDashboard(props) {
  const [filter, setFilter] = useState('inbox');

  function handleFilter(value) {
    setFilter(value);
  }

  return (
    <div className="email-dashboard">
      <div className="email-dashboard-grid">
        <div className="email-dashboard-table">
          <Inbox updateFilter={handleFilter} />
          <EmailTable filter={filter} />
        </div>
        <div className="email-dashboard-content">
          <EmailDetails
            updateFilter={handleFilter}
            filter={filter}
          />
        </div>
      </div>
    </div>
  );
}

export default EmailDashboard;
