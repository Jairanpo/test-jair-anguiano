import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import updateEmailAction from './actionCreators/updateEmailAction';

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
            onClick={handleUpdateEmailAction(
              props,
              {
                action: 'MOVE_EMAIL',
                from: props.filter,
                to: 'deleted',
              },
              displayEmail
            )}
          >
            Delete
          </button>
          <button
            className="email-label-spam"
            onClick={handleUpdateEmailAction(
              props,
              {
                action: 'MOVE_EMAIL',
                from: props.filter,
                to: 'spam',
              },
              displayEmail
            )}
          >
            Spam
          </button>

          <button
            className="email-label-unread"
            onClick={handleUpdateEmailAction(
              props,
              {
                action: 'EMAIL_HASNT_BEEN_READ',
              },
              displayEmail
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
          <div className="email-details-body-message">
            {displayEmail.body}
          </div>
          <div className="email-details-footer">
            <button className="email-details-footer-attachment">
              <ion-icon name="attach-outline"></ion-icon>
            </button>
            <button className="email-details-footer-replay">
              Reply
            </button>
          </div>
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
        className="email-details-tag"
        key={index}
      >
        {tag}
      </span>
    );
  });
  return [tags];
}

/* .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .*/

function handleUpdateEmailAction(
  props,
  operation,
  payload
) {
  return function handleClick(event) {
    payload.type = props.filter;

    if (operation.action === 'MOVE_EMAIL') {
      props.updateEmailAction(operation, payload);
    } else if (
      operation.action == 'EMAIL_HASNT_BEEN_READ'
    ) {
      props.updateEmailAction(operation, payload);
    }
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
      updateEmailAction,
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(EmailDetails);
