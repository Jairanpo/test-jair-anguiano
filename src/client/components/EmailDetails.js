import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import editEmailAction from './actionCreators/editEmailsAction';

/*-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --*/

function EmailDetails(props) {
  return renderDetails(props.displayEmail, props);
}

/*-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --*/

function renderDetails(displayEmail, props) {
  if (displayEmail.from) {
    return (
      <div>
        <div>
          <button
            className="email-label-delete"
            onClick={handleEditEmailAction(
              props,
              displayEmail,
              {
                type: 'MOVE_EMAIL',
                from: props.filter,
                to: 'deleted',
              }
            )}
          >
            Delete
          </button>
          <button
            className="email-label-spam"
            onClick={handleEditEmailAction(
              props,
              displayEmail,
              {
                type: 'MOVE_EMAIL',
                from: props.filter,
                to: 'spam',
              }
            )}
          >
            Spam
          </button>

          <button
            className="email-label-unread"
            onClick={handleEditEmailAction(
              props,
              displayEmail,
              {
                type: 'MOVE_EMAIL',
                from: props.filter,
                to: 'inbox',
              }
            )}
          >
            Mark as unread
          </button>
        </div>
        <div className="email-details-from">
          {displayEmail.from}
        </div>
        <div className="email-details-tags">
          <span>Tags:</span>
          {fillTags(displayEmail)}
        </div>
        <div className="email-details-body">
          {displayEmail.body}
        </div>
        <div className="email-details-footer">
          <button>attachment</button>
          <button>Replay</button>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}
/* .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .*/

function fillTags(emailDetails) {
  let tagsArray = [emailDetails.tag];
  var tags = tagsArray.map(function (tag, index) {
    return (
      <span
        className="email-details-tags"
        key={index}
      >
        {tag}
      </span>
    );
  });
  return [tags];
}

/* .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .*/

function handleEditEmailAction(
  props,
  payload,
  operation
) {
  return function handleClick(event) {
    payload.type = props.filter;
    props.editEmailAction(operation, payload);
  };
}

/*=================================================================*/

function mapStateToProps(state) {
  return {
    displayEmail: state.displayEmail,
  };
}

function mapActionsToProps(dispatch) {
  return bindActionCreators(
    {
      editEmailAction,
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(EmailDetails);
