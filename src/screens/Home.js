import React, { Component } from "react";
import Header from '../components/header/Header'
import MidleHeader from '../components/midle/MidleHeader'
import Table from "../components/table/Table";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <MidleHeader />
        <Table/>
      </React.Fragment>
    );
  }
}

export default App;
