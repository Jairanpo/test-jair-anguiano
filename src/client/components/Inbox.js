import React from 'react';

/*-----------------------------------------------------------------*/

function Inbox(props) {
  function handleChange(event) {
    props.updateFilter(event.target.value);
  }

  return (
    <div className="inbox">
      <div className="inbox-title">Inbox</div>
      <label htmlFor="inbox-select"></label>
      <div className="inbox-filter">
        <select
          id="inbox-select"
          onChange={handleChange}
        >
          <option
            className="inbox-option-inbox"
            value="inbox"
          >
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

/*=================================================================*/

export default Inbox;
