import React from 'react';

const Devices = props => {
  return (
    <div className="field" id="user-devices">
      <h3>Devices</h3>
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
          <div className="standard-table-parent container-fluid" data-date-range="">
            <input type="hidden" className="table-filter standard-table-orderby" value=""/>
            <input type="hidden" className="table-filter standard-table-sortmode" value=""/>
            <input type="hidden" className="table-filter standard-table-page" value=""/>
            <div className="standard-table-extended-filters"/>
            <div style={{clear: 'both'}}/>
            <div className="row">
              <div className="table-responsive">
                <table
                  className="table table-striped table-hover table-condensed standard-table sortable table-mobile devices-table">
                  <thead>
                  <tr>
                    <th>Device</th>
                    <th>Added at</th>
                    <th/>
                  </tr>
                  </thead>
                  <tbody>
                  </tbody>
                  <tfoot/>
                </table>
              </div>
            </div>
            <div className="clear"/>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Devices;
