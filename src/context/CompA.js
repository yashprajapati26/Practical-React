import React, { Component } from "react";
import CompB from "./CompB";

class CompA extends Component {
  render() {
    return (
      <div className="text-center font-semibold p-5">
        <CompB />
      </div>
    );
  }
}

export default CompA;
