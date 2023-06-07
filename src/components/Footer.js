import React, { Component } from "react";
import Conditional from "./Conditional";

export default class Footer extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome Visitor",
      btnName: "subscribe",
      count: 0,
    };
  }

  changeMessage(message) {
    this.setState({ message: message, btnName: "un-subscribe" });
    this.increment();
  }

  increment() {
    // this.state.count = this.state.count + 1
    // without prevState
    // this.setState({ count: this.state.count + 1 }, () => {
    //   console.log("callback val : ",this.state.count);
    // });

    //use prevState
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
    console.log(this.state.count);
  }

  incrementFive() {
    // this.state.count = this.state.count + 1
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    console.log(this.state.count);
  }

  render() {
    return (
      <div>
        <div className="bottom-0">
          <hr></hr>
          state change example :
          <h1 className="font-bold">{this.state.message}</h1>
          <button
            onClick={() => this.changeMessage("Thank You For Subscribe")}
            className="bg-gray-300 border border-gray-800 p-1"
          >
            {this.state.btnName}
          </button>
          <hr></hr>
          prevState change example :<p>Click button {this.state.count}</p>
          <hr></hr>
          method as props example : (OUTPUT IN CONSOLE)
          {/* function use from props */}
          <button
            onClick={() => this.props.clickHandler("yash")}
            className="bg-gray-300 p-1 border border-black"
          >
            MyFunBtn
          </button>
          <br></br><hr></hr>
          <Conditional></Conditional>
        </div>
      </div>
    );
  }
}
