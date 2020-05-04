import React, {
  useState,
  useEffect,
} from 'react';
import EmailList from './EmailList';
import Inbox from './Inbox';
import EmailDetails from './EmailDetails';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import updateEmailAction from './actionCreators/updateEmailAction';

/*============================================================================*/

function EmailDashboard(props) {
  const [filter, setFilter] = useState('inbox');
  const [
    newEmailsAmount,
    setNewEmailsAmount,
  ] = useState(0);

  /*     .     .     .     .     .     */

  useEffect(() => {
    setInterval(function () {
      axios
        .get('http://localhost:3000/api/email')
        .then(function (response) {
          props.updateEmailAction(
            { action: 'UNSHIFT_EMAILS' },
            response.data
          );

          return;
        })
        .catch((err) => {
          console.log(err);
        });
    }, 3000);
  }, []);

  function handleFilter(value) {
    setFilter(value);
  }

  useEffect(() => {
    var newMails = 0;

    props.emails.forEach((element) => {
      if (
        element.isReaded === false &&
        element.field === 'inbox'
      ) {
        return newMails++;
      }
    });
    setNewEmailsAmount(newMails);
  });

  /*     .     .     .     .     .     */

  return (
    <div className="email-dashboard">
      <div className="email-dashboard-grid">
        <div className="email-dashboard-table">
          <Inbox
            updateFilter={handleFilter}
            filter={filter}
            newEmailsAmount={newEmailsAmount}
          />
          <EmailList
            updateFilter={handleFilter}
            filter={filter}
          />
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

function mapStateToProps(state) {
  return {
    emails: state.emails,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      updateEmailAction,
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmailDashboard);
