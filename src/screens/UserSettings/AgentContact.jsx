import React, {useState} from "react";
import './index.css';

const AgentContact = props => {
  return (
    <div id="user-agent-contact" className="field">
      <h3>Agent Contact
        <small>preferences for when and how to best reach this agent.</small>
      </h3>
      <div className="card">
        <p>
          Agent contact information is used to route calls directly to this agent. The
          Agent may receive phone calls either via receiving number, the builtin Soft
          Phone or a SIP Phone.
        </p>
        <form id="assign_phone" noValidate="novalidate" className="edit_user">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6">
              <div className="field phonenumber clearfix">
                <label>Receiving number
                  <small>(optional)</small>
                </label>
                <div className="select2-container" id="s2id_user_country_code">
                  <a href="#" className="select2-choice" tabIndex="-1">
                              <span className="select2-chosen">
                                <i data-prefix="1" data-code="US" className="country US">
                                  <i className="i"/> US + 1<small>United States</small></i>
                              </span>
                    <abbr className="select2-search-choice-close"/>
                    <span className="select2-arrow"><b/></span>
                  </a>
                  <label className="select2-offscreen"/>
                  <input className="select2-focusser select2-offscreen" type="text"/>
                  <div className="select2-drop select2-display-none select2-with-searchbox">
                    <div className="select2-search">
                      <label className="select2-offscreen"/>
                      <input type="text" className="select2-input"/>
                    </div>
                    <ul className="select2-results" role="listbox" id="select2-results-2874091238"/>
                  </div>
                </div>
                <input className="required string phone" style={{width: '60%'}} type="text" id="user_number"/>
                <span className="hint">The number this agent will receive calls on.</span>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3">
              <label>Dial extension</label>
              <input size="8" className="string" type="text" id="user_dial_extension"/>
              <span className="hint">e.g. 443#</span>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3">
              <label>Delay before dialing the
                extension</label>
              <select id="user_dial_extension_wait_time">
                <option value="0.0">0.0</option>
                <option value="0.5">0.5</option>
                <option value="1.0">1.0</option>
                <option value="1.5">1.5</option>
                <option value="2.0">2.0</option>
                <option value="2.5">2.5</option>
                <option value="3.0">3.0</option>
                <option value="3.5">3.5</option>
                <option value="4.0">4.0</option>
                <option value="4.5">4.5</option>
                <option value="5.0">5.0</option>
                <option value="5.5">5.5</option>
                <option value="6.0">6.0</option>
                <option value="6.5">6.5</option>
                <option value="7.0">7.0</option>
                <option value="7.5">7.5</option>
                <option value="8.0">8.0</option>
                <option value="8.5">8.5</option>
                <option value="9.0">9.0</option>
                <option value="9.5">9.5</option>
                <option value="10.0">10.0</option>
                <option value="11.0">11.0</option>
                <option value="12.0">12.0</option>
                <option value="13.0">13.0</option>
                <option value="14.0">14.0</option>
                <option value="15.0">15.0</option>
                <option value="16.0">16.0</option>
                <option value="17.0">17.0</option>
                <option value="18.0">18.0</option>
                <option value="19.0">19.0</option>
                <option value="20.0">20.0</option>
                <option value="21.0">21.0</option>
                <option value="22.0">22.0</option>
                <option value="23.0">23.0</option>
                <option value="24.0">24.0</option>
                <option value="25.0">25.0</option>
                <option value="26.0">26.0</option>
                <option value="27.0">27.0</option>
                <option value="28.0">28.0</option>
                <option value="29.0">29.0</option>
                <option value="30.0">30.0</option>
              </select>
              <cite className="desc">&nbsp;seconds</cite>
            </div>
          </div>
          <div className="field checkbox boot-switch">
            <div
              className="bootstrap-switch bootstrap-switch-wrapper bootstrap-switch-on bootstrap-switch-id-user_dial_sequence bootstrap-switch-animate"
              style={{width: 91}}>
              <div className="bootstrap-switch-container" style={{width: 138, marginLeft: 0}}>
                <span className="bootstrap-switch-handle-on bootstrap-switch-success"
                      style={{width: 47}}>ON</span>
                <span className="bootstrap-switch-label" style={{width: 44}}>&nbsp;</span>
                <span className="bootstrap-switch-handle-off bootstrap-switch-default"
                      style={{width: 47}}>OFF</span>
                <input className="checkbox" data-on-color="success" type="checkbox" value="1"
                       checked="checked" id="user_dial_sequence"/>
              </div>
            </div>
            <span className="bootstrap-switch-spacer">&nbsp;</span>
            <span className="bootstrap-switch-content">
              <label>Dial the app phone first</label>
              <span className="hint">
                When turned on, the soft phone browser phone will be dialed before the receiving number.  When a SIP Phone is used, the soft phone will be dialed first, then the SIP Phone, and finally the receiving number.  In most cases, you will want to keep this option on.
              </span>
            </span>
            <div className="clear"/>
          </div>
          <div className="field checkbox">
            <input
              className="checkbox" type="checkbox" value="1"
              id="user_force_aggressive_ice_nomination"/>
            <label>Force Aggressive ICE Nomination</label>
            <span className="hint">
              <i className="font-lab"/>
              As this is an experimental feature, we don't recommend enabling this until after testing it thoroughly in your deployment.  If RTT to the voice servers is typically greater than 96 milliseconds, this feature may help reduce call connect time.
            </span>
            <div className="clear"/>
          </div>
        </form>
        <form id="assign_region" noValidate="novalidate" className="edit_user">
        </form>
        <form id="assign_schedule" noValidate="novalidate" className="edit_user">
          <div className="field">
            <div className="field textfield">
              <label>Call Schedule&nbsp;<a href="#" target="_blank">add new schedule</a></label>
              <div className="select2-container chzn-select" id="s2id_user_schedule_id">
                <a href="#" className="select2-choice select2-default">
                  <span className="select2-chosen">Always Available</span>
                  <abbr className="select2-search-choice-close"/>
                  <span className="select2-arrow"><b/></span>
                </a>
                <label className="select2-offscreen">Call Schedule &nbsp;add new schedule</label>
                <input className="select2-focusser select2-offscreen" type="text"/>
                <div className="select2-drop select2-display-none select2-with-searchbox">
                  <div className="select2-search">
                    <label className="select2-offscreen">Call Schedule &nbsp;add new schedule</label>
                    <input type="text" autoComplete="nope" className="select2-input"/>
                  </div>
                  <ul className="select2-results" role="listbox" id="select2-results-2361381252"/>
                </div>
              </div>
              <input data-history="Call Schedule" className="chzn-select" type="text" id="user_schedule_id"
                     style={{display: 'none'}}/>
              <span className="hint">When to route calls to this user (when in a call queue or directly dialed)</span>
              <div className="clear-break"/>
            </div>
          </div>
        </form>
        <form id="assign_outbound" noValidate="novalidate" className="edit_user">
          <div className="field textfield">
            <label>Tracking Number
              <small>(e.g. DID or outbound caller ID)</small>
            </label>
            <div className="select2-container text string" id="s2id_user_tracking_number_id"
                 style={{width: '100', maxWidth: 300}}>
              <a href="#" className="select2-choice select2-default">
                <span className="select2-chosen">No default number</span>
                <abbr className="select2-search-choice-close"/>
                <span className="select2-arrow"><b/></span></a>
              <label className="select2-offscreen">Tracking Number (e.g. DID or outbound caller ID)</label>
              <input className="select2-focusser select2-offscreen" type="text"/>
              <div className="select2-drop select2-display-none select2-with-searchbox">
                <div className="select2-search">
                  <label className="select2-offscreen">Tracking Number (e.g. DID or outbound caller
                    ID)</label>
                  <input type="text" className="select2-input"/>
                </div>
              </div>
            </div>
            <input style={{width: '100%', maxWidth: 300, display: 'none'}} className="text string" type="text"
                   id="user_tracking_number_id"/>
            <span className="hint">
                        The tracking number assigned to this agent will be the default for outbound phone calls and text messages.
                      </span>
            <div className="clear-break"/>
          </div>
          <div className="well"><b>Tip:</b> Call your tracking number from your receiving
            number to make outbound calls from your phone, or check your agent
            voicemail.
          </div>
        </form>
        <footer>
          <div className="button callout save-button pull-left" style={{marginRight: 5}}
               data-submit="assign_phone assign_schedule assign_outbound assign_region">
            <div className="indicator-loop"><i className="save"/></div>
            <span>Save Changes</span></div>
          <div className="clear"/>
        </footer>
      </div>
    </div>
  );
};

export default AgentContact;
