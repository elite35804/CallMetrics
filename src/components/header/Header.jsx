import React from "react";

const Header = props => {
  return (
    <header id="ctm-header" className="main">
      <nav id="ctm-hrmenu" className="navbar" data-count="8">
        <div className="navbar-header hidden-xs">
          <button type="button" className="navbar-toggle navbar-left collapsed" data-toggle="collapse"
                  data-target="#ctm-main-nav" aria-expanded="false">
            <span className="sr-only">toggle</span>
            <span className="icon-bar"/>
            <span className="icon-bar"/>
            <span className="icon-bar"/>
          </button>
          <a className="navbar-brand brand" id="logo" href="/"/>
        </div>
        <div className="no-transition ctm-hrmenu" id="ctm-main-nav">
          <ul className="nav navbar-nav navbar-left ctm-outer-hr ctm-accounts-hr" data-count="4">
            <li className="dropdown nav-numbers guide-numbers active">
              <a className="dropdown-toggle menudrop" data-toggle="dropdown" role="button" aria-haspopup="true"
                 aria-expanded="false" title="" data-original-title="Numbers"><span><i
                className="font-grid4 subtle"/> <span className="menu-label">Numbers</span></span></a>
              <div className="ctm-hrsub dropdown-menu" style={{maxWidth: "calc((100vw - 20px) - 185px)"}}>
                <div className="ctm-hrsub-inner">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-xs-12 col-sm-12">
                        <div className="col-xs-12 col-sm-3 menu-group-column ">
                          <label>Number Management</label>
                          <div className="menu-item guide-buy-numbers">
                            <a className="spinloader" href="#"><span><i
                              className="font-phone-plus2"/> Buy Numbers</span></a>
                          </div>
                          <div className="menu-item guide-tracking-numbers active">
                            <a className="spinloader" href="#"><span><i
                              className="font-phone-wave"/> Tracking Numbers</span></a>
                          </div>
                          <div className="menu-item ">
                            <a className="spinloader" href="#"><span><i className="font-exchange"/> Port Numbers</span></a>
                          </div>
                          <div className="menu-item guide-call-settings">
                            <a className="spinloader" href="#"><span><i
                              className="font-wrench"/> Call Settings</span></a>
                          </div>
                        </div>
                        <div className="col-xs-12 col-sm-3 menu-group-column ">
                          <label>Routing</label>
                          <div className="menu-item guide-voice-menus">
                            <a className="spinloader" href="#"><span><i
                              className="font-grid"/> Voice Menus  <small>(IVR)</small></span></a>
                          </div>
                          <div className="menu-item guide-schedules">
                            <a className="spinloader" href="#"><span><i className="font-calendar"/> Schedules</span></a>
                          </div>
                          <div className="menu-item guide-receiving-numbers">
                            <a className="spinloader" href="#"><span><i className="font-phone-incoming"/> Receiving Numbers</span></a>
                          </div>
                        </div>
                        <div className="col-xs-12 col-sm-3 menu-group-column ">
                          <label>Dynamic Numbers</label>
                          <div className="menu-item guide-target-numbers">
                            <a className="spinloader" href="#"><span><i className="font-target"/> Target Numbers</span></a>
                          </div>
                          <div className="menu-item guide-tracking-sources">
                            <a className="spinloader" href="#"><span><i
                              className="font-newspaper"/> Tracking Sources</span></a>
                          </div>
                          <div className="menu-item ">
                            <a className="spinloader" href="#"><span><i className="font-laptop-2"/> Tracking Code</span></a>
                          </div>
                        </div>
                        <div className="col-xs-12 col-sm-3 menu-group-column ">
                          <label>Dialers</label>
                          <div className="menu-item ">
                            <a className="spinloader" href="#"><span><i
                              className="font-phone-outgoing"/> Auto Dialers</span></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="dropdown nav-reports guide-reports">
              <a className="dropdown-toggle menudrop" data-toggle="dropdown" role="button" aria-haspopup="true"
                 aria-expanded="false" title="" data-original-title="Reporting"><span><i className="font-chart subtle"/> <span
                className="menu-label">Reporting</span></span></a>
              <div className="ctm-hrsub dropdown-menu">
                <div className="ctm-hrsub-inner">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-xs-12 col-sm-12">
                        <div className="col-xs-12 col-sm-3 menu-group-column ">
                          <label>Custom Reports</label>
                          <div className="menu-item ">
                            <a className="spinloader" href="#"><span><i className="font-chart"/> Overview</span></a>
                          </div>
                        </div>
                        <div className="col-xs-12 col-sm-3 menu-group-column ">
                          <label>Reports</label>
                          <div className="menu-item ">
                            <a className="spinloader" href="#"><span><i
                              className="font-bars-3"/> Activity Reports <small>(Call Reports)</small></span></a>
                          </div>
                          <div className="menu-item ">
                            <a className="spinloader" href="#"><span><i
                              className="font-stats-growth"/> ROI Reports <small>(Call Reports)</small></span></a>
                          </div>
                          <div className="menu-item ">
                            <a className="spinloader" href="#"><span><i
                              className="font-tab"/> Accuracy Reports</span></a>
                          </div>
                        </div>
                        <div className="col-xs-12 col-sm-3 menu-group-column ">
                          <label>Usage</label>
                          <div className="menu-item ">
                            <a className="spinloader" href="#"><span><i className="font-checkbox-partial"/> Account Usage</span></a>
                          </div>
                          <label>Notifications</label>
                          <div className="menu-item guide-notifications">
                            <a className="spinloader" href="#"><span><i className="font-envelope"/> Notifications</span></a>
                          </div>
                        </div>
                        <div className="col-xs-12 col-sm-3 menu-group-column ">
                          <label>Settings</label>
                          <div className="menu-item ">
                            <a className="spinloader" href="#"><span><i className="font-chart"/> Reports</span></a>
                          </div>
                          <div className="menu-item ">
                            <a className="spinloader" href="#"><span><i className="font-tags"/> Tags</span></a>
                          </div>
                          <div className="menu-item ">
                            <a className="spinloader" href="#"><span><i className="font-radio-checked"/> Keyword Spotting</span></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="dropdown nav-calls guide-calls">
              <a className="dropdown-toggle menudrop" data-toggle="dropdown" role="button" aria-haspopup="true"
                 aria-expanded="false" title="" data-original-title="Calls"><span><i
                className="font-phone-2 subtle"/> <span className="menu-label">Calls</span></span></a>
              <div className="ctm-hrsub dropdown-menu">
                <div className="ctm-hrsub-inner">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-xs-12 col-sm-12">
                        <div className="col-xs-12 col-sm-3 menu-group-column ">
                          <label>Logs</label>
                          <div className="menu-item guide-call-log">
                            <a className="spinloader" href="#"><span><i className="font-phone"/> Call Log</span></a>
                          </div>
                          <div className="menu-item ">
                            <a className="spinloader" href="#"><span><i className="font-map"/> Maps</span></a>
                          </div>
                          <div className="menu-item ">
                            <a className="spinloader" href="#"><span><i
                              className="font-cloud-download"/> Export Calls</span></a>
                          </div>
                        </div>
                        <div className="col-xs-12 col-sm-3 menu-group-column ">
                          <label>Settings</label>
                          <div className="menu-item ">
                            <a className="spinloader" href="#"><span><i
                              className="font-blocked"/> Blocked Numbers</span></a>
                          </div>
                          <div className="menu-item ">
                            <a className="spinloader" href="#"><span><i className="font-phone-slash"/> Do Not Call List</span></a>
                          </div>
                          <div className="menu-item ">
                            <a className="spinloader" href="#"><span><i className="font-star-full2"/> Scoring</span></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="dropdown nav-sms guide-sms">
              <a className="dropdown-toggle menudrop" data-toggle="dropdown" role="button" aria-haspopup="true"
                 aria-expanded="false" title="" data-original-title="Texts"><span><i className="font-mobile subtle"/> <span
                className="menu-label">Texts</span></span></a>
              <div className="ctm-hrsub dropdown-menu">
                <div className="ctm-hrsub-inner">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-xs-12 col-sm-12">
                        <div className="col-xs-12 col-sm-3 menu-group-column ">
                          <label>Logs</label>
                          <div className="menu-item ">
                            <a className="spinloader" href="#"><span><i className="font-mobile"/> Text Log</span></a>
                          </div>
                          <div className="menu-item ">
                            <a className="spinloader" href="#"><span><i className="font-clock-2"/> Bulk Messages</span></a>
                          </div>
                          <div className="menu-item ">
                            <a className="spinloader" href="#"><span><i
                              className="font-mobile"/> Export Texts</span></a>
                          </div>
                        </div>
                        <div className="col-xs-12 col-sm-3 menu-group-column ">
                          <label>Settings</label>
                          <div className="menu-item ">
                            <a className="spinloader" href="#"><span><i
                              className="font-toggle-off"/> Do Not Text List</span></a>
                          </div>
                          <div className="menu-item ">
                            <a className="spinloader" href="#"><span><i className="font-th"/> Text Numbers</span></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right ctm-outer-hr ctm-settings-hr" data-count="4">
            <li className="dropdown nav-help guide-help">
              <a className="dropdown-toggle menudrop collapse-label" data-toggle="dropdown" role="button"
                 aria-haspopup="true" aria-expanded="false" title="" data-original-title="Help"><span><i
                className="font-support subtle"/> <span className="menu-label">Help</span></span></a>
              <div className="ctm-hrsub dropdown-menu">
                <div className="ctm-hrsub-inner">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-xs-12 col-sm-4 pull-right">
                        <div className="captions">
                          <div className="caption">
                            <div className="caption-card">
                              <div className="agent-info"><span className="agent-initials">TS<span
                                className="agent-pic"/></span></div>
                              <a className="dark-mode-toggle" data-theme="light" title=""
                                 data-original-title="Light Mode"><i/></a>
                              <a className="dark-mode-toggle" data-theme="dark" title=""
                                 data-original-title="Dark Mode"><i/></a>
                              <a className="dark-mode-toggle" data-theme="blurry" title=""
                                 data-original-title="Blurry Mode"><i/></a>
                              <div className="caption-field"><a href="#"
                                                                className="caption-clip"><span>Terrance Selb</span> <i
                                className="font-pencil"/></a></div>
                              <div className="caption-field">
                                <small><a href="#" className="log-out-action" loaded="1">log out <i
                                  className="font-signout"/></a></small>
                              </div>
                              <div className="clear"/>
                            </div>
                          </div>
                          <div className="caption">
                            <div className="caption-card">
                              <div className="caption-field"><a href="#" className="caption-clip textselect"><span>SW Marketing</span></a>
                              </div>
                              <div className="caption-field">
                                <small><label>Account ID</label> <span className="textselect">211496</span></small>
                              </div>
                              <div className="caption-field">
                                <small><label>Balance</label>
                                  <a href="#" className="textselect">$135.87</a>
                                </small>
                              </div>
                            </div>
                          </div>
                          <div className="caption">
                            <div className="caption-card">
                              <a className="new-nav" href="#">Try the New Nav! <i className="font-gift"/></a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-8">
                        <div className="col-xs-12 col-sm-4 menu-group-column ">
                          <label>Support</label>
                          <div className="menu-item ">
                            <a className="spinloader" target="_blank" href="#"><span><i className="font-support"/> Online Support Center</span></a>
                          </div>
                          <div className="menu-item menu-get-started">
                            <a className="spinloader" target="_blank" href="#"><span><i className="font-arrow-right"/> Get Started</span></a>
                          </div>
                          <div className="menu-item ">
                            <a className="spinloader" href="#"><span><i
                              className="font-bubble-2"/> Chat with Support</span></a>
                          </div>
                          <div className="menu-item ">
                            <a className="spinloader" href="tel:+18005771872"><span><i className="font-phone"/> +1.000.000.0000</span></a>
                          </div>
                          <div className="menu-item ">
                            <a className="spinloader" target="_blank" href="#"><span><i className="font-file-alt"/> Create a Ticket</span></a>
                          </div>
                          <div className="menu-item ">
                            <a className="spinloader" target="_blank" href="#"><span><i className="font-rocket"/> Professional Services</span></a>
                          </div>
                        </div>
                        <div className="col-xs-12 col-sm-4 menu-group-column ">
                          <label/>
                          <div className="menu-item mt40">
                            <a className="spinloader" target="_blank" href="#"><span><i className="font-bullhorn"/> Blog</span></a>
                          </div>
                          <div className="menu-item ">
                            <a className="spinloader" target="_blank" href="#"><span><i className="font-book"/> API Docs</span></a>
                          </div>
                          <div className="menu-item ">
                            <a className="spinloader" target="_blank" href="#"><span><i
                              className="font-bug"/> Status</span></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="dropdown nav-users guide-users">
              <a className="dropdown-toggle menudrop collapse-label" data-toggle="dropdown" role="button"
                 aria-haspopup="true" aria-expanded="false" title="" data-original-title="Settings"><span><i
                className="font-cog-2 subtle"/> <span className="menu-label">Settings</span></span></a>
              <div className="ctm-hrsub dropdown-menu">
                <div className="ctm-hrsub-inner">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-xs-12 col-sm-4 pull-right">
                        <div className="captions">
                          <div className="caption">
                            <div className="caption-card">
                              <div className="agent-info"><span className="agent-initials">TS<span
                                className="agent-pic"/></span></div>
                              <a className="dark-mode-toggle" data-theme="light" title=""
                                 data-original-title="Light Mode"><i/></a>
                              <a className="dark-mode-toggle" data-theme="dark" title=""
                                 data-original-title="Dark Mode"><i/></a>
                              <a className="dark-mode-toggle" data-theme="blurry" title=""
                                 data-original-title="Blurry Mode"><i/></a>
                              <div className="caption-field"><a href="#"
                                                                className="caption-clip"><span>Terrance Selb</span> <i
                                className="font-pencil"/></a></div>
                              <div className="caption-field">
                                <small><a href="#" className="log-out-action" loaded="1">log out <i
                                  className="font-signout"/></a></small>
                              </div>
                              <div className="clear"/>
                            </div>
                          </div>
                          <div className="caption">
                            <div className="caption-card">
                              <div className="caption-field"><a href="#" className="caption-clip textselect"><span>SW Marketing</span></a>
                              </div>
                              <div className="caption-field">
                                <small><label>Account ID</label> <span className="textselect">211496</span></small>
                              </div>
                              <div className="caption-field">
                                <small><label>Balance</label>
                                  <a href="#" className="textselect">$135.87</a>
                                </small>
                              </div>
                            </div>
                          </div>
                          <div className="caption">
                            <div className="caption-card">
                              <a className="new-nav" href="#">Try the New Nav! <i className="font-gift"/></a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-8">
                        <div className="col-xs-12 col-sm-4 menu-group-column ">
                          <label>Account Management</label>
                          <div className="menu-item ">
                            <a className="spinloader" href="#"><span><i className="font-cog-3"/> Account Settings</span></a>
                          </div>
                          <div className="menu-item ">
                            <a className="spinloader" href="#"><span><i className="font-link"/> Integrations</span></a>
                          </div>
                          <div className="menu-item ">
                            <a className="spinloader" href="#"><span><i className="font-history"/> Change History</span></a>
                          </div>
                          <label>Configuration</label>
                          <div className="menu-item ">
                            <a className="spinloader" href="#"><span><i
                              className="font-tasks"/> Custom Fields</span></a>
                          </div>
                        </div>
                        <div className="col-xs-12 col-sm-4 menu-group-column ">
                          <label>Agency Management</label>
                          <div className="menu-item ">
                            <a className="spinloader" href="#"><span><i className="font-shopping-cart"/> Discount Packages</span></a>
                          </div>
                        </div>
                        <div className="col-xs-12 col-sm-4 menu-group-column ">
                          <label>User Management</label>
                          <div className="menu-item ">
                            <a className="spinloader" href="#"><span><i className="font-user"/> Your Profile</span></a>
                          </div>
                          <div className="menu-item guide-settings-users">
                            <a className="spinloader" href="#"><span><i className="font-users"/> Manage Users</span></a>
                          </div>
                          <label>Billing Settings</label>
                          <div className="menu-item ">
                            <a className="spinloader" href="#"><span><i
                              className="font-credit"/> Billing Settings</span></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="dropdown nav-phone">
              <a className="dropdown-toggle menudrop no-label" data-toggle="dropdown" role="button" aria-haspopup="true"
                 aria-expanded="false" title="" data-original-title="Phone"><span><i
                className="font-phone-outgoing subtle"/> <span className="menu-label">Phone</span></span></a>
              <div className="ctm-hrsub dropdown-menu">
                <div className="ctm-hrsub-inner">
                  <div id="ctm-nav-phone">
                    <ul>
                      <li className="menu-item">
                        <a data-action="open"><i className="font-phone"/> Open Phone</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="dropdown nav-alerts guide-nav-alerts">
              <a className="dropdown-toggle menudrop no-label" data-toggle="dropdown" role="button" aria-haspopup="true"
                 aria-expanded="false" title="" data-original-title="Notices"><span><i
                className="font-bell subtle"/> <span
                className="menu-label">Notices</span></span></a>
              <div className="ctm-hrsub dropdown-menu">
                <div className="ctm-hrsub-inner">
                  <div id="ctm-notices">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="font-thumbs-up"/>
                          <strong>No New Notices</strong>
                          <small/>
                          <cite/>
                          <span>Click 'All Notices' to see past notices</span>
                        </a>
                      </li>
                    </ul>
                    <a className="button" id="more-alerts" href="#">All Notices
                      <i className="font-chevron-right" style={{fontSize: "85%"}}/>
                      z</a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      {props.children}
    </header>
  );
};
export default Header;
