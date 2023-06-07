import PropTypes from "prop-types";
import React, { Component } from "react";

class SignUp extends Component {
  static propTypes = { second: third };

  render() {
    return ( 
    <div>
        <h1 className="text-center font-bold">SignUp</h1>
        <form method="post" action="" className="flex flex-col">
            <input
              type="text"
              name="username"
              placeholder="Username or Email"
              className="mb-2 p-1 border border-gray-500 rounded"
            />
            <input
              type="text"
              name="password"
              placeholder="password"
              className="mb-2 p-1 border border-gray-500 rounded"
            />
             <input
              type="text"
              name="cpassword"
              placeholder="confirm password"
              className="mb-2 p-1 border border-gray-500 rounded"
            />
            <button className="bg-sky-500 text-white text-sm p-1 rounded">
              Sign up
            </button>
          </form>
    </div>
    );
  }
}
export default SignUp;
