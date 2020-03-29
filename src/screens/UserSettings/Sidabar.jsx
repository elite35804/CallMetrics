import React, {useState} from "react";
import './index.css';

const Sidebar = props => {
  return (
    <div className="col-md-2">
      <nav className="hidden-print hidden-xs hidden-sm pagenav affix animation_custom" data-spy="affix">
        <ul className="nav nav-pills nav-stacked">
          <li role="presentation" className="active"><a href="#user-user-detail">User Detail</a></li>
          <li role="presentation" className=""><a href="#user-instructions">Authentication</a></li>
          <li role="presentation" className=""><a href="#user-agent-profile">Agent Profile</a></li>
          <li role="presentation" className=""><a href="#user-agent-contact">Agent Contact</a></li>
          <li role="presentation" className=""><a href="#user-agent-message-responses">Message Responses</a></li>
          <li role="presentation" className=""><a href="#user-agent-inbound-voicemail">Inbound Voicemail</a></li>
          <li role="presentation" className=""><a href="#user-agent-outbound-voicemail">Outbound Voicemail</a></li>
          <li role="presentation" className=""><a href="#user-devices">Devices</a></li>
          <li role="presentation" className=""><a href="#user-logins">Activity History</a></li>
          <li role="presentation" id="sidebar-user-history" className=""><a href="#user-history">Versions</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
