import React, {Component} from 'react'

export default class Table extends Component {
  render() {
    return (
      <div className="table-responsive" id="call-log-table">
        <table id="calls" className="table standard-table table-hover table-striped table-condensed visible more-calls"
               data-account="211496" style={{opacity: "1"}}>
          <thead>
          <tr className="topline">
            <th scope="col" className="col-caller-actions  " data-dir="false">
              <a><i className="font-undo-3"/><span/></a>
            </th>
            <th scope="col" className="col-caller   sortable" data-dir="down">
              <a data-action="sort" data-col="caller"><i className="font-user"/><span>Contact</span></a>
            </th>
            <th scope="col" className="col-inputs  " data-dir="false">
              <a><i className="font-grid"/><span>Keys</span></a>
            </th>
            <th scope="col" className="col-message-body   hidden-col" data-dir="false">
              <a><i className="font-bubble"/><span>Message</span></a>
            </th>
            <th scope="col" className="col-source   sortable" data-dir="down">
              <a data-action="sort" data-col="source"><i className="font-newspaper"/><span>Source</span></a>
            </th>
            <th scope="col" className="col-source-detail  " data-dir="false">
              <a><i className="font-bars"/><span>Session Data</span></a>
            </th>
            <th scope="col" className="col-csr   hidden-col sortable" data-dir="down">
              <a data-action="sort" data-col="csr"><i className="font-user-2"/><span>Score</span></a>
            </th>
            <th scope="col" className="col-audio  " data-dir="false">
              <a><i className="font-play"/><span>Audio</span></a>
            </th>
            <th scope="col" className="col-metrics sortable sort_desc" data-dir="down">
              <a data-action="sort" data-col="metrics"><i className="font-signal"/><span>Metrics</span></a>
            </th>
            <th scope="col" className="col-receiving-number   sortable" data-dir="down">
              <a data-action="sort" data-col="receiving-number"><i className="font-loop"/><span>Routing</span></a>
            </th>
            <th scope="col" className="col-actions  " data-dir="false">
              <a><i className="font-bolt"/><span>Actions</span></a>
            </th>
          </tr>
          </thead>

          <tbody id="main-spacing"/>

          <tbody className="main-list">
          <tr data-id="833696424" id="call-row-833696424" data-number="+14062310955"
              className="call call-row wide-call   block pending col-caller col-inputs col-source col-source_detail col-audio col-metrics col-receiving_number col-caller_actions col-actions section-caller mobile-closed">
            <td className="log-column call-caller-actions openable mobile-option hidden-section" data-id="833696424">

              <a className="action " data-action="callback" data-digits="14062310955" data-id="833696424"
                 data-callback-count="0" data-from-number="1629414" data-excluded="null">
                <span className="font-phone-3 a-icon"/>
                <span className="text">Call</span>
              </a>


              <a className="action" data-action="edit" data-id="833696424" data-excluded="null">
                <span className="font-user a-icon"/>
                <span className="text">Edit</span>
              </a>
            </td>
            <td className="log-column call-caller openable mobile-primary" data-id="833696424">
              <div className="caller-info-section">
                <div className="callicons">
                  <span data-id="833696424" data-action="call_flow" className="direction inbound"
                        data-container="body" title="Inbound Call">
                      <i className="font-phone-incoming"/>
                  </span>
                </div>

                <span className="agent-initials button-background ">MM<span className="agent-pic"></span></span>

                <h5>
                  <a data-field="name" className="search callerid">MISSOULA, MT</a>
                  <a data-action="lookup" data-id="833696424" className="noborder-link action font-more2"
                     data-placement="bottom"
                     title="Look up additional information about this caller, using enhanced Caller ID"></a>
                </h5>
                <h6 className="false">
                  <a data-field="caller_number" data-search="14062310955" data-digits="14062310955"
                     className="search call_caller_number">(406) 231-0955</a>

                </h6>
                <p className="callerloc"><a data-field="city" className="search">Great Falls</a>, <a data-field="state"
                                                                                                     className="search">MT</a>
                  <a data-field="country" className="search">US</a></p>
              </div>

            </td>

            <td className="log-column call-inputs openable mobile-option hidden-section" data-id="833696424">

              <ul>
              </ul>

              <ul>
              </ul>

            </td>

            <td className="log-column call-message-body action-col openable empty-column hidden-col hidden-section"
                data-id="833696424">
            </td>

            <td className="log-column call-source openable mobile-option hidden-section" data-id="833696424">

              <h5>
                <a data-field="source" className="search"><i className="font-newspaper"></i> 03/20/20 Nov 19.6 Fed
                  Seizure</a>
              </h5>

              <span>
                                <a className="search" data-field="tracking_number" data-search="18559040846">(855) 904-0846</a>
                            </span>


            </td>
            <td className="log-column call-source-detail openable mobile-option hidden-section" data-id="833696424"
                data-key="true">

              <div className="smaller lighter">
                <div className="visitor-data-not-available"><i
                  title="Visitor data is only available to onsite sources.">visitor data not available</i></div>
              </div>
            </td>
            <td className="log-column call-csr action-col openable mobile-option hidden-col hidden-section"
                data-id="833696424">
              <a className="noborder-small action font-user-2" data-action="sale" data-id="833696424">
                <span className="text">Score</span>
              </a>
            </td>

            <td className="log-column call-audio action-col mobile-option hidden-section" data-id="833696424">
              <div className="audio-wrapper">
                <a href="#" data-id="833696424" data-audio-mp3="" data-audio-wav="" data-action="playback"
                   className="noborder-small action audio audio-player font-headphones">
                  <span className="text">audio</span>
                </a>
                <span className="duration" data-placement="left" data-container="#calls"
                      title="Ring Time: 13 seconds, Talk Time: 320 seconds, Hold Time: 0 seconds, Total Time: 333 seconds">
                                    <i className="font-volume-up"></i> 05:33
                </span>

              </div>
            </td>

            <td className="log-column call-metrics openable hidden-section" data-id="833696424">
              <div className="source-detail">
                <div className="source-info activity-date">
                  <span><i className="font-calendar hidden-xs"></i> Tue Mar 24th</span>
                </div>
                <div className="source-info activity-time">
                                    <span title="Ring time: 13 seconds, talk time: 320 seconds, total time: 333 seconds"
                                          data-placement="left">
                                        <i className="font-time hidden-xs"></i> 12:12 PM
                  </span>
                </div>
                <div className="source-info activity-status">
                                    <span>
                                        <i className="font-phone-hang-up"></i> <span>Answered</span>
                                    </span>
                </div>
                <div className="source-info activity-transfer">
                                    <span>
                                    </span>
                </div>
              </div>
            </td>


            <td className="log-column call-receiving-number openable mobile-option hidden-section" data-id="833696424">
              <div className="agent">
                <a className="change-agent"
                   title="You can automatically assign agents to calls by routing calls through a call queue"><i
                  className="font-plus"></i> set agent</a>
              </div>
              <div className="clear"></div>
              <a className="search" data-field="business_number" data-search="+13234575643">(323) 457-5643</a>
              <h6></h6>
              <a className="call_path search" data-field="call_path.route_name"
                 data-id="RPN34D8AC3F61E8848FEA641CEF711011AAC9FFBDB41337828CF056D0ED56FD5AE17EDC1F593D40E660"> <i
                className="font-random"></i></a>
            </td>


            <td className="log-column call-actions openable mobile-option hidden-section" data-id="833696424">
              <div className="action-box">
                <a className="action " data-action="email" data-placement="left" data-id="833696424"
                   title="Send call notification via email">
                  <span className="font-envelope a-icon"></span>
                  <span className="text">Email</span>
                </a>
                <a className="action" data-action="flag" data-placement="left" data-id="833696424"
                   title="Flag this call, exclude, redact, or block future calls like this one">
                  <span className="font-flag a-icon"></span>
                  <span className="text">Flag</span>
                </a>
                <div className="clear"></div>
              </div>
            </td>
          </tr>
          <tr data-id="833680659" id="call-row-833680659" data-number="+12258022784"
              className="call call-row wide-call   block pending col-caller col-inputs col-source col-source_detail col-audio col-metrics col-receiving_number col-caller_actions col-actions section-caller mobile-closed">


            <td className="log-column call-caller-actions openable mobile-option hidden-section" data-id="833680659">

              <a className="action " data-action="callback" data-digits="12258022784" data-id="833680659"
                 data-callback-count="0" data-from-number="1629414" data-excluded="null">
                <span className="font-phone-3 a-icon"></span>
                <span className="text">Call</span>
              </a>


              <a className="action" data-action="edit" data-id="833680659" data-excluded="null">
                <span className="font-user a-icon"></span>
                <span className="text">Edit</span>
              </a>
            </td>
            <td className="log-column call-caller openable mobile-primary" data-id="833680659">
              <div className="caller-info-section">
                <div className="callicons">
                                        <span data-id="833680659" data-action="call_flow" className="direction inbound"
                                              data-container="body" title="Inbound Call">
                                            <i className="font-phone-incoming"></i>
                                        </span>
                </div>

                <span className="agent-initials button-background ">OS<span className="agent-pic"></span></span>

                <h5>
                  <a data-field="name" className="search callerid">One Stop Auto S</a>
                  <a data-action="lookup" data-id="833680659" className="noborder-link action font-more2"
                     data-placement="bottom"
                     title="Look up additional information about this caller, using enhanced Caller ID"></a>
                </h5>
                <h6 className="false">
                  <a data-field="caller_number" data-search="12258022784" data-digits="12258022784"
                     className="search call_caller_number">(225) 802-2784</a>

                </h6>
                <p className="callerloc"><a data-field="city" className="search">Baton Rouge</a>, <a data-field="state"
                                                                                                     className="search">LA</a>
                  <a data-field="country" className="search">US</a></p>
              </div>

            </td>

            <td className="log-column call-inputs openable mobile-option hidden-section" data-id="833680659">

              <ul>
              </ul>

              <ul>
              </ul>

            </td>

            <td className="log-column call-message-body action-col openable empty-column hidden-col hidden-section"
                data-id="833680659">
            </td>

            <td className="log-column call-source openable mobile-option hidden-section" data-id="833680659">

              <h5>
                <a data-field="source" className="search"><i className="font-newspaper"></i> 03/20/20 Nov 19.6 Fed
                  Seizure</a>
              </h5>

              <span>
                                    <a className="search" data-field="tracking_number" data-search="18559040846">(855) 904-0846</a>
                                </span>


            </td>
            <td className="log-column call-source-detail openable mobile-option hidden-section" data-id="833680659"
                data-key="true">

              <div className="smaller lighter">
                <div className="visitor-data-not-available"><i
                  title="Visitor data is only available to onsite sources.">visitor data not available</i></div>
              </div>
            </td>
            <td className="log-column call-csr action-col openable mobile-option hidden-col hidden-section"
                data-id="833680659">
              <a className="noborder-small action font-user-2" data-action="sale" data-id="833680659">
                <span className="text">Score</span>
              </a>
            </td>

            <td className="log-column call-audio action-col mobile-option hidden-section" data-id="833680659">
              <p>no audio</p>
              <span className="duration" title="Ring Time: 0 seconds, Talk Time: 0 seconds, Total Time:  seconds"
                    data-placement="left"><i className="font-volume-off"></i> 43:34</span>
            </td>

            <td className="log-column call-metrics openable hidden-section" data-id="833680659">
              <div className="source-detail">
                <div className="source-info activity-date">
                  <span><i className="font-calendar hidden-xs"></i> Tue Mar 24th</span>
                </div>
                <div className="source-info activity-time">
                                        <span title="Ring time: 0 seconds, talk time: 0 seconds, total time:  seconds"
                                              data-placement="left">
                                            <i className="font-time hidden-xs"></i> 12:02 PM
                  </span>
                </div>
                <div className="source-info activity-status">
                                        <span>
                                            <i className="font-blocked"></i> <span>In Progress</span>
                                        </span>
                </div>
                <div className="source-info activity-transfer">
                                        <span>
                                        </span>
                </div>
              </div>
            </td>


            <td className="log-column call-receiving-number openable mobile-option hidden-section" data-id="833680659">
              <div className="agent">
                <a className="change-agent"
                   title="You can automatically assign agents to calls by routing calls through a call queue"><i
                  className="font-plus"></i> set agent</a>
              </div>
              <div className="clear"></div>
              <a className="search" data-field="business_number" data-search="+13234575643">(323) 457-5643</a>
              <h6></h6>
              <a className="call_path search" data-field="call_path.route_name"
                 data-id="RPN34D8AC3F61E8848FEA641CEF711011AAC9FFBDB41337828CF056D0ED56FD5AE17EDC1F593D40E660"> <i
                className="font-random"></i></a>
            </td>


            <td className="log-column call-actions openable mobile-option hidden-section" data-id="833680659">
              <div className="action-box">
                <a className="action " data-action="email" data-placement="left" data-id="833680659"
                   title="Send call notification via email">
                  <span className="font-envelope a-icon"></span>
                  <span className="text">Email</span>
                </a>
                <a className="action" data-action="flag" data-placement="left" data-id="833680659"
                   title="Flag this call, exclude, redact, or block future calls like this one">
                  <span className="font-flag a-icon"></span>
                  <span className="text">Flag</span>
                </a>
                <div className="clear"></div>
              </div>
            </td>
          </tr>
          <tr data-id="833696424" id="call-row-833696424" data-number="+14062310955"
              className="call call-row wide-call   block pending col-caller col-inputs col-source col-source_detail col-audio col-metrics col-receiving_number col-caller_actions col-actions section-caller mobile-closed">
            <td className="log-column call-caller-actions openable mobile-option hidden-section" data-id="833696424">

              <a className="action " data-action="callback" data-digits="14062310955" data-id="833696424"
                 data-callback-count="0" data-from-number="1629414" data-excluded="null">
                <span className="font-phone-3 a-icon"></span>
                <span className="text">Call</span>
              </a>


              <a className="action" data-action="edit" data-id="833696424" data-excluded="null">
                <span className="font-user a-icon"></span>
                <span className="text">Edit</span>
              </a>
            </td>
            <td className="log-column call-caller openable mobile-primary" data-id="833696424">
              <div className="caller-info-section">
                <div className="callicons">
                                    <span data-id="833696424" data-action="call_flow" className="direction inbound"
                                          data-container="body" title="Inbound Call">
                                        <i className="font-phone-incoming"></i>
                                    </span>
                </div>

                <span className="agent-initials button-background ">MM<span className="agent-pic"></span></span>

                <h5>
                  <a data-field="name" className="search callerid">MISSOULA, MT</a>
                  <a data-action="lookup" data-id="833696424" className="noborder-link action font-more2"
                     data-placement="bottom"
                     title="Look up additional information about this caller, using enhanced Caller ID"></a>
                </h5>
                <h6 className="false">
                  <a data-field="caller_number" data-search="14062310955" data-digits="14062310955"
                     className="search call_caller_number">(406) 231-0955</a>

                </h6>
                <p className="callerloc"><a data-field="city" className="search">Great Falls</a>, <a data-field="state"
                                                                                                     className="search">MT</a>
                  <a data-field="country" className="search">US</a></p>
              </div>

            </td>

            <td className="log-column call-inputs openable mobile-option hidden-section" data-id="833696424">

              <ul>
              </ul>

              <ul>
              </ul>

            </td>

            <td className="log-column call-message-body action-col openable empty-column hidden-col hidden-section"
                data-id="833696424">
            </td>

            <td className="log-column call-source openable mobile-option hidden-section" data-id="833696424">

              <h5>
                <a data-field="source" className="search"><i className="font-newspaper"></i> 03/20/20 Nov 19.6 Fed
                  Seizure</a>
              </h5>

              <span>
                                <a className="search" data-field="tracking_number" data-search="18559040846">(855) 904-0846</a>
                            </span>


            </td>
            <td className="log-column call-source-detail openable mobile-option hidden-section" data-id="833696424"
                data-key="true">

              <div className="smaller lighter">
                <div className="visitor-data-not-available"><i
                  title="Visitor data is only available to onsite sources.">visitor data not available</i></div>
              </div>
            </td>
            <td className="log-column call-csr action-col openable mobile-option hidden-col hidden-section"
                data-id="833696424">
              <a className="noborder-small action font-user-2" data-action="sale" data-id="833696424">
                <span className="text">Score</span>
              </a>
            </td>

            <td className="log-column call-audio action-col mobile-option hidden-section" data-id="833696424">
              <div className="audio-wrapper">
                <a href="#" data-id="833696424" data-audio-mp3="" data-audio-wav="" data-action="playback"
                   className="noborder-small action audio audio-player font-headphones">
                  <span className="text">audio</span>
                </a>
                <span className="duration" data-placement="left" data-container="#calls"
                      title="Ring Time: 13 seconds, Talk Time: 320 seconds, Hold Time: 0 seconds, Total Time: 333 seconds">
                                    <i className="font-volume-up"></i> 05:33
                </span>

              </div>
            </td>

            <td className="log-column call-metrics openable hidden-section" data-id="833696424">
              <div className="source-detail">
                <div className="source-info activity-date">
                  <span><i className="font-calendar hidden-xs"></i> Tue Mar 24th</span>
                </div>
                <div className="source-info activity-time">
                                    <span title="Ring time: 13 seconds, talk time: 320 seconds, total time: 333 seconds"
                                          data-placement="left">
                                        <i className="font-time hidden-xs"></i> 12:12 PM
                  </span>
                </div>
                <div className="source-info activity-status">
                                    <span>
                                        <i className="font-phone-hang-up"></i> <span>Answered</span>
                                    </span>
                </div>
                <div className="source-info activity-transfer">
                                    <span>
                                    </span>
                </div>
              </div>
            </td>


            <td className="log-column call-receiving-number openable mobile-option hidden-section" data-id="833696424">
              <div className="agent">
                <a className="change-agent"
                   title="You can automatically assign agents to calls by routing calls through a call queue"><i
                  className="font-plus"></i> set agent</a>
              </div>
              <div className="clear"></div>
              <a className="search" data-field="business_number" data-search="+13234575643">(323) 457-5643</a>
              <h6></h6>
              <a className="call_path search" data-field="call_path.route_name"
                 data-id="RPN34D8AC3F61E8848FEA641CEF711011AAC9FFBDB41337828CF056D0ED56FD5AE17EDC1F593D40E660"> <i
                className="font-random"></i></a>
            </td>


            <td className="log-column call-actions openable mobile-option hidden-section" data-id="833696424">
              <div className="action-box">
                <a className="action " data-action="email" data-placement="left" data-id="833696424"
                   title="Send call notification via email">
                  <span className="font-envelope a-icon"></span>
                  <span className="text">Email</span>
                </a>
                <a className="action" data-action="flag" data-placement="left" data-id="833696424"
                   title="Flag this call, exclude, redact, or block future calls like this one">
                  <span className="font-flag a-icon"></span>
                  <span className="text">Flag</span>
                </a>
                <div className="clear"></div>
              </div>
            </td>
          </tr>
          </tbody>

          <tfoot>
          <tr className="calls-loader placeholder-row call call-row wide-call" style={{display: "none"}}>
            <td className="placeholder-column log-column col-caller-actions  ">
              <div className="placeholder-box-1 shimmer-animation"/>
              <div className="placeholder-box-2 shimmer-animation"/>
              <div className="placeholder-box-3 shimmer-animation"/>
            </td>
            <td className="placeholder-column log-column col-caller   sortable">
              <div className="placeholder-box-1 shimmer-animation"/>
              <div className="placeholder-box-2 shimmer-animation"/>
              <div className="placeholder-box-3 shimmer-animation"/>
            </td>
            <td className="placeholder-column log-column col-inputs  ">
              <div className="placeholder-box-1 shimmer-animation"/>
              <div className="placeholder-box-2 shimmer-animation"/>
              <div className="placeholder-box-3 shimmer-animation"/>
            </td>
            <td className="placeholder-column log-column col-message-body   hidden-col">
              <div className="placeholder-box-1 shimmer-animation"/>
              <div className="placeholder-box-2 shimmer-animation"/>
              <div className="placeholder-box-3 shimmer-animation"/>
            </td>
            <td className="placeholder-column log-column col-source   sortable">
              <div className="placeholder-box-1 shimmer-animation"/>
              <div className="placeholder-box-2 shimmer-animation"/>
              <div className="placeholder-box-3 shimmer-animation"/>
            </td>
            <td className="placeholder-column log-column col-source-detail  ">
              <div className="placeholder-box-1 shimmer-animation"/>
              <div className="placeholder-box-2 shimmer-animation"/>
              <div className="placeholder-box-3 shimmer-animation"/>
            </td>
            <td className="placeholder-column log-column col-csr   hidden-col sortable">
              <div className="placeholder-box-1 shimmer-animation"/>
              <div className="placeholder-box-2 shimmer-animation"/>
              <div className="placeholder-box-3 shimmer-animation"/>
            </td>
            <td className="placeholder-column log-column col-audio  ">
              <div className="placeholder-box-1 shimmer-animation"/>
              <div className="placeholder-box-2 shimmer-animation"/>
              <div className="placeholder-box-3 shimmer-animation"/>
            </td>
            <td className="placeholder-column log-column col-metrics   sortable">
              <div className="placeholder-box-1 shimmer-animation"/>
              <div className="placeholder-box-2 shimmer-animation"/>
              <div className="placeholder-box-3 shimmer-animation"/>
            </td>
            <td className="placeholder-column log-column col-receiving-number   sortable">
              <div className="placeholder-box-1 shimmer-animation"/>
              <div className="placeholder-box-2 shimmer-animation"/>
              <div className="placeholder-box-3 shimmer-animation"/>
            </td>
            <td className="placeholder-column log-column col-actions  ">
              <div className="placeholder-box-1 shimmer-animation"/>
              <div className="placeholder-box-2 shimmer-animation"/>
              <div className="placeholder-box-3 shimmer-animation"/>
            </td>
          </tr>
          <tr className="calls-loader placeholder-row call call-row wide-call" style={{display: "none"}}>
            <td className="placeholder-column log-column col-caller-actions  ">
              <div className="placeholder-box-1 shimmer-animation"></div>
              <div className="placeholder-box-2 shimmer-animation"></div>
              <div className="placeholder-box-3 shimmer-animation"></div>
            </td>
            <td className="placeholder-column log-column col-caller   sortable">
              <div className="placeholder-box-1 shimmer-animation"></div>
              <div className="placeholder-box-2 shimmer-animation"></div>
              <div className="placeholder-box-3 shimmer-animation"></div>
            </td>
            <td className="placeholder-column log-column col-inputs  ">
              <div className="placeholder-box-1 shimmer-animation"></div>
              <div className="placeholder-box-2 shimmer-animation"></div>
              <div className="placeholder-box-3 shimmer-animation"></div>
            </td>
            <td className="placeholder-column log-column col-message-body   hidden-col">
              <div className="placeholder-box-1 shimmer-animation"></div>
              <div className="placeholder-box-2 shimmer-animation"></div>
              <div className="placeholder-box-3 shimmer-animation"></div>
            </td>
            <td className="placeholder-column log-column col-source   sortable">
              <div className="placeholder-box-1 shimmer-animation"></div>
              <div className="placeholder-box-2 shimmer-animation"></div>
              <div className="placeholder-box-3 shimmer-animation"></div>
            </td>
            <td className="placeholder-column log-column col-source-detail  ">
              <div className="placeholder-box-1 shimmer-animation"></div>
              <div className="placeholder-box-2 shimmer-animation"></div>
              <div className="placeholder-box-3 shimmer-animation"></div>
            </td>
            <td className="placeholder-column log-column col-csr   hidden-col sortable">
              <div className="placeholder-box-1 shimmer-animation"></div>
              <div className="placeholder-box-2 shimmer-animation"></div>
              <div className="placeholder-box-3 shimmer-animation"></div>
            </td>
            <td className="placeholder-column log-column col-audio  ">
              <div className="placeholder-box-1 shimmer-animation"></div>
              <div className="placeholder-box-2 shimmer-animation"></div>
              <div className="placeholder-box-3 shimmer-animation"></div>
            </td>
            <td className="placeholder-column log-column col-metrics   sortable">
              <div className="placeholder-box-1 shimmer-animation"></div>
              <div className="placeholder-box-2 shimmer-animation"></div>
              <div className="placeholder-box-3 shimmer-animation"></div>
            </td>
            <td className="placeholder-column log-column col-receiving-number   sortable">
              <div className="placeholder-box-1 shimmer-animation"></div>
              <div className="placeholder-box-2 shimmer-animation"></div>
              <div className="placeholder-box-3 shimmer-animation"></div>
            </td>
            <td className="placeholder-column log-column col-actions  ">
              <div className="placeholder-box-1 shimmer-animation"></div>
              <div className="placeholder-box-2 shimmer-animation"></div>
              <div className="placeholder-box-3 shimmer-animation"></div>
            </td>
          </tr>
          <tr className="calls-loader placeholder-row call call-row wide-call" style={{display: "none"}}>
            <td className="placeholder-column log-column col-caller-actions  ">
              <div className="placeholder-box-1 shimmer-animation"></div>
              <div className="placeholder-box-2 shimmer-animation"></div>
              <div className="placeholder-box-3 shimmer-animation"></div>
            </td>
            <td className="placeholder-column log-column col-caller   sortable">
              <div className="placeholder-box-1 shimmer-animation"></div>
              <div className="placeholder-box-2 shimmer-animation"></div>
              <div className="placeholder-box-3 shimmer-animation"></div>
            </td>
            <td className="placeholder-column log-column col-inputs  ">
              <div className="placeholder-box-1 shimmer-animation"></div>
              <div className="placeholder-box-2 shimmer-animation"></div>
              <div className="placeholder-box-3 shimmer-animation"></div>
            </td>
            <td className="placeholder-column log-column col-message-body   hidden-col">
              <div className="placeholder-box-1 shimmer-animation"></div>
              <div className="placeholder-box-2 shimmer-animation"></div>
              <div className="placeholder-box-3 shimmer-animation"></div>
            </td>
            <td className="placeholder-column log-column col-source   sortable">
              <div className="placeholder-box-1 shimmer-animation"></div>
              <div className="placeholder-box-2 shimmer-animation"></div>
              <div className="placeholder-box-3 shimmer-animation"></div>
            </td>
            <td className="placeholder-column log-column col-source-detail  ">
              <div className="placeholder-box-1 shimmer-animation"></div>
              <div className="placeholder-box-2 shimmer-animation"></div>
              <div className="placeholder-box-3 shimmer-animation"></div>
            </td>
            <td className="placeholder-column log-column col-csr   hidden-col sortable">
              <div className="placeholder-box-1 shimmer-animation"></div>
              <div className="placeholder-box-2 shimmer-animation"></div>
              <div className="placeholder-box-3 shimmer-animation"></div>
            </td>
            <td className="placeholder-column log-column col-audio  ">
              <div className="placeholder-box-1 shimmer-animation"></div>
              <div className="placeholder-box-2 shimmer-animation"></div>
              <div className="placeholder-box-3 shimmer-animation"></div>
            </td>
            <td className="placeholder-column log-column col-metrics   sortable">
              <div className="placeholder-box-1 shimmer-animation"></div>
              <div className="placeholder-box-2 shimmer-animation"></div>
              <div className="placeholder-box-3 shimmer-animation"></div>
            </td>
            <td className="placeholder-column log-column col-receiving-number   sortable">
              <div className="placeholder-box-1 shimmer-animation"></div>
              <div className="placeholder-box-2 shimmer-animation"></div>
              <div className="placeholder-box-3 shimmer-animation"></div>
            </td>
            <td className="placeholder-column log-column col-actions  ">
              <div className="placeholder-box-1 shimmer-animation"></div>
              <div className="placeholder-box-2 shimmer-animation"></div>
              <div className="placeholder-box-3 shimmer-animation"></div>
            </td>
          </tr>
          <tr className="calls-loader placeholder-row call call-row wide-call" style={{display: "none"}}>
            <td className="placeholder-column log-column col-caller-actions  ">
              <div className="placeholder-box-1 shimmer-animation"></div>
              <div className="placeholder-box-2 shimmer-animation"></div>
              <div className="placeholder-box-3 shimmer-animation"></div>
            </td>
            <td className="placeholder-column log-column col-caller   sortable">
              <div className="placeholder-box-1 shimmer-animation"></div>
              <div className="placeholder-box-2 shimmer-animation"></div>
              <div className="placeholder-box-3 shimmer-animation"></div>
            </td>
            <td className="placeholder-column log-column col-inputs  ">
              <div className="placeholder-box-1 shimmer-animation"></div>
              <div className="placeholder-box-2 shimmer-animation"></div>
              <div className="placeholder-box-3 shimmer-animation"></div>
            </td>
            <td className="placeholder-column log-column col-message-body   hidden-col">
              <div className="placeholder-box-1 shimmer-animation"></div>
              <div className="placeholder-box-2 shimmer-animation"></div>
              <div className="placeholder-box-3 shimmer-animation"></div>
            </td>
            <td className="placeholder-column log-column col-source   sortable">
              <div className="placeholder-box-1 shimmer-animation"></div>
              <div className="placeholder-box-2 shimmer-animation"></div>
              <div className="placeholder-box-3 shimmer-animation"></div>
            </td>
            <td className="placeholder-column log-column col-source-detail  ">
              <div className="placeholder-box-1 shimmer-animation"></div>
              <div className="placeholder-box-2 shimmer-animation"></div>
              <div className="placeholder-box-3 shimmer-animation"></div>
            </td>
            <td className="placeholder-column log-column col-csr   hidden-col sortable">
              <div className="placeholder-box-1 shimmer-animation"></div>
              <div className="placeholder-box-2 shimmer-animation"></div>
              <div className="placeholder-box-3 shimmer-animation"></div>
            </td>
            <td className="placeholder-column log-column col-audio  ">
              <div className="placeholder-box-1 shimmer-animation"></div>
              <div className="placeholder-box-2 shimmer-animation"></div>
              <div className="placeholder-box-3 shimmer-animation"></div>
            </td>
            <td className="placeholder-column log-column col-metrics   sortable">
              <div className="placeholder-box-1 shimmer-animation"></div>
              <div className="placeholder-box-2 shimmer-animation"></div>
              <div className="placeholder-box-3 shimmer-animation"></div>
            </td>
            <td className="placeholder-column log-column col-receiving-number   sortable">
              <div className="placeholder-box-1 shimmer-animation"></div>
              <div className="placeholder-box-2 shimmer-animation"></div>
              <div className="placeholder-box-3 shimmer-animation"></div>
            </td>
            <td className="placeholder-column log-column col-actions  ">
              <div className="placeholder-box-1 shimmer-animation"></div>
              <div className="placeholder-box-2 shimmer-animation"></div>
              <div className="placeholder-box-3 shimmer-animation"></div>
            </td>
          </tr>
          <tr className="calls-loader placeholder-row call call-row wide-call" style={{display: "none"}}>
            <td className="placeholder-column log-column col-caller-actions  ">
              <div className="placeholder-box-1 shimmer-animation"></div>
              <div className="placeholder-box-2 shimmer-animation"></div>
              <div className="placeholder-box-3 shimmer-animation"></div>
            </td>
            <td className="placeholder-column log-column col-caller   sortable">
              <div className="placeholder-box-1 shimmer-animation"></div>
              <div className="placeholder-box-2 shimmer-animation"></div>
              <div className="placeholder-box-3 shimmer-animation"></div>
            </td>
            <td className="placeholder-column log-column col-inputs  ">
              <div className="placeholder-box-1 shimmer-animation"></div>
              <div className="placeholder-box-2 shimmer-animation"></div>
              <div className="placeholder-box-3 shimmer-animation"></div>
            </td>
            <td className="placeholder-column log-column col-message-body   hidden-col">
              <div className="placeholder-box-1 shimmer-animation"></div>
              <div className="placeholder-box-2 shimmer-animation"></div>
              <div className="placeholder-box-3 shimmer-animation"></div>
            </td>
            <td className="placeholder-column log-column col-source   sortable">
              <div className="placeholder-box-1 shimmer-animation"></div>
              <div className="placeholder-box-2 shimmer-animation"></div>
              <div className="placeholder-box-3 shimmer-animation"></div>
            </td>
            <td className="placeholder-column log-column col-source-detail  ">
              <div className="placeholder-box-1 shimmer-animation"></div>
              <div className="placeholder-box-2 shimmer-animation"></div>
              <div className="placeholder-box-3 shimmer-animation"></div>
            </td>
            <td className="placeholder-column log-column col-csr   hidden-col sortable">
              <div className="placeholder-box-1 shimmer-animation"></div>
              <div className="placeholder-box-2 shimmer-animation"></div>
              <div className="placeholder-box-3 shimmer-animation"></div>
            </td>
            <td className="placeholder-column log-column col-audio  ">
              <div className="placeholder-box-1 shimmer-animation"></div>
              <div className="placeholder-box-2 shimmer-animation"></div>
              <div className="placeholder-box-3 shimmer-animation"></div>
            </td>
            <td className="placeholder-column log-column col-metrics   sortable">
              <div className="placeholder-box-1 shimmer-animation"></div>
              <div className="placeholder-box-2 shimmer-animation"></div>
              <div className="placeholder-box-3 shimmer-animation"></div>
            </td>
            <td className="placeholder-column log-column col-receiving-number   sortable">
              <div className="placeholder-box-1 shimmer-animation"></div>
              <div className="placeholder-box-2 shimmer-animation"></div>
              <div className="placeholder-box-3 shimmer-animation"></div>
            </td>
            <td className="placeholder-column log-column col-actions  ">
              <div className="placeholder-box-1 shimmer-animation"></div>
              <div className="placeholder-box-2 shimmer-animation"></div>
              <div className="placeholder-box-3 shimmer-animation"></div>
            </td>
          </tr>

          <tr id="calls-error" style={{display: "none"}}>
            <td colSpan="9">
              <div style={{margin: "90px 3%", textAlign: "center", whiteSpace: "normal"}}>An unexpected error
                occurred. <a>Please try again.</a></div>
            </td>
          </tr>
          <tr id="calls-footer-header">
            <th scope="col" className="col-caller-actions" data-dir="false">
              <a><i className="font-undo-3"/><span/></a>
            </th>
            <th scope="col" className="col-caller   sortable" data-dir="down">
              <a data-action="sort" data-col="caller"><i className="font-user"/><span>Contact</span></a>
            </th>
            <th scope="col" className="col-inputs  " data-dir="false">
              <a><i className="font-grid"/><span>Keys</span></a>
            </th>
            <th scope="col" className="col-message-body   hidden-col" data-dir="false">
              <a><i className="font-bubble"/><span>Message</span></a>
            </th>
            <th scope="col" className="col-source   sortable" data-dir="down">
              <a data-action="sort" data-col="source"><i className="font-newspaper"/><span>Source</span></a>
            </th>
            <th scope="col" className="col-source-detail  " data-dir="false">
              <a><i className="font-bars"/><span>Session Data</span></a>
            </th>
            <th scope="col" className="col-csr   hidden-col sortable" data-dir="down">
              <a data-action="sort" data-col="csr"><i className="font-user-2"/><span>Score</span></a>
            </th>
            <th scope="col" className="col-audio  " data-dir="false">
              <a><i className="font-play"/><span>Audio</span></a>
            </th>
            <th scope="col" className="col-metrics   sortable" data-dir="down">
              <a data-action="sort" data-col="metrics"><i className="font-signal"/><span>Metrics</span></a>
            </th>
            <th scope="col" className="col-receiving-number   sortable" data-dir="down">
              <a data-action="sort" data-col="receiving-number"><i className="font-loop"/><span>Routing</span></a>
            </th>
            <th scope="col" className="col-actions  " data-dir="false">
              <a><i className="font-bolt"/><span>Actions</span></a>
            </th>
          </tr>
          </tfoot>
        </table>
      </div>
    )
  }
}
