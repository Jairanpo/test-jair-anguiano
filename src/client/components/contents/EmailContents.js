import React from 'react';
import EmailLabel from './EmailLabel';

var mock = {
  from: 'Crosswell Bowen',
  tags: ['inbox', 'business'],
  body:
    'Sint irure ea quis officia ex ut magna dolor aliqua. Do occaecat veniam nulla qui velit cillum ea enim incididunt veniam in. Labore ipsum consectetur do culpa excepteur qui ex nisi consequat nostrud tempor. Commodo ex cillum dolore occaecat laboris. Dolor amet pariatur duis mollit non ad cupidatat. Ex id ullamco proident deserunt.',
};

function EmailContents(props) {
  function fillTags(emailContents) {
    var tags = emailContents.tags.map(function (
      tag
    ) {
      return <span>{tag}</span>;
    });
    return [tags];
  }

  return (
    <div className="email-contents">
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
    </div>
  );
}

export default EmailContents;
