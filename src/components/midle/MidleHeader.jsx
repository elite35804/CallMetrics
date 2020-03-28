import React, {Component, useState} from "react";
import Filter from "./Filter";
import Search from "./Search";
import FilterBody from "./FilterBody";

const MidleHeader = props => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div id="content-wrapper">
      <div id="content" className="wrapper">
        <div id="body" style={{overflowX: "hidden"}}>
          <div className="header" id="call-log-header">
            <Filter setOpen={setOpen}/>
            <div id="report-filter-shadow"/>
            <FilterBody isOpen={isOpen} setOpen={setOpen}/>
            <Search/>
          </div>
          <div className="call-log-toolbar call-edit-frame"/>
        </div>
      </div>
    </div>
  );
}

export default MidleHeader;
