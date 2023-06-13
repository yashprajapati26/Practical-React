import React, { Component } from "react";
import { Link } from "react-router-dom";


class SignUp extends Component {
  render() {
    return (
      <div className="flex flex-col h-screen justify-center items-center -mt-20">
        <div className="border border-gray-300 rounded-lg p-5 shadow-2xl w-auto">
          <h1 className="text-center font-bold text-2xl my-5">SignUp</h1>
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
            <button className="bg-sky-500 text-white text-sm p-1.5 rounded">
              Sign up
            </button>
          </form>
        </div>
        <p className="text-sm text-center mt-3">
          Already have an account? Do
          <Link className="text-sky-600" to="/login">
            Login
          </Link>
        </p>
      </div>
    );
  }
}

export default SignUp;
