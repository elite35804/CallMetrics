import React, {useState} from "react";
import './index.css';

const Versions = props => {
  return (
    <div id="user-history" className="field">
      <h3>Versions
        <small>click on a row to restore an older version of this user</small>
      </h3>
      <div className="card" id="change-history">
      </div>
    </div>
  );
};

export default Versions;
