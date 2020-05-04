import React, {
  useState,
  useEffect,
} from 'react';
import EmailTable from './EmailTable';
import Inbox from './Inbox';
import EmailDetails from './EmailDetails';

/*============================================================================*/

function EmailDashboard(props) {
  const [filter, setFilter] = useState('inbox');
  var lastFetch = Date.now();

  useEffect(() => {
    console.log(lastFetch);
  });

  function handleFilter(value) {
    setFilter(value);
  }

  return (
    <div className="email-dashboard">
      <div className="email-dashboard-grid">
        <div className="email-dashboard-table">
          <Inbox
            updateFilter={handleFilter}
            filter={filter}
          />
          <EmailTable
            updateFilter={handleFilter}
            filter={filter}
          />
          <p>test</p>
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

/*============================================================================*/

export default EmailDashboard;
