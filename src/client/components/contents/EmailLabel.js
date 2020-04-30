import React from 'react';

function EmailLabel(props) {
  return (
    <div>
      <button className="email-label-delete">
        Delete
      </button>
      <button className="email-label-spam">
        Spam
      </button>

      <button className="email-label-delete">
        Mark as unread
      </button>
    </div>
  );
}

export default EmailLabel;
