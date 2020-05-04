import React from 'react';

/*==================================================================*/

function Inbox(props) {
  function handleChange(event) {
    props.updateFilter(event.target.value);
  }

  function handleAmountClick(goto = 'inbox') {
    return function handleClick(event) {
      props.updateFilter('inbox');
    };
  }

  return (
    <div className="inbox">
      <div className="inbox-title">
        Inbox{' '}
        <span
          className="inbox-title-email-amount"
          onClick={handleAmountClick()}
        >
          {props.newEmailsAmount}
        </span>
      </div>

      <label htmlFor="inbox-select"></label>
      <div className="inbox-filter">
        <select
          id="inbox-select"
          onChange={handleChange}
          value={props.filter}
        >
          <option
            className="inbox-option-inbox"
            value="inbox"
          >
            Filtered by
          </option>
          <option
            className="inbox-option-inbox"
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
          <option
            className="inbox-option-deleted"
            value="filtered"
          >
            Filtered
          </option>
        </select>
      </div>
    </div>
  );
}

/*============================================================================*/

export default Inbox;
