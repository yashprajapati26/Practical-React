import React, { Component } from "react";

export default class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "yash",
    };
    console.log("name: " + this.state.name);
  }
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps :");
    return null;
  }
  componentDidMount() {
    console.log("componentDidMount :");
  }
  render() {
    return <div>LifeCycle</div>;
  }
}
