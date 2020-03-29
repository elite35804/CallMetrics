import React, {useState} from "react";
import SubHeader from "./SubHeader";
import Info from "./Info";
import './index.css';
import Header from "../../components/header/Header";

const Accounts = props => {
  const [isInfo, setInfo] = useState(false);
  const [isStatus, setStatus] = useState(false);

  return (
    <div>
      <Header>
        <SubHeader isInfo={isInfo} setInfo={setInfo}/>
      </Header>
      {isInfo && <Info setInfo={setInfo}/>}
      <div className="standard-table-container ">
        <div className="dataTables_processing" style={{display: 'none'}}>
          <div className="report-progress">
            <div className="progress progress-striped active">
              <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0"
                   aria-valuemax="100" style={{width: '100%'}}>
                <span className="sr-only">Loading</span>
              </div>
            </div>
          </div>
        </div>
        <div className="standard-table-parent container-fluid">
          <div className="standard-table-filters row">

            <div className="dataTables_filter col-xs-12 col-sm-4 col-md-4 col-lg-3" style={{paddingTop: 5}}>

              <a className="filter-options button" data-placement="bottom"><i className="font-filter"/></a>

              <input name="filter" type="search" className="text text-filter" placeholder="Search"
                     style={{
                       borderRadius: 4,
                       margin: 0,
                       width: '100%',
                       height: 30,
                       verticalAlign: 'top',
                       marginRight: -33
                     }}/>
              <i className="clear-search font-remove-circle"
                 style={{position: 'absolute', top: 13, right: 55}}/>
              <button type="submit" className="button filter-table"
                      style={{position: 'absolute', width: 33, marginBottom: 0}}><i className="font-search"/>
              </button>

              {isStatus&& <div className="edit-status-picker">
                <label>Status&nbsp;</label>
                <div className="select2-container select2-container-active" style={{width: 180}}>
                  <a href="#" className="select2-choice">
                    <span className="select2-chosen">Offline</span>
                    <abbr className="select2-search-choice-close"/>
                    <span className="select2-arrow"><b/></span>
                  </a>
                  <label className="select2-offscreen"/>
                  <input className="select2-focusser select2-offscreen" type="text" aria-haspopup="true"
                  role="button" aria-labelledby="select2-chosen-440245058"
                  id="s2id_autogen440245058"/>
                </div>
                <select style={{width: 180, display: 'none'}}>
                  <option/>
                  <option value="online">Online</option>
                  <option value="offline">Offline</option>
                </select>&nbsp;<span className="do-change-status button activebutton outlined">Update</span>
              </div>}
            </div>


            <div className="dataTables_dateSelect col-xs-12 col-sm-8 col-md-4 col-lg-4 text-right" style={{float: 'right'}}>
              <a className="hidden-sm hidden-xs edit-agent-status button minimal" style={{marginRight: 5}}
                 onClick={() => setStatus(!isStatus)}
              >
                Edit Status
              </a>
              <a className="export-users-csv button outlined" title="" data-placement="bottom">Export...</a>
            </div>
          </div>
          <div className="clear"/>

          <div className="standard-table-extended-filters">
          </div>
          <div style={{clear: 'both'}}/>
          <div className="row">
            <div className="table-responsive">
              <table
                className="table table-striped table-hover table-condensed standard-table sortable table-mobile users-table">
                <thead>
                <tr>
                  <th>
                    <span className="edit-select-all">All
                      {/*<input type="checkbox"/>*/}
                    </span>
                  </th>
                  <th className="sorting">
                    <a href="">Name</a>
                  </th>
                  <th className=" sorting">
                    <a href="">Email Address</a>
                  </th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Inbound Number</th>
                  <th>Outbound Number</th>
                  <th>Call Schedule</th>
                  <th>Access Controls</th>
                  <th className=" sorting"><a href="">Last Login</a></th>
                  <th/>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>
                    <input style={{margin: 20}} className="edit-user-inline" type="checkbox"/>
                    <a className="button edit-button" href="" style={{fontSize: 13}}>Edit</a>
                  </td>
                  <td className="mobile-primary" style={{fontSize: 13}}>
                    Terrance Selb
                    <div className="agent-info" style={{width: 40, float: 'right', textAlign: "right"}}>
                      <span className="agent-initials button-background">TS<span className="agent-pic"/></span>
                    </div>
                    <div className="clear"/>
                  </td>
                  <td className="mobile-secondary" style={{fontSize: 13}}>swmarketing@protonmail.com
                    <span className="mobile-info">
                    <br/>Administrator
                    </span>
                  </td>
                  <td style={{fontSize: 13}}>Administrator</td>
                  <td style={{fontSize: 13}}>
                    <i className="font-stop" style={{color: 'green'}}/>&nbsp;
                    <i className="font-play" style={{color: 'red'}}/>
                    <br/>
                    Offline
                  </td>
                  <td/>
                  <td style={{fontSize: 13}}>
                    <div className="tracking_number_select">
                      <span><small>(click to edit)</small></span>
                      <div className="edit-outbound" style={{display: 'none'}}><input type="text" value=""/>
                        <a className="font-close cancel-outbound" style={{verticalAlign: 'middle'}}/>
                      </div>
                    </div>
                  </td>
                  <td/>
                  <td/>
                  <td style={{fontSize: 13}}>about 17 hours ago<br/>
                    <small>
                      <a className="force-logout">logout</a>
                    </small>
                  </td>
                  <td/>
                </tr>
                <tr>
                  <td>
                    <input style={{margin: 20}} className="edit-user-inline" type="checkbox"/>
                    <a className="button edit-button" href="" style={{fontSize: 13}}>Edit</a>
                  </td>
                  <td className="mobile-primary" style={{fontSize: 13}}>
                    Terrance Selb
                    <div className="agent-info" style={{width: 40, float: 'right', textAlign: "right"}}>
                      <span className="agent-initials button-background">TS<span className="agent-pic"/></span>
                    </div>
                    <div className="clear"/>
                  </td>
                  <td className="mobile-secondary" style={{fontSize: 13}}>swmarketing@protonmail.com
                    <span className="mobile-info">
                    <br/>Administrator
                    </span>
                  </td>
                  <td style={{fontSize: 13}}>Administrator</td>
                  <td style={{fontSize: 13}}>
                    <i className="font-stop" style={{color: 'green'}}/>&nbsp;
                    <i className="font-play" style={{color: 'red'}}/>
                    <br/>
                    Offline
                  </td>
                  <td/>
                  <td style={{fontSize: 13}}>
                    <div className="tracking_number_select">
                      <span><small>(click to edit)</small></span>
                      <div className="edit-outbound" style={{display: 'none'}}><input type="text" value=""/>
                        <a className="font-close cancel-outbound" style={{verticalAlign: 'middle'}}/>
                      </div>
                    </div>
                  </td>
                  <td/>
                  <td/>
                  <td style={{fontSize: 13}}>about 17 hours ago<br/>
                    <small>
                      <a className="force-logout">logout</a>
                    </small>
                  </td>
                  <td/>
                </tr>
                <tr>
                  <td>
                    <input style={{margin: 20}} className="edit-user-inline" type="checkbox"/>
                    <a className="button edit-button" href="" style={{fontSize: 13}}>Edit</a>
                  </td>
                  <td className="mobile-primary" style={{fontSize: 13}}>
                    Terrance Selb
                    <div className="agent-info" style={{width: 40, float: 'right', textAlign: "right"}}>
                      <span className="agent-initials button-background">TS<span className="agent-pic"/></span>
                    </div>
                    <div className="clear"/>
                  </td>
                  <td className="mobile-secondary" style={{fontSize: 13}}>swmarketing@protonmail.com
                    <span className="mobile-info">
                    <br/>Administrator
                    </span>
                  </td>
                  <td style={{fontSize: 13}}>Administrator</td>
                  <td style={{fontSize: 13}}>
                    <i className="font-stop" style={{color: 'green'}}/>&nbsp;
                    <i className="font-play" style={{color: 'red'}}/>
                    <br/>
                    Offline
                  </td>
                  <td/>
                  <td style={{fontSize: 13}}>
                    <div className="tracking_number_select">
                      <span><small>(click to edit)</small></span>
                      <div className="edit-outbound" style={{display: 'none'}}><input type="text" value=""/>
                        <a className="font-close cancel-outbound" style={{verticalAlign: 'middle'}}/>
                      </div>
                    </div>
                  </td>
                  <td/>
                  <td/>
                  <td style={{fontSize: 13}}>about 17 hours ago<br/>
                    <small>
                      <a className="force-logout">logout</a>
                    </small>
                  </td>
                  <td/>
                </tr>
                </tbody>
                <tfoot/>
              </table>
            </div>
          </div>
          <div className="optional pull-right entries-per-page" style={{paddingTop: 8, marginBottom: 20}}>Per page:&nbsp;
            <input type="hidden" className="standard-table-entries-default" value="10"/>
            <select className="standard-table-entries standard_height" size="1">
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </div>
          <div className="clear"/>
        </div>
      </div>
      <div className="clear"/>
    </div>
  );
};

export default Accounts;
