import React, { Component } from "react";
import { UserConsumer } from "./userContext";

class CompC extends Component {
  render() {
    return (
      <UserConsumer>
        {(username) => {
          return <div>Hello {username}</div>;
        }}
      </UserConsumer>
    );
  }
}

export default CompC;
