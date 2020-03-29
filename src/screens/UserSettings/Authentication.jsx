import React from 'react';

const Authentication = props => {
  return (
    <div id="user-instructions" className="field">
      <h3>Authentication
        <small> reset the user's password, re-send the welcome email, or send password reset instructions</small>
      </h3>
      <div className="card">
        <div className="field">
          <label>Reset Password</label>
          <p><i className="font-lock"/> To reset your password, click the "Send
            Password Reset" button. <span className="hint">In order to reset password, you must be logged out of your account prior to clicking the reset password link emailed to you.</span>
          </p>
          <div className="panel">
            <h4>Authorization Providers</h4>
            <table className="table">
              <tbody>
              <tr><th>Salesforce -<small><a href="#"> Add login</a></small></th></tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="field">
          <span id="two-factor-section">
            <h4><b>Two-Factor Authentication</b></h4>
            <a href="#">Enable Two-Factor Authentication <i className="font-chevron-right"/></a>
          </span>
        </div>
        <footer>
          <div className="pull-right">
            <a className="button" id="send-password-reset"
               data-id="USRCE9997C993A5FDE881059FCC53A586BD">Send Password Reset</a>&nbsp;
            <a className="button" id="send-welcome-email"
               data-id="USRCE9997C993A5FDE881059FCC53A586BD">Send Welcome Email</a>
          </div>
          <div className="clear"/>
        </footer>
      </div>
    </div>
  )
};

export default Authentication;
