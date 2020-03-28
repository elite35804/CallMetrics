import React from "react";

const FilterBody = props => {
  const {isOpen, setOpen} = props;
  return (
    <div id="report-date-selection" className={isOpen ? "showing" : "hiding"}>
      <form id="report-filter" className="pageform" style={{height: '100%'}} noValidate="novalidate">
        <div className="header crumbs">
          <div className="title">
            <div className="paths-sm">
              <a id="report-filter-cancel" onClick={() => setOpen(false)}><i className="font-chevron-left"/></a>
              <span>Filters</span>
            </div>
          </div>
          <div className="actions">
            <a id="report-filter-reset" className="button" style={{marginBottom: 0}}>
              <i className="font-refresh"/>
            </a>
            <button className="button callout" style={{marginBottom: 0}}>Apply Filter</button>
          </div>
        </div>

        <div className="filter-content">
          <div className="field">
            <div className="card" id="report-filter-control">
              <div id="report-filter-control-mask">
                <div className="indicator-loop show-loop">
                  <i className="save font-spinner-2 icon-loop-repeat"/>
                </div>
              </div>
              <div className="field">
                <div className="select2-container text saved_filter" id="s2id_report_filter_name"
                     style={{width: '100%'}}>
                  <a className="select2-choice select2-default">
                    <span className="select2-chosen" id="select2-chosen-2456703933">Choose saved filters</span>
                    <abbr className="select2-search-choice-close"/>
                    <span className="select2-arrow"><b/></span>
                  </a>
                  <label className="select2-offscreen"/>
                </div>
                <input id="report_filter_name" className="text saved_filter" style={{width: '100%', display: 'none'}}
                       type="text"/>
              </div>
              <footer>
                <a id="save_current_filters" className="button">Save Filter</a>
                <a className="button pull-right"
                   href="https://app.calltrackingmetrics.com/report_filters">Manage
                  Filters</a><br/>
              </footer>
            </div>
          </div>

          <div className="field">
            <div className="card">
              <div className="daterange">
                <div className="container-fluid">
                  <div className="row picker">
                    <label className="toggle-range" data-name="date" data-date="builtin"
                           htmlFor="report_filter_called_at">Date
                      <div className="select2-container toggle-range-popup"
                           id="s2id_date_operator">
                        <a href="#" className="select2-choice">
                          <span className="select2-chosen" id="select2-chosen-3285412663">is between</span>
                          <abbr className="select2-search-choice-close"/>
                          <span className="select2-arrow">
                            <b/>
                          </span>
                        </a>
                        <label className="select2-offscreen"/>
                        <input className="select2-focusser select2-offscreen" type="text"/>
                      </div>
                      <select className="toggle-range-popup" id="date_operator" style={{display: 'none'}}>
                        <option value="greater_than_equal">is on or after</option>
                        <option value="less_than_equal">is on or before</option>
                        <option value="range">is between</option>
                        <option value="today">is today</option>
                        <option value="yesterday">is yesterday</option>
                        <option value="last7">is last 7 days</option>
                        <option value="last30">is last 30 days</option>
                        <option value="lastmonth">is last month</option>
                        <option value="thismonth">is this month</option>
                        <option value="schedule">is in schedule</option>
                      </select></label>
                    <div id="date_container">
                      <span id="date_min_container" className="min_container">
                        <input className="text standard_height" name="start_date" id="start_date"
                               type="text"/>
                      </span>
                      <span className="number_range_to">to</span><span
                      id="date_max_container" className="max_container">
                      <input className="text standard_height" name="end_date" id="end_date" type="text"/>
                    </span>
                    </div>
                    <div id="schedule_container" style={{display: 'none'}}>
                      <div className="select2-container" id="s2id_schedule_select"
                           style={{width: '100%'}}>
                        <a href="#" className="select2-choice select2-default">
                          <span className="select2-chosen" id="select2-chosen-3582717087">Search for a schedule</span>
                          <abbr className="select2-search-choice-close"/>
                          <span className="select2-arrow">
                            <b/>
                          </span>
                        </a>
                      </div>
                      <input type="text" id="schedule_select" style={{width: '100%', display: 'none'}} name="schedule"
                             value=""
                      />
                    </div>
                  </div>
                  <div className="row quick field">
                    <div className="col-micro">
                      <div className="button" id="today" data-range="today">Today</div>
                    </div>
                    <div className="col-micro">
                      <div className="button" id="yesterday" data-range="yesterday">
                        Yesterday
                      </div>
                    </div>
                    <div className="col-micro">
                      <div className="button" id="last7" data-range="last7">Last 7 days</div>
                    </div>
                    <div className="col-micro">
                      <div className="button" id="last30" data-range="last30">Last 30 days
                      </div>
                    </div>
                    <div className="col-micro">
                      <div className="button" id="lastmonth" data-range="lastmonth">Last
                        Month
                      </div>
                    </div>
                    <div className="col-micro">
                      <div className="button" id="thismonth" data-range="thismonth">This
                        Month
                      </div>
                    </div>
                    <div className="col-micro">
                      <div className="button callout" id="alltime" data-range="alltime">All
                        Time
                      </div>
                    </div>
                    <div className="col-micro">
                      <div className="button" id="schedule" data-range="schedule">Schedule
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
          <div className="field">
            <div className="card">
              <div className="field">
                <label className="toggle-picker" data-name="multi_tags"
                       htmlFor="report_filter_multi_tags">Tag
                  <div className="select2-container toggle-picker-popup"
                       id="s2id_multi_tags_operator">
                    <a href="#" className="select2-choice">
                      <span className="select2-chosen">includes</span>
                      <abbr className="select2-search-choice-close"/>
                      <span className="select2-arrow"><b/></span></a>
                  </div>
                  <select className="toggle-picker-popup" id="multi_tags_operator" style={{display: 'none'}}>
                    <option value="includes">includes</option>
                    <option value="excludes">excludes</option>
                    <option value="blank">is not set</option>
                    <option value="present">is set</option>
                  </select>
                </label>
                <div className="select2-container select2-container-multi standard_height"
                     id="s2id_multi_tags" style={{width: '100%'}}>
                  <ul className="select2-choices">
                    <li className="select2-search-field">
                      <label className="select2-offscreen"/>
                      <input type="text" autoComplete="nope" autoCorrect="off"
                             autoCapitalize="off" spellCheck="false"
                             className="select2-input select2-default"
                             id="s2id_autogen3728065329" placeholder=""
                             style={{width: '352.375px'}}/></li>
                  </ul>
                  <div className="select2-drop select2-drop-multi select2-display-none">
                    <ul className="select2-results">
                      <li className="select2-no-results">No matches found</li>
                      <li className="select2-no-results">No matches found</li>
                    </ul>
                  </div>
                </div>
                <input id="multi_tags" className="standard_height" style={{display: 'none', width: '100'}}/>
              </div>
              <div className="field">
                <label className="toggle-picker">Agent
                  <div className="select2-container toggle-picker-popup" id="s2id_multi_agents_operator">
                    <a href="#" className="select2-choice">
                      <span className="select2-chosen">includes</span>
                      <abbr className="select2-search-choice-close"/>
                      <span className="select2-arrow"><b/></span>
                    </a>
                    <label className="select2-offscreen"/>
                    <input className="select2-focusser select2-offscreen" type="text"/>
                    <div className="select2-drop select2-display-none toggle-sidebar-dropdown select2-with-searchbox">
                      <div className="select2-search">
                        <label className="select2-offscreen"/>
                        <input type="text" className="select2-input"/>
                      </div>
                    </div>
                  </div>
                  <select className="toggle-picker-popup" id="multi_agents_operator"
                          name="multi_agents_operator"
                          style={{display: 'none'}}>
                    <option value="includes">includes</option>
                    <option value="excludes">excludes</option>
                    <option value="blank">is not set</option>
                    <option value="present">is set</option>
                  </select></label>
                <div className="select2-container select2-container-multi standard_height"
                     id="s2id_multi_agents" style={{width: '100%'}}>
                  <ul className="select2-choices">
                    <li className="select2-search-field">
                      <label className="select2-offscreen"/>
                      <input type="text" className="select2-input select2-default" style={{width: '352.375px'}}/>
                    </li>
                  </ul>
                  <div className="select2-drop select2-drop-multi select2-display-none">
                    <ul className="select2-results">
                      <li className="select2-no-results">No matches found</li>
                      <li className="select2-no-results">No matches found</li>
                    </ul>
                  </div>
                </div>
                <input type="text" id="multi_agents" className="standard_height"
                       style={{display: 'none', width: '100%'}}/>
              </div>

              <div className="field">
                <label className="toggle-picker">Type
                  <div className="select2-container toggle-picker-popup" id="s2id_direction_operator">
                    <a href="#" className="select2-choice">
                      <span className="select2-chosen">includes</span>
                      <abbr className="select2-search-choice-close"/>
                      <span className="select2-arrow">
                        <b/>
                      </span>
                    </a>
                    <label className="select2-offscreen"/>
                    <input className="select2-focusser select2-offscreen" type="text"/>
                    <div className="select2-drop select2-display-none toggle-sidebar-dropdown select2-with-searchbox">
                      <div className="select2-search">
                        <label className="select2-offscreen"/>
                        <input type="text" className="select2-input"/>
                      </div>
                    </div>
                  </div>
                  <select className="toggle-picker-popup" id="direction_operator"
                          name="direction_operator"
                          style={{display: 'none'}}>
                    <option value="includes">includes</option>
                    <option value="excludes">excludes</option>
                  </select>
                </label>
                <div className="select2-container select2-container-multi standard_height"
                     id="s2id_direction" style={{width: "100%"}}>
                  <ul className="select2-choices">
                    <li className="select2-search-choice">
                      <div><i className="font-phone-incoming inbound"
                              style={{fontSize: '90%', lineHeight: 'inherit'}}/> Inbound Call
                      </div>
                      <a className="select2-search-choice-close"/></li>
                    <li className="select2-search-choice">
                      <div><i className="font-phone-outgoing outbound"
                              style={{fontSize: '90%', lineHeight: 'inherit'}}/> Outbound Call
                      </div>
                      <a className="select2-search-choice-close"/></li>
                    <li className="select2-search-field"><label htmlFor="s2id_autogen1785575921"
                                                                className="select2-offscreen"/>
                      <input type="text" className="select2-input select2-default"
                             style={{width: "20px"}}/></li>
                  </ul>
                  <div className="select2-drop select2-drop-multi select2-display-none">
                    <ul className="select2-results">
                      <li className="select2-no-results">No matches found</li>
                      <li className="select2-no-results">No matches found</li>
                      <li className="select2-no-results">No matches found</li>
                      <li className="select2-no-results">No matches found</li>
                    </ul>
                  </div>
                </div>
                <select multiple="multiple"
                        style={{width: '100%', display: 'none'}} className="standard_height">
                  <option data-icon="font-phone-incoming" value="inbound">Inbound Call
                  </option>
                  <option data-icon="font-phone-outgoing" value="outbound">Outbound Call
                  </option>
                  <option data-icon="font-bubbles" value="msg_inbound">Inbound Text</option>
                  <option data-icon="font-bubbles-2" value="msg_outbound">Outbound Text
                  </option>
                  <option data-icon="font-list-ul" value="form">Form</option>
                </select>
              </div>
            </div>
          </div>

          <div className="field">
            <div className="card">
              <div className="field">
                <label className="toggle-picker" data-name="multi_sources">Tracking Source
                  <div className="select2-container toggle-picker-popup" id="s2id_multi_sources_operator">
                    <a href="#" className="select2-choice">
                      <span className="select2-chosen">includes</span>
                      <abbr
                        className="select2-search-choice-close"/>
                      <span className="select2-arrow"><b/></span>
                    </a>
                  </div>
                  <select className="toggle-picker-popup" id="multi_sources_operator"
                          name="multi_sources_operator"
                          style={{display: 'none'}}>
                    <option value="includes">includes</option>
                    <option value="excludes">excludes</option>
                    <option value="blank">is not set</option>
                    <option value="present">is set</option>
                  </select>
                </label>
                <div className="select2-container select2-container-multi standard_height"
                     id="s2id_multi_sources" style={{width: '100%'}}>
                  <ul className="select2-choices">
                    <li className="select2-search-field">
                      <label className="select2-offscreen"/>
                      <input type="text" className="select2-input select2-default" style={{width: '352.375px'}}/>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="field">
                <label className="toggle-picker">Tracking Number
                  <div className="select2-container toggle-picker-popup" id="s2id_multi_tracking_numbers_operator">
                    <a href="#" className="select2-choice">
                      <span className="select2-chosen">includes</span>
                      <abbr className="select2-search-choice-close"/>
                      <span className="select2-arrow"><b/></span>
                    </a>
                    <label className="select2-offscreen"/>
                    <input className="select2-focusser select2-offscreen" type="text"/>
                  </div>
                </label>
                <div className="select2-container select2-container-multi standard_height"
                     id="s2id_multi_tracking_numbers" style={{width: '100%'}}>
                  <ul className="select2-choices">
                    <li className="select2-search-field">
                      <label className="select2-offscreen"/>
                      <input type="text" className="select2-input select2-default" style={{width: '352.375px'}}/>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="field">
                <label className="toggle-picker">Receiving Number
                  <div className="select2-container toggle-picker-popup" id="s2id_multi_receiving_numbers_operator">
                    <a href="#" className="select2-choice">
                      <span className="select2-chosen" id="select2-chosen-4100467892">includes</span>
                      <abbr className="select2-search-choice-close"/>
                      <span className="select2-arrow"><b/></span>
                    </a>
                    <label className="select2-offscreen"/>
                    <input className="select2-focusser select2-offscreen" type="text"/>
                    <div className="select2-drop select2-display-none toggle-sidebar-dropdown select2-with-searchbox">
                      <div className="select2-search">
                        <label className="select2-offscreen"/>
                        <input type="text" className="select2-input"/>
                      </div>
                    </div>
                  </div>
                </label>
                <div className="select2-container select2-container-multi standard_height"
                     id="s2id_multi_receiving_numbers" style={{width: '100%'}}>
                  <ul className="select2-choices">
                    <li className="select2-search-field">
                      <label className="select2-offscreen"/>
                      <input type="text" className="select2-input select2-default" style={{width: '352.375px'}}/>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="field">
                <label className="toggle-picker">Routes
                  <div className="select2-container toggle-picker-popup" id="s2id_multi_receiving_numbers_operator">
                    <a href="#" className="select2-choice">
                      <span className="select2-chosen" id="select2-chosen-4100467892">includes</span>
                      <abbr className="select2-search-choice-close"/>
                      <span className="select2-arrow"><b/></span>
                    </a>
                    <label className="select2-offscreen"/>
                    <input className="select2-focusser select2-offscreen" type="text"/>
                    <div className="select2-drop select2-display-none toggle-sidebar-dropdown select2-with-searchbox">
                      <div className="select2-search">
                        <label className="select2-offscreen"/>
                        <input type="text" className="select2-input"/>
                      </div>
                    </div>
                  </div>
                </label>
                <div className="select2-container select2-container-multi standard_height"
                     id="s2id_multi_receiving_numbers" style={{width: '100%'}}>
                  <ul className="select2-choices">
                    <li className="select2-search-field">
                      <label className="select2-offscreen"/>
                      <input type="text" className="select2-input select2-default" style={{width: '352.375px'}}/>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="field">
            <div className="card">
              <div className="field">
                <label className="toggle-picker">Status
                  <div className="select2-container toggle-picker-popup" id="s2id_multi_receiving_numbers_operator">
                    <a href="#" className="select2-choice">
                      <span className="select2-chosen" id="select2-chosen-4100467892">includes</span>
                      <abbr className="select2-search-choice-close"/>
                      <span className="select2-arrow"><b/></span>
                    </a>
                    <label className="select2-offscreen"/>
                    <input className="select2-focusser select2-offscreen" type="text"/>
                    <div className="select2-drop select2-display-none toggle-sidebar-dropdown select2-with-searchbox">
                      <div className="select2-search">
                        <label className="select2-offscreen"/>
                        <input type="text" className="select2-input"/>
                      </div>
                    </div>
                  </div>
                </label>
                <div className="select2-container select2-container-multi standard_height"
                     id="s2id_multi_receiving_numbers" style={{width: '100%'}}>
                  <ul className="select2-choices">
                    <li className="select2-search-field">
                      <label className="select2-offscreen"/>
                      <input type="text" className="select2-input select2-default" style={{width: '352.375px'}}/>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="field">
                <label className="toggle-picker">Keypress
                  <div className="select2-container toggle-picker-popup" id="s2id_multi_receiving_numbers_operator">
                    <a href="#" className="select2-choice">
                      <span className="select2-chosen" id="select2-chosen-4100467892">includes</span>
                      <abbr className="select2-search-choice-close"/>
                      <span className="select2-arrow"><b/></span>
                    </a>
                    <label className="select2-offscreen"/>
                    <input className="select2-focusser select2-offscreen" type="text"/>
                    <div className="select2-drop select2-display-none toggle-sidebar-dropdown select2-with-searchbox">
                      <div className="select2-search">
                        <label className="select2-offscreen"/>
                        <input type="text" className="select2-input"/>
                      </div>
                    </div>
                  </div>
                </label>
                <div className="select2-container select2-container-multi standard_height"
                     id="s2id_multi_receiving_numbers" style={{width: '100%'}}>
                  <ul className="select2-choices">
                    <li className="select2-search-field">
                      <label className="select2-offscreen"/>
                      <input type="text" className="select2-input select2-default" style={{width: '352.375px'}}/>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="field">
                <label className="toggle-picker">Transfer From
                  <div className="select2-container toggle-picker-popup" id="s2id_multi_receiving_numbers_operator">
                    <a href="#" className="select2-choice">
                      <span className="select2-chosen" id="select2-chosen-4100467892">includes</span>
                      <abbr className="select2-search-choice-close"/>
                      <span className="select2-arrow"><b/></span>
                    </a>
                    <label className="select2-offscreen"/>
                    <input className="select2-focusser select2-offscreen" type="text"/>
                    <div className="select2-drop select2-display-none toggle-sidebar-dropdown select2-with-searchbox">
                      <div className="select2-search">
                        <label className="select2-offscreen"/>
                        <input type="text" className="select2-input"/>
                      </div>
                    </div>
                  </div>
                </label>
                <div className="select2-container select2-container-multi standard_height"
                     id="s2id_multi_receiving_numbers" style={{width: '100%'}}>
                  <ul className="select2-choices">
                    <li className="select2-search-field">
                      <label className="select2-offscreen"/>
                      <input type="text" className="select2-input select2-default" style={{width: '352.375px'}}/>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="field">
                <label className="toggle-picker">Transfer To
                  <div className="select2-container toggle-picker-popup" id="s2id_multi_receiving_numbers_operator">
                    <a href="#" className="select2-choice">
                      <span className="select2-chosen" id="select2-chosen-4100467892">includes</span>
                      <abbr className="select2-search-choice-close"/>
                      <span className="select2-arrow"><b/></span>
                    </a>
                    <label className="select2-offscreen"/>
                    <input className="select2-focusser select2-offscreen" type="text"/>
                    <div className="select2-drop select2-display-none toggle-sidebar-dropdown select2-with-searchbox">
                      <div className="select2-search">
                        <label className="select2-offscreen"/>
                        <input type="text" className="select2-input"/>
                      </div>
                    </div>
                  </div>
                </label>
                <div className="select2-container select2-container-multi standard_height"
                     id="s2id_multi_receiving_numbers" style={{width: '100%'}}>
                  <ul className="select2-choices">
                    <li className="select2-search-field">
                      <label className="select2-offscreen"/>
                      <input type="text" className="select2-input select2-default" style={{width: '352.375px'}}/>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="field">
            <div className="card">
              <div className="field">
                <label className="toggle-range">Ring Time
                  <div className="select2-container toggle-range-popup"
                       id="s2id_ring_time_operator">
                    <a href="#" className="select2-choice">
                      <span className="select2-chosen" id="select2-chosen-2396805301">is greater than or equal</span>
                      <abbr className="select2-search-choice-close"/>
                      <span className="select2-arrow"><b/></span>
                    </a>
                    <label className="select2-offscreen"/>
                    <input className="select2-focusser select2-offscreen" type="text"/>
                    <div className="select2-drop select2-display-none toggle-sidebar-dropdown select2-with-searchbox">
                      <div className="select2-search">
                        <label className="select2-offscreen"/>
                        <input type="text" className="select2-input"/>
                      </div>
                    </div>
                  </div>
                </label>
                <span id="ring_time_min_container" className="min_container full_width">
                  <span className="time-unit-picker standard_height text">
                    <input type="number" size="5" className="standard_height text" min max="14400"/>
                    <select>
                      <option value="seconds" data-unit="1" selected="">seconds</option>
                      <option value="minutes" data-unit="60">minutes</option>
                      <option value="hours" data-unit="60">hours</option>
                    </select>
                  </span>
                  <input
                    type="number" id="ring_time_min" min max="14400" className="standard_height text"
                    style={{display: 'none'}}/>
                </span>
              </div>
              <div className="field">
                <label className="toggle-range">Talk Time
                  <div className="select2-container toggle-range-popup"
                       id="s2id_ring_time_operator">
                    <a href="#" className="select2-choice">
                      <span className="select2-chosen" id="select2-chosen-2396805301">is greater than or equal</span>
                      <abbr className="select2-search-choice-close"/>
                      <span className="select2-arrow"><b/></span>
                    </a>
                    <label className="select2-offscreen"/>
                    <input className="select2-focusser select2-offscreen" type="text"/>
                    <div className="select2-drop select2-display-none toggle-sidebar-dropdown select2-with-searchbox">
                      <div className="select2-search">
                        <label className="select2-offscreen"/>
                        <input type="text" className="select2-input"/>
                      </div>
                    </div>
                  </div>
                </label>
                <span id="ring_time_min_container" className="min_container full_width">
                  <span className="time-unit-picker standard_height text">
                    <input type="number" size="5" className="standard_height text" min max="14400"/>
                    <select>
                      <option value="seconds" data-unit="1" selected="">seconds</option>
                      <option value="minutes" data-unit="60">minutes</option>
                      <option value="hours" data-unit="60">hours</option>
                    </select>
                  </span>
                  <input
                    type="number" id="ring_time_min" min max="14400" className="standard_height text"
                    style={{display: 'none'}}/>
                </span>
              </div>
              <div className="field">
                <label className="toggle-range">Total Time
                  <div className="select2-container toggle-range-popup"
                       id="s2id_ring_time_operator">
                    <a href="#" className="select2-choice">
                      <span className="select2-chosen" id="select2-chosen-2396805301">is greater than or equal</span>
                      <abbr className="select2-search-choice-close"/>
                      <span className="select2-arrow"><b/></span>
                    </a>
                    <label className="select2-offscreen"/>
                    <input className="select2-focusser select2-offscreen" type="text"/>
                    <div className="select2-drop select2-display-none toggle-sidebar-dropdown select2-with-searchbox">
                      <div className="select2-search">
                        <label className="select2-offscreen"/>
                        <input type="text" className="select2-input"/>
                      </div>
                    </div>
                  </div>
                </label>
                <span id="ring_time_min_container" className="min_container full_width">
                  <span className="time-unit-picker standard_height text">
                    <input type="number" size="5" className="standard_height text" min max="14400"/>
                    <select>
                      <option value="seconds" data-unit="1" selected="">seconds</option>
                      <option value="minutes" data-unit="60">minutes</option>
                      <option value="hours" data-unit="60">hours</option>
                    </select>
                  </span>
                  <input
                    type="number" id="ring_time_min" min max="14400" className="standard_height text"
                    style={{display: 'none'}}/>
                </span>
              </div>
            </div>
          </div>

          <div className="field">
            <div className="card">
              <div className="field">
                <label className="toggle-picker" data-name="call_score_tag"
                       htmlFor="report_filter_call_score_tag">Reporting Tag
                  <div className="select2-container toggle-picker-popup"
                       id="s2id_call_score_tag_operator">
                    <a href="#" className="select2-choice">
                      <span className="select2-chosen" id="select2-chosen-613869310">includes</span>
                      <abbr className="select2-search-choice-close"/>
                      <span className="select2-arrow"><b/></span>
                    </a>
                  </div>
                </label>
                <div className="select2-container select2-container-multi standard_height"
                     id="s2id_call_score_tag" style={{width: '100%'}}>
                  <ul className="select2-choices">
                    <li className="select2-search-field">
                      <label className="select2-offscreen"/>
                      <input type="text" style={{width: '352.375px'}}/></li>
                  </ul>
                  <div className="select2-drop select2-drop-multi select2-display-none">
                    <ul className="select2-results"/>
                  </div>
                </div>
              </div>

              <div className="field">
                <label className="toggle-range">Score Call
                  <div className="select2-container toggle-range-popup" id="s2id_call_score_operator">
                    <a href="#" className="select2-choice">
                      <span className="select2-chosen">is between</span>
                      <abbr className="select2-search-choice-close"/>
                      <span className="select2-arrow"><b/></span>
                    </a>
                    <label className="select2-offscreen"/>
                    <input className="select2-focusser select2-offscreen" type="text"/>
                  </div>
                </label>
                <span id="call_score_min_container" className="min_container">
                <select id="call_score_min" name="call_score_min" className="standard_height" style={{width: '100%'}}>
                  <option value selected="">No rating</option>
                  <option value="1">★</option>
                  <option value="2">★★</option>
                  <option value="3">★★★</option>
                  <option value="4">★★★★</option>
                  <option value="5">★★★★★</option>
                </select>
                </span>
                <span className="number_range_to">to</span>
                <span id="call_score_max_container" className="max_container">
                <select id="call_score_max" name="call_score_max" className="standard_height" style={{width: '100%'}}>
                  <option value>No rating</option>
                  <option value="1">★</option>
                  <option value="2">★★</option>
                  <option value="3">★★★</option>
                  <option value="4">★★★★</option>
                  <option value="5" selected="">★★★★★</option>
                </select>
                </span>
              </div>

              <div className="field">
                <label htmlFor="report_filter_converted">Converted</label>
                <select className="standard_height" style={{width: '100%'}} id="converted_calls"
                        name="converted">
                  <option value selected="">is any</option>
                  <option value="1">is set</option>
                  <option value="2">is not set</option>
                </select>
              </div>

              <div className="field">
                <label className="toggle-range">Converted Amount
                  <div className="select2-container toggle-range-popup" id="s2id_converted_amount_operator">
                    <a href="#" className="select2-choice">
                      <span className="select2-chosen" id="select2-chosen-283705247">is greater than or equal</span>
                      <abbr className="select2-search-choice-close"/>
                      <span className="select2-arrow"><b/></span>
                    </a>
                    <label className="select2-offscreen"/>
                    <input className="select2-focusser select2-offscreen" type="text"/>
                    <div className="select2-drop select2-display-none toggle-sidebar-dropdown select2-with-searchbox">
                      <div className="select2-search">
                        <label className="select2-offscreen"/>
                        <input type="text" className="select2-input"/>
                      </div>
                    </div>
                  </div>
                </label>
                <span id="converted_amount_min_container" className="min_container full_width">
                  <span className="converted-amount-unit">$</span>
                  <input type="number" id="converted_amount_min" className="standard_height text" step="0.01"/>
                </span>
                <span className="number_range_to" style={{display: 'none'}}>to</span>
                <span id="converted_amount_max_container" className="max_container" style={{display: 'none'}}>
                  <span className="converted-amount-unit">$</span>
                  <input type="number" id="converted_amount_max" className="standard_height text" step="0.01" />
                </span>
              </div>
            </div>
          </div>

          <div className="field">
            <div className="card">
              <div className="field">Visitor Data
                <select name="filter_visitor_data" style={{float: 'right'}} id="filter_visitor_data">
                  <option selected="selected" value>Any</option>
                  <option value="1">With Visitor Data</option>
                  <option value="2">No Visitor Data</option>
                </select>
              </div>

              <div className="field">Audio
                <select name="has_audio" style={{float: 'right'}} id="has_audio">
                  <option selected="selected" value>Any</option>
                  <option value="1">Has Audio</option>
                  <option value="2">No Audio</option>
                </select>
              </div>

              <div className="field">First-time contact
                <input className="query_string_filter" type="checkbox" style={{float: 'right'}} />
              </div>

              <div className="field">Show excluded activities
                <input className="query_string_filter" type="checkbox" style={{float: 'right'}} />
              </div>
              <div className="field">Show reported activities
                <input className="query_string_filter" type="checkbox" style={{float: 'right'}} />
              </div>
            </div>
          </div>
          <div className="field">
            <button type="submit" className="button callout" style={{width: '100%', marginBottom: 0}}>Apply
              Filter
            </button>
          </div>
        </div>
      </form>
    </div>
  )
};

export default FilterBody;
