import React from 'react';
import {Switch, Route, Router, BrowserRouter} from 'react-router-dom';
import {createBrowserHistory} from 'history'
import Home from './screens/Home';
import Header from './components/header/Header';
import './App.css';

const history = createBrowserHistory();
function App() {
  return (
    <div>
      <Header/>
      <BrowserRouter history={history}>
        <Switch>
          <Route exact path="/" key="home" name="Home" render={Home}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
