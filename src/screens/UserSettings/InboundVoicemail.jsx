import React from 'react';

const InboundVoicemail = props => {
  return (
    <form id="update_inbound_voicemails" className="new_voice_mail">
      <div id="user-agent-inbound-voicemail" className="field">
        <h3>Inbound Voicemail
          <small>for direct dials / voicemail greeting</small>
        </h3>
        <div className="card">
          <input value="323147" type="hidden" id="voice_mail_user_id"/>
          <div className="field textfield">
            <label>Greeting</label>
            <div className="say_upload guide-say-upload admin">
              <input className="text string" type="text"
                     value="say:alice:en-US:Please leave a message after the beep"
                     placeholder="Leave blank for no message"/>
              <input type="hidden" className="text hidden"
                     value="say:alice:en-US:Please leave a message after the beep"/>
              <a className="upload"><i className="font-cloud-upload"/></a>
              <a className="record"><i className="font-mic"/></a>
              <a className="listen"><i className="font-play"/></a>
              <a className="remove" style={{visibility: 'visible'}}><i className="font-close"/></a>
              <div className="progress-indicator"/>
              <div className="settings-panel">
                <span className="contents">
                  <div className="select2-container"
                       style={{
                         maxWidth: 'calc(56% - 5px)',
                         marginRight: 5,
                         whiteSpace: 'nowrap',
                         verticalAlign: 'top'
                       }}>
                    <a href="#" className="select2-choice">
                      <span className="select2-chosen">English
                        <span className="result-desc">United States</span>
                      </span>
                            <abbr className="select2-search-choice-close"/>
                            <span className="select2-arrow"><b/></span>
                          </a>
                          <label className="select2-offscreen"/>
                          <input className="select2-focusser select2-offscreen" type="text"/>
                          <div className="select2-drop select2-display-none select2-with-searchbox wider">
                            <div className="select2-search">
                              <label className="select2-offscreen"/>
                              <input type="text" className="select2-input"/>
                            </div>
                            <ul className="select2-results"/>
                          </div>
                        </div>
                        <select name="lang"
                                style={{
                                  maxWidth: 'calc(56% - 5px)',
                                  marginRight: 5,
                                  whiteSpace: 'nowrap',
                                  verticalAlign: 'top',
                                  display: 'none'
                                }}>
                          <option value="da-DK" data-description="Denmark">Danish</option>
                          <option value="de" data-description="">German</option>
                          <option value="de-DE" data-description="Germany">German</option>
                          <option value="en" data-description="">English</option>
                          <option value="en-AU" data-description="Australia">English</option>
                          <option value="en-CA" data-description="Canada">English</option>
                          <option value="en-GB" data-description="United Kingdom">English</option>
                          <option value="en-IN" data-description="India">English</option>
                          <option value="en-US" data-description="United States">English</option>
                          <option value="en" data-description="Welsh">English</option>
                          <option value="ca-ES" data-description="Spain">Catalan</option>
                          <option value="es" data-description="">Spanish</option>
                          <option value="es-ES" data-description="Spain">Spanish</option>
                          <option value="es-MX" data-description="Mexico">Spanish</option>
                          <option value="es-US" data-description="United States">Spanish</option>
                          <option value="es" data-description="Castilian">Spanish</option>
                          <option value="fi-FI" data-description="Finland">Finnish</option>
                          <option value="fr" data-description="">French</option>
                          <option value="fr-CA" data-description="Canada">French</option>
                          <option value="fr-FR" data-description="France">French</option>
                          <option value="it" data-description="">Italian</option>
                          <option value="it-IT" data-description="Italy">Italian</option>
                          <option value="ja-JP" data-description="Japan">Japanese</option>
                          <option value="ko-KR" data-description="Korea">Korean</option>
                          <option value="nb-NO" data-description="Norway">Norwegian</option>
                          <option value="nl-NL" data-description="Netherlands">Dutch</option>
                          <option value="pl-PL" data-description="Poland">Polish</option>
                          <option value="pt" data-description="">Portuguese</option>
                          <option value="pt-BR" data-description="Brazil">Portuguese</option>
                          <option value="pt-PT" data-description="Portugal">Portuguese</option>
                          <option value="ru-RU" data-description="Russia">Russian</option>
                          <option value="sv-SE" data-description="Sweden">Swedish</option>
                          <option value="zh-CN" data-description="PRC">Chinese</option>
                          <option value="zh-HK" data-description="Hong Kong">Chinese</option>
                          <option value="zh-TW" data-description="Taiwan">Chinese</option>
                          <option value="cy" data-description="">Welsh</option>
                          <option value="dtmf">Digits &amp; Waits (DTMF)</option>
                        </select>
                        <div className="select2-container"
                             style={{maxWidth: '42%', whiteSpace: 'nowrap', verticalAlign: 'top'}}>
                          <a href="#" className="select2-choice">
                            <span className="select2-chosen">Awesome Alice</span>
                            <abbr className="select2-search-choice-close"/>
                            <span className="select2-arrow"><b/></span>
                          </a>
                          <label className="select2-offscreen"/>
                          <input className="select2-focusser select2-offscreen" type="text"/>
                          <div className="select2-drop select2-display-none select2-with-searchbox wider">
                            <div className="select2-search">
                              <label className="select2-offscreen"/>
                              <input type="text" className="select2-input"/>
                            </div>
                            </div>
                          </div>
                        <select name="voice" style={{
                          maxWidth: '42%',
                          whiteSpace: 'nowrap',
                          verticalAlign: 'top',
                          display: 'none'
                        }}>
                          <option value="alice">Awesome Alice</option>
                          <option value="Joanna">Joanna</option>
                          <option value="Salli">Salli</option>
                          <option value="Kimberly">Kimberly</option>
                          <option value="Kendra">Kendra</option>
                          <option value="Justin">Justin</option>
                          <option value="Joey">Joey</option>
                          <option value="Ivy">Ivy</option>
                        </select>
                        <span className="hint dtmfnotes" style={{display: 'none', margin: 2}}>
                          Play DTMF tones. Valid characters are 0-9 and w, where each w is a 0.5s wait/pause.
                        </span>
                      </span>
              </div>
              <div className="audio-player" style={{display: 'none'}}>
                <span className="audio-name">
                  <span className="say_upload_file">...</span>
                  <div className="btn-group">
                    <a className="dropdown-toggle" data-toggle="dropdown" style={{margin: 0}}>
                      <i className="font-caret-down"/>
                    </a>
                    <ul className="dropdown-menu">
                      <li><a data-action="rename"><i className="font-pencil"/> Rename</a></li>
                      <li><a data-action="download"><i className="font-download"/> Download</a></li>
                    </ul>
                  </div>
                </span>
                <audio preload="none"/>
              </div>
              {/*<iframe className="playback-frame"*/}
              {/*style="width:1px;height:1px;visibility:hidden;border:0;position:absolute"*/}
              {/*src="./test_files/say_upload.html"></iframe>*/}
            </div>
            <div className="clear-break"/>
          </div>
          <div className="field checkbox boot-switch">
            <input name="voice_mail[email]" type="hidden" value="0"/>
            <input className="checkbox" data-on-color="success" type="checkbox" value="1"
                   id="voice_mail_email"/>
            <span className="bootstrap-switch-spacer">&nbsp;</span>
            <span className="bootstrap-switch-content">
                          <label>Email</label>
                          <span className="hint">an email with your voicemail will be sent.</span>
                        </span>
            <div className="clear"/>
          </div>
          <div className="field checkbox boot-switch">
            <input type="hidden" value="0"/>
            <input className="checkbox" data-on-color="success" type="checkbox" value="1"
                   id="voice_mail_transcribe"/>
            <span className="bootstrap-switch-spacer">&nbsp;</span>
            <span className="bootstrap-switch-content">
                          <label>Transcribe</label>
                          <span className="hint">a text transcription of your voicemail will be captured</span>
                        </span>
            <div className="clear"/>
          </div>
          <div className="field textfield">
            <label>Seconds to ring before voicemail</label>
            <input type="number" style={{width: 50}}
                   min="10" value="20"
                   className="text string"
                   id="voice_mail_no_answer_seconds"/>
            <cite>&nbsp;seconds</cite>
            <div className="clear-break"/>
          </div>
          <footer>
            <div className="button callout save-button pull-left" data-submit="update_inbound_voicemails">
              <div className="indicator-loop"><i className="save"/></div>
              <span>Save Changes</span></div>
            <div className="clear"/>
          </footer>
        </div>
      </div>
    </form>
  )
};

export default InboundVoicemail;
