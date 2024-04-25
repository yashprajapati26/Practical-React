import React, { Component } from "react";

export default class LifeCycle extends Component {
  //1
  constructor(props) {
    super(props);
    this.state = {
      name: "yash",
    };
    console.log("constructor");
  }
  //2
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps :");
    return null;
  }

  //3
  componentDidMount() {
    console.log("componentDidMount :");
  }

  //4
  render() {
    return (
      <div className="text-center">
        <h1 className="text-3xl">React LifeCycle Demo </h1>
        <h3>open console to see output</h3>
        {console.log("render :")}
      </div>
    );
  }
}
