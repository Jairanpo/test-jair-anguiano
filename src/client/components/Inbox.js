import React from 'react';

function Inbox(props) {
  return (
    <div>
      <div className="inbox-title">Inbox</div>
      <div className="filter">
        <select id="inbox-select">
          <option value="inbox-option-inbox">
            Inbox
          </option>
          <option value="inbox-option-spam">
            Spam
          </option>
          <option value="inbox-option-deleted">
            Deleted
          </option>
        </select>
      </div>
    </div>
  );
}

export default Inbox;
