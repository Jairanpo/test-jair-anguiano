import React from 'react';

function Inbox(props) {
  return (
    <div>
      <div className="inbox-title">Inbox</div>
      <div className="filter">
        <select id="inbox-select">
          <option className="inbox-option-inbox">
            Filter by
          </option>
          <option
            className="inbox-option-inbox"
            value="inbox"
          >
            Inbox
          </option>
          <option
            className="inbox-option-spam"
            value="spam"
          >
            Spam
          </option>
          <option
            className="inbox-option-deleted"
            value="deleted"
          >
            Deleted
          </option>
        </select>
      </div>
    </div>
  );
}

export default Inbox;
