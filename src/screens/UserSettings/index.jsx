import React, {useState} from "react";
import './index.css';
import SubHeader from "./SubHeader";
import Sidebar from "./Sidabar";
import AgentProfile from "./AgentProfile";
import Info from "./Info";
import Detail from "./Detail";
import Authentication from "./Authentication";
import AgentContact from "./AgentContact";
import MessageResponse from "./MessageResponse";
import InboundVoicemail from "./InboundVoicemail";
import OutboundVoicemail from "./OutboundVoicemail";
import Devices from "./Devices";
import ActivityHistory from "./ActivityHistory";
import Versions from "./Versions";
import Header from "../../components/header/Header";

const UserSettings = props => {
  const [isInfo, setInfo] = useState(true);
  return (
    <div>
      <Header>
        <SubHeader setInfo={setInfo} isInfo={isInfo}/>
      </Header>
      <div className="sidenav-container container-fluid">
        <div className="row sidebar-row">
          <Sidebar/>
          <div className="col-md-10 pageform">
            <div className="row animation_custom">
              {isInfo && <Info />}
              <Detail />
              <Authentication />
              <AgentProfile />
              <AgentContact />
              <MessageResponse />
              <InboundVoicemail />
              <OutboundVoicemail />
              <Devices />
              <ActivityHistory />
              <Versions />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default UserSettings;



