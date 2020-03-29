import React, { Component } from "react";
import MidleHeader from '../components/midle/MidleHeader'
import Table from "../components/table/Table";
import Header from "../components/header/Header";

class Home extends Component {
  render() {
    return (
      <div>
        <Header>
          <MidleHeader />
        </Header>
        <Table/>
      </div>
    );
  }
}

export default Home;
