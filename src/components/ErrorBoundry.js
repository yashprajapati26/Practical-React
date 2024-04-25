import React, { Component } from "react";

export default class ErrorBoundry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong</h1>;
    } else {
      return (
        <div className="text-center text-3xl font-bold">
          Hero Name is {this.props.children}
        </div>
      );
    }
  }
}
