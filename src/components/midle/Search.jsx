import React, {Component} from 'react'

export default class Search extends Component {
  render() {
    return (
      <div>
        <form className="search" action="" onSubmit="return false">
          <input type="search" id="search-box" placeholder="Search"
                 className="search text subtle guide-search callout-border-hover"/>
          <i id="clear-search" className="font-remove-circle"/>
          <button type="submit" className="button callout"><span className="new-calls button-background"><span
            className="call-count"/></span><i className="font-search"/></button>
        </form>
        <div id="call-stats">
          <span className="total" data-original-title="" title="">
            <i className="font-stats-2" style={{
              verticalAlign: "middle",
              marginTop: "-4px",
              display: "inline-block",
              fontSize: "130%"
            }}/><span className="text" style={{paddingRight: "4px"}}>184,518 calls</span>
            <i className="font-caret-down" style={{fontSize: "80%", marginRight: "2px"}}/>
            <span className="button-background" id="call-counter" data-available="1">10 active</span>
          </span>
          <a data-state="manual" title="" data-placement="bottom" className="auto-load hidden-xs button guide-auto-load"
             data-original-title="Automatically load new calls/texts as they are received"><i className="font-spinner"/>
            <span className="text hidden-xs hidden-sm">Auto Load</span></a>
        </div>

        <div className="actions" style={{position: "relative", float: "right", zIndex: 2, marginLeft: "4px"}}>
          <a className="button callout hidden-sm hidden-md hidden-lg guide-make-call"
             style={{fontWeight: "bold", fontSize: "150%"}} onClick="" title="" data-original-title="Phone"><i
            className="font-phone" style={{fontSize: "90%"}}/></a>
          <a className="button callout hidden-xs guide-make-call" title="" id="make-call" data-original-title=""><i
            className="font-phone" style={{fontSize: "90%"}}/> <span>Phone</span></a>
        </div>
        <nav className="nav-actions navbar navbar-right">
          <div className="container-fluid">
            <div className="row">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                        data-target="#log-actions-collapse" aria-expanded="false">
                  <span className="sr-only">Actions</span>
                  <span className="icon-bar"/>
                  <span className="icon-bar"/>
                </button>
              </div>

              <div className="navbar-collapse collapse" id="log-actions-collapse" aria-expanded="false"
                   style={{height: "0px;"}}>
                <div className="row">
                  <ul className="nav navbar-nav">
                    <li className="call-stats-mobile"><span><i
                      className="font-stats-2"/> <span>184,518 calls</span></span></li>
                    <li className="hidden-sm hidden-md hidden-lg"><a id="auto-load-btn" className="button"><i
                      className="font-spinner"/> <span>Auto Load</span></a></li>
                    <li><a className="button" href="#" title="" data-placement="bottom"
                           data-original-title="Open the Desk Phone"><i className="font-headphones-2"/> <span
                      className="hidden-sm hidden-md">Desk Mode</span></a></li>
                    <li>
                      <div id="alert-call" className="control dropdown" data-on="false">
                        <a className="dropdown-toggle button" data-toggle="dropdown" title="" data-placement="bottom"
                           data-original-title="Desktop notifications"><i className="font-bell-alt"/> <span
                          className="hidden-sm hidden-md hidden-lg">Desktop Notifications</span> <i
                          className="font-caret-down"/></a>
                        <ul className="dropdown-menu">
                          <li><a data-action="toggle" data-col="inbound" href="#"><i className="toggle"/> <i
                            className="font-phone-incoming"/> Inbound Call</a></li>
                          <li><a data-action="toggle" data-col="outbound"><i className="toggle"/> <i
                            className="font-phone-outgoing"/> Outbound Call</a></li>
                          <li><a data-action="toggle" data-col="form"><i className="toggle"/> <i
                            className="font-list-ul"/> Form</a></li>
                          <li><a data-action="toggle" data-col="msg_inbound"><i className="toggle"/> <i
                            className="font-bubbles"/> Inbound Text</a></li>
                          <li><a data-action="toggle" data-col="msg_outbound"><i className="toggle"/> <i
                            className="font-bubbles-2"/> Outbound Text</a></li>
                        </ul>
                      </div>
                    </li>
                    <li className="hidden-xs">
                      <div id="call-customize" className="control dropdown guide-call-customize">
                        <a className="dropdown-toggle button" data-toggle="dropdown" title="" data-placement="bottom"
                           data-original-title="Visible columns"><i className="font-columns"/> <span
                          className="hidden-sm hidden-md hidden-lg">Visible columns</span> <i
                          className="font-caret-down"/></a>
                        <ul className="dropdown-menu">
                          <li><a data-action="toggle" data-col="caller-actions"><i className="toggle font-checkmark-2"/>
                            <i className="font-undo-3"/> Call Back/Edit</a></li>
                          <li><a data-action="toggle" data-col="caller"><i className="toggle font-checkmark-2"/> <i
                            className="font-user"/> Contact</a></li>
                          <li><a data-action="toggle" data-col="inputs"><i className="toggle font-checkmark-2"/> <i
                            className="font-grid"/> Key Presses</a></li>
                          <li><a data-action="toggle" data-col="message-body"><i className="toggle"/> <i
                            className="font-bubble"/> Message</a></li>
                          <li><a data-action="toggle" data-col="source"><i className="toggle font-checkmark-2"/> <i
                            className="font-newspaper"/> Source</a></li>
                          <li><a data-action="toggle" data-col="source-detail"><i className="toggle font-checkmark-2"/>
                            <i className="font-bars"/> Session Data</a></li>
                          <li><a data-action="toggle" data-col="csr"><i className="toggle"/> <i
                            className="font-user-2"/> Score</a></li>
                          <li><a data-action="toggle" data-col="audio"><i className="toggle font-checkmark-2"/> <i
                            className="font-play"/> Audio</a></li>
                          <li><a data-action="toggle" data-col="metrics"><i className="toggle font-checkmark-2"/> <i
                            className="font-signal"/> Metrics</a></li>
                          <li><a data-action="toggle" data-col="receiving-number"><i
                            className="toggle font-checkmark-2"/> <i className="font-loop"/> Routing</a></li>
                          <li><a data-action="toggle" data-col="actions"><i className="toggle font-checkmark-2"/> <i
                            className="font-bolt"/> Actions</a></li>
                        </ul>
                      </div>
                    </li>
                    <li className="hidden-sm hidden-md hidden-lg">
                      <div id="call-section-customize" className="control dropdown guide-call-section-customize">
                        <a className="dropdown-toggle button" data-toggle="dropdown" title="" data-placement="bottom"
                           data-original-title="Visible sections"><i className="font-columns"/> <span
                          className="hidden-sm hidden-md hidden-lg">Visible sections</span> <i
                          className="font-caret-down"/></a>
                        <ul className="dropdown-menu">
                          <li><a data-action="toggle" data-col="caller-actions"><i className="toggle"/> <i
                            className="font-undo-3"/> Call Back/Edit</a></li>
                          <li><a data-action="toggle" data-col="caller"><i className="toggle font-checkmark-2"/> <i
                            className="font-user"/> Contact</a></li>
                          <li><a data-action="toggle" data-col="inputs"><i className="toggle"/> <i
                            className="font-grid"/> Key Presses</a></li>
                          <li><a data-action="toggle" data-col="message-body"><i className="toggle"/> <i
                            className="font-bubble"/> Message</a></li>
                          <li><a data-action="toggle" data-col="source"><i className="toggle"/> <i
                            className="font-newspaper"/> Source</a></li>
                          <li><a data-action="toggle" data-col="source-detail"><i className="toggle"/> <i
                            className="font-bars"/> Session Data</a></li>
                          <li><a data-action="toggle" data-col="csr"><i className="toggle"/> <i
                            className="font-user-2"/> Score</a></li>
                          <li><a data-action="toggle" data-col="audio"><i className="toggle"/> <i
                            className="font-play"/> Audio</a></li>
                          <li><a data-action="toggle" data-col="metrics"><i className="toggle"/> <i
                            className="font-signal"/> Metrics</a></li>
                          <li><a data-action="toggle" data-col="receiving-number"><i className="toggle"/> <i
                            className="font-loop"/> Routing</a></li>
                          <li><a data-action="toggle" data-col="actions"><i className="toggle"/> <i
                            className="font-bolt"/> Actions</a></li>
                        </ul>
                      </div>
                    </li>
                    <li><a data-placement="bottom" data-toggle="tooltip" title="" id="export-link" href="#"
                           className="button guide-export-link" data-original-title="Export calls"><i
                      className="font-cloud-download"/> <span
                      className="hidden-sm hidden-md hidden-lg">Export</span></a>
                    </li>
                    <li><a id="stop-calls" className="button guide-stop-calls acceptbutton" data-placement="bottom"
                           title=""
                           data-original-title="Start or stop receiving calls to the browser phone and receiving number"><i
                      className="font-stop"/> <span
                      className="hidden-sm hidden-md hidden-lg">Stop Receiving Calls</span></a></li>
                  </ul>
                </div>
              </div>
              {/* <script>
      (function() {
        var auto_loader = $("#call-stats .auto-load");
        if (auto_loader.length) {
          $(".call-stats-mobile").after('<li className="hidden-sm hidden-md hidden-lg"><a id="auto-load-btn" className="button"><i className="font-spinner"></i> <span></span></a></li>');
          if (auto_loader.attr("data-state") == "manual") {
            $("#auto-load-btn > span").text(CTM.localize("Call", "actions.toolbar.auto-load.label"));
          } else {
            $("#auto-load-btn > span").text(CTM.localize("Call", "actions.toolbar.stop-auto-load.label"));
          }
          $("#auto-load-btn").click(function(e) { e.preventDefault(); auto_loader.click(); });
          if ($("body").hasclassName("native")) $("#auto-load-btn").parent().hide();
        }
      })();
      </script> */}
            </div>
          </div>
        </nav>
        <div id="messages" style={{display: "none"}}>
          <div style={{display: "none"}} id="server-flash-message" data-type="info" data-icon="info" data-safe="true"/>
          <div className="clear"/>
        </div>
        <div className="clear">
        </div>
      </div>
    )
  }
}
