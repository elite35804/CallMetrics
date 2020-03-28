import React from 'react'

const Filter = props => {
  return (
    <div id="report-filter-box">
      <div className="filter-more">
        <a className="button guide-filter" onClick={() => props.setOpen(true)}><i className="font-filter"/> <span
          className="hidden-xs hidden-sm hidden-md">Filter</span></a>
      </div>
      <div className="display-box" style={{display: "none"}}>
        <div className="dates" style={{display: "none;"}}>2020-02-23 - 2020-03-24</div>
        <div className="label" style={{display: "none;"}}/>
      </div>
    </div>
  )
};

export default Filter;
