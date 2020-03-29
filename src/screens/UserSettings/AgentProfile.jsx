import React, {useState} from "react";
import './index.css';

const AgentProfile = props => {
  return (
    <div id="user-agent-profile" className="field">
      <h3>Agent Profile
        <small>a profile picture displayed with the user as well as associations to external services such as
          Salesforce and Stripe</small>
      </h3>
      <div className="card">
        <div className="row field">
          <label><span>Profile Picture</span></label>
          <div className="col-xs-12 col-sm-3 col-md-2 pull-right"
               style={{textAlign: 'center', marginBottom: 10}}/>
          <div className="col-sm-9 col-md-10" style={{paddingTop: 10}}>
            <div className="row">
              <form noValidate="novalidate" className="edit_user" id="edit_user_323147">
                <div className="field" style={{marginBottom: 0}}>
                  <input accept="image/jpeg,image/png,image/gif" type="file" id="user_picture"/>
                </div>
                <span className="hint">Image dimensions: (80x80), max size: (1 MB)</span>
                <br/><br/>
                <input type="submit" className="button outlined" value="Upload Photo"/>
              </form>
              <div className="clear"/>
            </div>
          </div>
        </div>
        <form id="update_default_country" className="edit_user">
          <div className="field textfield">
            <label htmlFor="user_default_country">Default country</label>
            <div className="select2-container country country-picker"
                 id="s2id_user_default_country" style={{maxWidth: '100%', width: 300}}>
              <a href="#" className="select2-choice">
                <span className="select2-chosen">
                  <i data-prefix="1" data-code="US" className="country US"><i className="i"/> Default (US +1)
                    <small>United States</small></i>
                </span>
                <abbr className="select2-search-choice-close"/>
                <span className="select2-arrow"><b/></span>
              </a>
              <label className="select2-offscreen">Default country</label>
              <input className="select2-focusser select2-offscreen" type="text"/>
              <div className="select2-drop select2-display-none select2-with-searchbox">
                <div className="select2-search">
                  <label className="select2-offscreen">Default country</label>
                  <input type="text" className="select2-input"/>
                </div>
                <ul className="select2-results" role="listbox" id="select2-results-682688940"/>
              </div>
            </div>
            <select className="country country-picker" style={{maxWidth: '100%', width: 300, display: "none"}}
                    id="user_default_country" title="Default country">
              <option value="">Default (US +1)</option>
              <option value="US">US +1</option>
              <option value="CA">CA +1</option>
              <option value="GB">GB +44</option>
              <option value="AF">AF +93</option>
              <option value="AL">AL +355</option>
              <option value="DZ">DZ +213</option>
              <option value="AS">AS +1</option>
              <option value="AD">AD +376</option>
              <option value="AO">AO +244</option>
              <option value="AI">AI +1</option>
              <option value="AG">AG +1</option>
              <option value="AR">AR +54</option>
              <option value="AM">AM +374</option>
              <option value="AW">AW +297</option>
              <option value="AC">AC +247</option>
              <option value="AU">AU +61</option>
              <option value="AT">AT +43</option>
              <option value="AZ">AZ +994</option>
              <option value="BS">BS +1</option>
              <option value="BH">BH +973</option>
              <option value="BD">BD +880</option>
              <option value="BB">BB +1</option>
              <option value="BY">BY +375</option>
              <option value="BE">BE +32</option>
              <option value="BZ">BZ +501</option>
              <option value="BJ">BJ +229</option>
              <option value="BM">BM +1</option>
              <option value="BT">BT +975</option>
              <option value="BO">BO +591</option>
              <option value="BA">BA +387</option>
              <option value="BW">BW +267</option>
              <option value="BR">BR +55</option>
              <option value="BN">BN +673</option>
              <option value="BG">BG +359</option>
              <option value="BF">BF +226</option>
              <option value="BI">BI +257</option>
              <option value="KH">KH +855</option>
              <option value="CM">CM +237</option>
              <option value="CV">CV +238</option>
              <option value="KY">KY +1</option>
              <option value="CF">CF +236</option>
              <option value="TD">TD +235</option>
              <option value="CL">CL +56</option>
              <option value="CN">CN +86</option>
              <option value="CO">CO +57</option>
              <option value="KM">KM +269</option>
              <option value="CG">CG +242</option>
              <option value="CD">CD +243</option>
              <option value="CR">CR +506</option>
              <option value="HR">HR +385</option>
              <option value="CU">CU +53</option>
              <option value="CY">CY +357</option>
              <option value="CZ">CZ +420</option>
              <option value="DK">DK +45</option>
              <option value="DJ">DJ +253</option>
              <option value="DM">DM +1</option>
              <option value="DO">DO +1</option>
              <option value="TL">TL +670</option>
              <option value="EC">EC +593</option>
              <option value="EG">EG +20</option>
              <option value="SV">SV +503</option>
              <option value="GQ">GQ +240</option>
              <option value="ER">ER +291</option>
              <option value="EE">EE +372</option>
              <option value="ET">ET +251</option>
              <option value="FO">FO +298</option>
              <option value="FJ">FJ +679</option>
              <option value="FI">FI +358</option>
              <option value="FR">FR +33</option>
              <option value="GF">GF +594</option>
              <option value="PF">PF +689</option>
              <option value="GA">GA +241</option>
              <option value="GM">GM +220</option>
              <option value="GE">GE +995</option>
              <option value="DE">DE +49</option>
              <option value="GH">GH +233</option>
              <option value="GI">GI +350</option>
              <option value="GR">GR +30</option>
              <option value="GL">GL +299</option>
              <option value="GD">GD +1</option>
              <option value="GP">GP +590</option>
              <option value="GU">GU +1</option>
              <option value="GT">GT +502</option>
              <option value="GN">GN +224</option>
              <option value="GW">GW +245</option>
              <option value="GY">GY +592</option>
              <option value="HT">HT +509</option>
              <option value="HN">HN +504</option>
              <option value="HK">HK +852</option>
              <option value="HU">HU +36</option>
              <option value="IS">IS +354</option>
              <option value="IN">IN +91</option>
              <option value="ID">ID +62</option>
              <option value="IR">IR +98</option>
              <option value="IQ">IQ +964</option>
              <option value="IE">IE +353</option>
              <option value="IL">IL +972</option>
              <option value="IT">IT +39</option>
              <option value="CI">CI +225</option>
              <option value="JM">JM +1</option>
              <option value="JP">JP +81</option>
              <option value="JO">JO +962</option>
              <option value="KZ">KZ +7</option>
              <option value="KE">KE +254</option>
              <option value="KP">KP +850</option>
              <option value="KW">KW +965</option>
              <option value="KG">KG +996</option>
              <option value="LA">LA +856</option>
              <option value="LV">LV +371</option>
              <option value="LB">LB +961</option>
              <option value="LS">LS +266</option>
              <option value="LR">LR +231</option>
              <option value="LY">LY +218</option>
              <option value="LI">LI +423</option>
              <option value="LT">LT +370</option>
              <option value="LU">LU +352</option>
              <option value="MO">MO +853</option>
              <option value="MK">MK +389</option>
              <option value="MG">MG +261</option>
              <option value="MW">MW +265</option>
              <option value="MY">MY +60</option>
              <option value="MV">MV +960</option>
              <option value="ML">ML +223</option>
              <option value="MT">MT +356</option>
              <option value="MH">MH +692</option>
              <option value="MQ">MQ +596</option>
              <option value="MR">MR +222</option>
              <option value="MU">MU +230</option>
              <option value="MX">MX +52</option>
              <option value="FM">FM +691</option>
              <option value="MD">MD +498</option>
              <option value="MC">MC +377</option>
              <option value="MN">MN +976</option>
              <option value="ME">ME +382</option>
              <option value="MS">MS +1</option>
              <option value="MA">MA +212</option>
              <option value="MZ">MZ +258</option>
              <option value="MM">MM +95</option>
              <option value="NA">NA +264</option>
              <option value="NP">NP +977</option>
              <option value="NL">NL +31</option>
              <option value="AN">AN +599</option>
              <option value="NC">NC +687</option>
              <option value="NZ">NZ +64</option>
              <option value="NI">NI +505</option>
              <option value="NE">NE +227</option>
              <option value="NG">NG +234</option>
              <option value="MP">MP +1</option>
              <option value="NO">NO +47</option>
              <option value="OM">OM +968</option>
              <option value="PK">PK +92</option>
              <option value="PW">PW +680</option>
              <option value="PS">PS +970</option>
              <option value="PA">PA +507</option>
              <option value="PG">PG +675</option>
              <option value="PY">PY +595</option>
              <option value="PE">PE +51</option>
              <option value="PH">PH +63</option>
              <option value="PL">PL +48</option>
              <option value="PT">PT +351</option>
              <option value="PR">PR +1</option>
              <option value="QA">QA +974</option>
              <option value="RE">RE +262</option>
              <option value="RO">RO +40</option>
              <option value="RU">RU +7</option>
              <option value="RW">RW +250</option>
              <option value="WS">WS +685</option>
              <option value="SM">SM +378</option>
              <option value="SA">SA +966</option>
              <option value="SN">SN +221</option>
              <option value="RS">RS +381</option>
              <option value="SC">SC +248</option>
              <option value="SL">SL +232</option>
              <option value="SG">SG +65</option>
              <option value="SX">SX +1</option>
              <option value="sip">sip +sip</option>
              <option value="SK">SK +421</option>
              <option value="SI">SI +386</option>
              <option value="SB">SB +677</option>
              <option value="SO">SO +252</option>
              <option value="ZA">ZA +27</option>
              <option value="KR">KR +82</option>
              <option value="SS">SS +211</option>
              <option value="ES">ES +34</option>
              <option value="LK">LK +94</option>
              <option value="KN">KN +1</option>
              <option value="LC">LC +1</option>
              <option value="PM">PM +508</option>
              <option value="VC">VC +1</option>
              <option value="SD">SD +249</option>
              <option value="SR">SR +597</option>
              <option value="SZ">SZ +268</option>
              <option value="SE">SE +46</option>
              <option value="CH">CH +41</option>
              <option value="SY">SY +963</option>
              <option value="TW">TW +886</option>
              <option value="TJ">TJ +992</option>
              <option value="TZ">TZ +255</option>
              <option value="TH">TH +66</option>
              <option value="TG">TG +228</option>
              <option value="TO">TO +676</option>
              <option value="TT">TT +1</option>
              <option value="TN">TN +216</option>
              <option value="TR">TR +90</option>
              <option value="TM">TM +993</option>
              <option value="TC">TC +1</option>
              <option value="UG">UG +256</option>
              <option value="UA">UA +380</option>
              <option value="AE">AE +971</option>
              <option value="UY">UY +598</option>
              <option value="UZ">UZ +998</option>
              <option value="VU">VU +678</option>
              <option value="VA">VA +379</option>
              <option value="VE">VE +58</option>
              <option value="VN">VN +84</option>
              <option value="VG">VG +1</option>
              <option value="VI">VI +1</option>
              <option value="YE">YE +967</option>
              <option value="ZM">ZM +260</option>
              <option value="ZW">ZW +263</option>
            </select><span
            className="hint">The default country for phone number inputs</span>
            <div className="clear-break"/>
          </div>
        </form>
        <footer>
          <div className="button callout save-button pull-left" style={{marginRight: 5}}>
            <div className="indicator-loop"><i className="save"/></div>
            <span>Save Changes</span></div>
          <div className="clear"/>
        </footer>
      </div>
    </div>
  );
};

export default AgentProfile;
