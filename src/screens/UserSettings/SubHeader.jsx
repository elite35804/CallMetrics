import React, {useState} from "react";
import './index.css';

const SubHeader = props => {
  const { isInfo, setInfo } = props;
  return (
    <div className="header crumbs" style={{marginTop: -40}}>
      <div className="title">
        <div className="paths-md hidden-sm hidden-xs">
          <a className="text link_back index_0" href="#">Manage Users</a>
          <span className="edge"/>
          <span className="text">
            <span className="edit-object-selector popoverPicker-button">
              <span className="select2-choice">
                <span className="agent-initials button-background">TS<span className="agent-pic"/></span>&nbsp;
                <span className="result-text">Terrance Selb&nbsp;
                  <span className="result-desc">swmarketing@protonmail.com</span>
                </span>
              </span>
            </span>
          </span>
        </div>

        <div className="paths-sm hidden-md hidden-lg">
          <a href="https://app.calltrackingmetrics.com/account_users">
            <i className="font-chevron-left"/>
          </a>
          <span>Edit User</span>
        </div>
      </div>
      <div className="actions">
        <a className="button no-add" id="show-history">
          <i className="font-history"/>&nbsp;
          <span className="caption">
            <span className="hidden-xs">Versions</span>
          </span>
          <span className="hidden-sm hidden-md hidden-lg"/>
        </a>
        <a className="button no-add show-data-help" onClick={() => setInfo(!isInfo)}>
          <i className="font-info"/>&nbsp;
          <span className="caption">
            <span className="hidden-xs">Info</span>
          </span>
          <span className="hidden-sm hidden-md hidden-lg"/>
        </a>
      </div>

    </div>

  );
};

export default SubHeader;
