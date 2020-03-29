import React from 'react';

const ActivityHistory = props => {
  return (
    <div className="field" id="user-logins">
      <h3>Activity History
        <small>times and IP addresses of recent activity
          <a className="button outlined pull-right">Reporting</a>
        </small>
      </h3>
      <div className="card">
        <div className="standard-table-container ">
          <div className="dataTables_processing" style={{display: 'none'}}>
            <div className="report-progress">
              <div className="progress progress-striped active">
                <div className="progress-bar" role="progressbar" aria-valuenow="100"
                     aria-valuemin="0" aria-valuemax="100" style={{width: '100%'}}>
                  <span className="sr-only">Loading</span>
                </div>
              </div>
            </div>
          </div>
          <div className="standard-table-parent container-fluid">
            <input type="hidden" name="order" className="table-filter standard-table-orderby"/>
            <input type="hidden" name="sort_mode" className="table-filter standard-table-sortmode" value=""/>
            <input type="hidden" name="page" className="table-filter standard-table-page" value=""/>
            <div className="standard-table-filters row">
              <div className="dataTables_filter col-xs-12 col-sm-4 col-md-4 col-lg-3"
                   style={{paddingTop: 5}}>
                <select name="filter" className="text text-filter" style={{
                  width: 'calc(100% - 30px)',
                  height: 30,
                  lineHeight: 30,
                  verticalAlign: 'top'
                }}>
                  <option/>
                  <option value="login">Login</option>
                  <option value="login_attempt">Login Attempt</option>
                  <option value="account">Account</option>
                  <option value="listen">Listen</option>
                  <option value="accept_calls">Ready</option>
                  <option value="reject_calls">Not Ready</option>
                  <option value="ignored">Ignored</option>
                  <option value="missed">Missed</option>
                  <option value="answered">Answered</option>
                  <option value="dialed">Dialed</option>
                  <option value="canceled">Canceled</option>
                  <option value="error">Error</option>
                  <option value="hangup">Hangup</option>
                </select>
                <button type="submit" className="button filter-table"
                        style={{position: 'absolute', width: 33, marginBottom: 0}}>
                  <i className="font-search"/>
                </button>
                <i className="clear-search font-remove-circle"/>
              </div>
              <div className="paging top-paging hidden-xs hidden-sm col-md-4 col-lg-4">
                <div role="navigation" aria-label="Pagination" className="pagination">
                  <span className="previous_page disabled"/>
                  <em className="current" aria-label="Page 1" aria-current="page">1</em>
                  <a rel="next" aria-label="Page 2" href="#">2</a>
                  <a aria-label="Page 3" href="#">3</a>
                  <span className="gap">…</span>
                  <a aria-label="Page 106" href="#">106</a>
                  <a aria-label="Page 107" href="#">107</a>
                  <a className="next_page" rel="next" href="#"/>
                </div>
                <div className="rec-total">1070 Events</div>
                <div className="clear"/>
              </div>

              <div className="dataTables_dateSelect col-xs-12 col-sm-8 col-md-4 col-lg-4 text-right"
                   style={{float: 'right'}}>
                <i className="font-calendar"/>&nbsp;
                <div className="field string optional"
                     style={{width: 100, maxWidth: 'calc((100% - 75px)/2)'}}>
                  <input type="text" name="start_date" id="start_date"
                         className="date string" style={{width: '100%', borderRadius: 4}}
                         placeholder="Start"/>
                </div>&nbsp;
                <div className="field string optional"
                     style={{width: 100, maxWidth: 'calc((100% - 75px)/2)'}}>
                  <input type="text" name="end_date" id="end_date"
                         className="date string" style={{width: '100%', borderRadius: 4}}
                         placeholder="End"/>
                </div>

                <a className="filter-table more button" href="#">Filter</a>
                <a className="button table-advanced-filters" data-placement="left"
                   data-original-title="More filters" style={{display: 'none'}}>
                  <span className="closed"/>
                </a>
              </div>
            </div>
            <div className="clear"/>

            <div className="standard-table-extended-filters"/>
            <div style={{clear: 'both'}}/>
            <div className="row">
              <div className="table-responsive">
                <table
                  className="table table-striped table-hover table-condensed standard-table sortable table-mobile">
                  <thead>
                  <tr>
                    <th>Event</th>
                    <th>IP Address</th>
                    <th>Time</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td className="mobile-primary">Account</td>
                    <td>216.240.41.115</td>
                    <td className="mobile-secondary">
                      <span className="mobile-info"><b>IP Address:</b> 216.240.41.115<br/></span>
                      2020-03-28 12:42:59 PM
                    </td>
                  </tr>
                  <tr>
                    <td className="mobile-primary">
                      Login
                    </td>
                    <td>
                      216.240.41.115

                    </td>
                    <td className="mobile-secondary">

                      <span className="mobile-info"><b>IP Address:</b> 216.240.41.115<br/></span>
                      2020-03-28 12:42:58 PM

                    </td>
                  </tr>
                  <tr>
                    <td className="mobile-primary">

                      Account

                    </td>
                    <td>
                      75.140.7.34

                    </td>
                    <td className="mobile-secondary">

                      <span className="mobile-info"><b>IP Address:</b> 75.140.7.34<br/></span>
                      2020-03-27 07:55:16 AM

                    </td>
                  </tr>
                  <tr>
                    <td className="mobile-primary">Account</td>
                    <td>210.121.187.8</td>
                    <td className="mobile-secondary">
                      <span className="mobile-info"><b>IP Address:</b> 210.121.187.8<br/></span>
                      2020-03-27 03:35:06 AM
                    </td>
                  </tr>
                  </tbody>
                  <tfoot>
                  <tr>
                    <th>Event</th>
                    <th>IP Address</th>
                    <th>Time</th>
                  </tr>
                  </tfoot>
                </table>
              </div>
            </div>
            <div className="paging bottom-paging"
                 style={{width: 500, maxWidth: '100%', float: 'left', marginBottom: 14}}>
              <div role="navigation" aria-label="Pagination" className="pagination">
                <span className="previous_page disabled"/>
                <em className="current" aria-label="Page 1" aria-current="page">1</em>
                <a rel="next" aria-label="Page 2" href="#">2</a>
                <a aria-label="Page 3" href="#">3</a>
                <a aria-label="Page 4" href="#">4</a>
                <a aria-label="Page 5" href="#">5</a>
                <span className="gap">…</span>
                <a aria-label="Page 106" href="#">106</a>
                <a aria-label="Page 107" href="#">107</a>
                <a className="next_page" rel="next" href="#"/>
              </div>
            </div>

            <div className="optional pull-right entries-per-page"
                 style={{paddingTop: 8, marginBottom: 20}}>Per page:&nbsp;
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

      </div>
    </div>
  )
};

export default ActivityHistory;
