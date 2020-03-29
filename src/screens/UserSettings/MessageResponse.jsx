import React from 'react';

const MessageResponse = props => {
  return (
    <div className="edit_user">
      <div id="user-agent-message-responses" className="field">
        <h3>Message Responses
          <small>set up pre-written responses to chats and texts</small>
        </h3>
        <div className="card">
          <div id="message-responses" className="container-fluid"/>
          <div className="no-message-responses"><b>No message responses added.</b> Click the
            "Add Message Response" button below.
          </div>
          <footer>
            <a id="add-message-response" style={{marginRight: 3}}
               className="button pull-left outlined">Add Message Response</a>
            <div className="button callout save-button pull-left"
                 data-submit="update_message_responses">
              <div className="indicator-loop"><i className="save"/></div>
              <span>Save Changes</span></div>
            <div className="clear"/>
          </footer>
        </div>
      </div>
    </div>
  )
};

export default MessageResponse;
