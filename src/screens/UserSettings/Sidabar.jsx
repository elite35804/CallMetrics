import React, {useState} from "react";
import Scrollspy from 'react-scrollspy';
import './index.css';

const Sidebar = props => {
  const items = [
    'user-user-detail',
    'user-instructions',
    'user-agent-profile',
    'user-agent-contact',
    'user-agent-message-responses',
    'user-agent-inbound-voicemail',
    'user-agent-outbound-voicemail',
    'user-devices',
    'user-logins',
    'user-history'
  ];
  return (
    <div className="col-md-2">
      <nav className="hidden-print hidden-xs hidden-sm pagenav affix">
        <Scrollspy
          items={items}
          currentClassName="active"
          className="nav nav-pills nav-stacked"
        >
            <li><a href="#user-user-detail">User Detail</a></li>
            <li><a href="#user-instructions">Authentication</a></li>
            <li><a href="#user-agent-profile">Agent Profile</a></li>
            <li><a href="#user-agent-contact">Agent Contact</a></li>
            <li><a href="#user-agent-message-responses">Message Responses</a></li>
            <li><a href="#user-agent-inbound-voicemail">Inbound Voicemail</a></li>
            <li><a href="#user-agent-outbound-voicemail">Outbound Voicemail</a></li>
            <li><a href="#user-devices">Devices</a></li>
            <li><a href="#user-logins">Activity History</a></li>
            <li><a href="#user-history">Versions</a></li>
        </Scrollspy>
      </nav>
    </div>
  );
};

export default Sidebar;
