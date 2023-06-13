import React, { Component } from "react";
import { Link } from "react-router-dom";

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
      <div className="">
        <footer className="shadow bg-blue-400">
          <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
              <a
                href="https://flowbite.com/"
                className="flex items-center mb-4 sm:mb-0"
              >
                <svg
                  width="100%"
                  height="100%"
                  viewBox="-10.5 -9.45 21 18.9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-sm mr-0 w-10 h-10 text-link dark:text-link-dark flex origin-center transition-all ease-in-out"
                >
                  <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
                  <g stroke="currentColor" strokeWidth="1" fill="none">
                    <ellipse rx="10" ry="4.5"></ellipse>
                    <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
                    <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
                  </g>
                </svg>
                <span className="self-center text-2xl font-semibold whitespace-nowraptext-white">
                  {this.props.title}
                </span>
              </a>
              <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0">
                <li>
                  <a href="#" className="mr-4 hover:underline md:mr-6 ">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="mr-4 hover:underline md:mr-6">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="mr-4 hover:underline md:mr-6 ">
                    Licensing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <hr className="my-6 sm:mx-auto border-blue-700 lg:my-8" />
            <div className="flex justify-between">
              <span className="block text-sm sm:text-centertext-blue-400">
                © 2023{" "}
                <a href="https://flowbite.com/" className="hover:underline">
                  React App™
                </a>
                . All Rights Reserved.
              </span>
              <button className="p-1 px-4 font-bold bg-blue-600 text-white rounded-lg">
                <Link to="/subscribe">Subscribe</Link>
              </button>
            </div>
          </div>
        </footer>

        {/* <div className="bottom-0">
          <hr></hr>
          state change example :
          <h1 className="font-bold">{this.state.message}</h1>
          <button
            onClick={() => this.changeMessage("Thank You For Subscribe")}
            className="bg-blue-300 border border-blue-800 p-1"
          >
            {this.state.btnName}
          </button>
          <hr></hr>
          prevState change example :<p>Click button {this.state.count}</p>
          <hr></hr>
          method as props example : (OUTPUT IN CONSOLE)
         
          <button
            onClick={() => this.props.clickHandler("yash")}
            className="bg-blue-300 p-1 border border-black"
          >
            MyFunBtn
          </button>
          <br></br><hr></hr>
          <Conditional></Conditional>
        </div> */}
      </div>
    );
  }
}
