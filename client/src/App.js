import React from "react";
import axios from "axios";
import AllInfo from "./components/allInfo";
import UserTable from "./components/userTable";
import BiosTable from "./components/biosTable";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      bios: [],
      all: []
    };
  }

  handleClick = () => {
    // onClick call 3 end points to get data and set state
    axios
      .get("http://localhost:4000/api/all-info")
      .then(res => this.setState({ all: res.data }));
    axios
      .get("http://localhost:4000/api/bios")
      .then(res => this.setState({ bios: res.data }));
    axios
      .get("http://localhost:4000/api/users")
      .then(res => this.setState({ users: res.data }));
  };

  render() {
    return (
      <React.Fragment>
        <p>Press the button for some results</p>

        <button onClick={this.handleClick}>query</button>
        {/* table containing join query */}
        <AllInfo props={this.state.all} />
        {/* table containing user query */}
        <UserTable props={this.state.users} />
        {/* table containing bios query */}
        <BiosTable props={this.state.bios} />
      </React.Fragment>
    );
  }
}
