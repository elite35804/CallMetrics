import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./screens/Home";
import Accounts from "./screens/Accounts/Accounts";
import UserSettings from "./screens/UserSettings";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <div>
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"} component={Home} name="Home"/>
        <Route exact path={"/accounts_users"} component={Accounts} name="Accounts"/>
        <Route exact path={"/user_settings"} component={UserSettings} name="UserSettings"/>
      </Switch>
    </BrowserRouter>
  </div>,
  document.getElementById("root")
);

serviceWorker.unregister();
