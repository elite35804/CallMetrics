import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./screens/Home";
import Accounts from "./screens/Accounts";
import Header from './components/header/Header'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <div>
    <Header/>
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"} component={Home} name="Home"/>
        <Route exact path={"/accounts_users"} component={Accounts} name="Accounts"/>
      </Switch>
    </BrowserRouter>
  </div>,
  document.getElementById("root")
);

serviceWorker.unregister();
