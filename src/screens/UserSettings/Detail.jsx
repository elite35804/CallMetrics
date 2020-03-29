import React from 'react';

const Detail = props => {
  return (
    <div id="user-user-detail" className="field">
      <h3>User Detail
        <small>user's email address and name</small>
      </h3>
      <div className="clear"/>
      <div className="card guide-user-user-detail">
        <div className="field textfield"><label htmlFor="user_email">Email Address</label>
          <input style={{width: 300}} className="text string" type="text" value="swmarketing@protonmail.com"
                 id="user_email" onChange={() => {}}/>
          <span className="hint">email is used to log in</span>
          <div className="clear-break"/>
        </div>
        {/*<div className="user-email-exists well"/>*/}
        <div className="field textfield">
          <label htmlFor="user_email_authentication">Password</label>
          <input className="text string" id="user_email_authentication" size="30" type="password"/>
          <span className="hint">enter your password to confirm changing this email address</span>
          <div className="clear-break"/>
        </div>
        <div className="field">
          <label htmlFor="user_name">Name</label>
          <div className="row">
            <div className="col-xs-12 col-sm-4">
              <input className="text" style={{width: '100%'}} placeholder="First" type="text"
                     value="Terrance" id="user_first_name"/>
            </div>
            <div className="col-xs-12 col-sm-4">
              <input className="text" autoComplete="off" style={{width: '100%'}} placeholder="Last"
                     type="text" value="Selb" id="user_last_name"/>
            </div>
          </div>
        </div>
        <div className="field textfield">
          <label>Language</label>
          <div className="select2-container text string" id="s2id_user_language" style={{width: 300}}>
            <a href="#" className="select2-choice">
              <span className="select2-chosen" id="select2-chosen-1134900620">English</span>
              <abbr className="select2-search-choice-close"/>
              <span className="select2-arrow" role="presentation"><b/></span>
            </a>
            <label className="select2-offscreen">Language</label>
            <input className="select2-focusser select2-offscreen" type="text"/>
            <div className="select2-drop select2-display-none select2-with-searchbox">
              <div className="select2-search">
                <label className="select2-offscreen">Language</label>
                <input type="text" className="select2-input"/>
              </div>
            </div>
          </div>
          {/*<input style={{width: 300}} className="text string" type="text"*/}
          {/*value="en" id="user_language" title="Language"/>*/}
          <div className="clear-break"/>
        </div>
        <footer>
          <div className="button callout save-button pull-left" style={{marginRight: 5}}
               data-submit="user-login">
            <div className="indicator-loop"><i className="save"/></div>
            <span>Save Changes</span></div>
          <div className="clear"/>
        </footer>
      </div>
    </div>
  )
};

export default Detail;
