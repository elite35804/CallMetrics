import React, {useState} from "react";

const Info = props => {
  return (
    <div id="content-wrapper">
      <div id="content" className="wrapper">
        <div id="body" style={{overflowX: 'hidden'}}>
          <div className="field" id="data-help">
            <div className="about-section card">
              <div style={{marginBottom: 10}}>
                <div style={{float: 'left'}}>
                  <b>Users</b> are invited into accounts or agencies by giving them roles (access levels)
                  within the accounts. Each user has a single login, but their schedules, outbound numbers,
                  voicemails, and more can be customized within each account.
                </div>
                <div className="clear"/>
                <a className="data-help-button close-data-help" onClick={() => props.setInfo(false)}>Close</a>
                <a className="data-help-button" target="_blank" href="#">More Info</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
