import React from 'react';

const OutboundVoicemail = props => {
  return (
    <form id="update_outbound_voicemails" className="edit_user">
      <div id="user-agent-outbound-voicemail" className="field">
        <h3>Outbound Voicemail
          <small>prerecorded messages for outbound calls</small>
        </h3>
        <div className="card">
          <p>Outbound voicemails allow agents to quickly handle voicemail boxes by having
            a pre-recorded greeting play before automatically hanging up. They are
            available as a transfer option when making an outbound call in the
            softphone.</p>
          <p><b>Note:</b> use <i className="font-cloud-upload"/> or
            <i className="font-mic"/> to select a recording, then optionally select a tracking source.</p>
          <p>If a tracking source is selected, a tracking number assigned to that source
            must be used on the outbound call for this voicemail to be available as a
            transfer option.</p>
          <div id="outbound-voicemails" className="container-fluid"/>
          <div className="no-outbound-voicemails well">No voicemail messages created. Click
            the "Add Outbound Voicemail" button below to add a new message.
          </div>
          <footer>
            <a id="add-outbound-voicemail" style={{marginRight: 3}}
               className="button pull-left outlined"><i className="font-plus"/> Add Outbound Voicemail</a>
            <div className="button callout save-button pull-left"
                 data-submit="update_outbound_voicemails">
              <div className="indicator-loop"><i className="save"/></div>
              <span>Save Changes</span>
            </div>
            <div className="clear"/>
          </footer>
        </div>
      </div>
    </form>

  )
};

export default OutboundVoicemail;
