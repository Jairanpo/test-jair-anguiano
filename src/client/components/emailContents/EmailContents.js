import React from 'react';
import EmailLabel from './EmailLabel';
import { connect } from 'react-redux';

function EmailContents(props) {
  function fillTags(emailContents) {
    var tags = emailContents.tags.map(function (
      tag,
      index
    ) {
      return <span key={index}>{tag}</span>;
    });
    return [tags];
  }

  return (
    <div>{props.displayEmail}</div>
    /*    <div className="email-contents">
      <EmailLabel />
      <div className="email-contents-from">
        {mock.from}
      </div>
      <div className="email-contents-tags">
        {fillTags(mock)}
      </div>
      <div className="email-contents-body">
        {mock.body}
      </div>
      <div className="email-contents-footer">
        <button>attachment</button>
        <button>Replay</button>
      </div>
    </div> */
  );
}

function mapStateToProps(state) {
  displayEmail: state.displayEmail;
}

export default connect()(EmailContents);
