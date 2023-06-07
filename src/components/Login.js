import React from "react";

class Login extends React.Component {
  render() {
    return (
      <div>
        <div className="flex flex-col border border-gray-300 rounded-lg p-5 shadow-2xl mt-32">
          <h3 className="font-bold text-center p-5 text-2xl">{this.props.title}</h3>
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
            <button className="font-bold bg-sky-500 text-white p-1 rounded">
              {this.props.btnname}
            </button>
          </form>
          <p className="text-sm text-center mt-3">
            <a className="text-sky-600">forget password?</a>
          </p>
        </div>
        <p className="text-sm text-center mt-3">
          Don't have account? do <a className="text-sky-600">signup</a>
        </p>

      </div>
    );
  }
}

export default Login;
