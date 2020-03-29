import React from 'react';
const SubHeader = props => {
  const {isInfo, setInfo} = props;
  return (
    <div className="header crumbs" style={{marginTop: -40}}>
      <div id="report-filter-shadow" className="hiding"/>
      <div className="title">
        <div className="paths-md hidden-sm hidden-xs">
          <h1>Manage Users<small>in SW Marketing</small></h1>
        </div>
        <div className="paths-sm hidden-md hidden-lg">
          <h1>Manage Users</h1>
        </div>
      </div>
      <div className="actions">
        <a className="button no-add show-data-help" style={{marginRight: 5}} onClick={() => setInfo(!isInfo)}>
          <i className="font-info"/> <span className="caption">
          <span className="hidden-xs">Info</span>
        </span>
          <span className="hidden-sm hidden-md hidden-lg"/>
        </a>
        <a href="#" className="button callout hidden-sm hidden-md hidden-lg guide-new-user"
           style={{fontWeight: 'bold', fontSize: '100%'}} title="">+</a>
        <a href="" className="button callout hidden-xs guide-new-user" >New User</a>
      </div>
    </div>
  )
};

export default SubHeader;
