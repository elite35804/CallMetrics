import React, { Component } from "react";
import MidleHeader from '../components/midle/MidleHeader'
import Table from "../components/table/Table";

class Home extends Component {
  render() {
    return (
      <div>
        <MidleHeader />
        <Table/>
      </div>
    );
  }
}

export default Home;
