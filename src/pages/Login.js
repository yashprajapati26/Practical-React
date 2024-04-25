import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Login(props) {
  // this is uncontrolled component becouse useRef control by DOM itseld rather than react.
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const [credential, setCredential] = useState({});
  const LoginHandler = async (event) => {
    event.preventDefault();
    setCredential({
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    });
    showAlert();
  };

  const showAlert = () => {
    alert(
      "You are logged with the following credentials - ",
      credential.username
    );
  };

  const handleOnChange = (event) => {
    setCredential({ ...credential, username: event.target.value });
  };

  useEffect(() => {
    const timeoutId = setTimeout(
      () =>
        console.log(
          "Welcome, ",
          props?.renderPropFunction(credential.username)
        ),
      2000
    );
    return () => clearTimeout(timeoutId);
  }, [credential.username]);

  return (
    <div className="flex flex-col h-screen justify-center items-center -mt-20">
      <div className="border border-gray-300 rounded-lg p-5 shadow-2xl w-auto text-center">
        <h3 className="font-bold text-center p-5 text-2xl">{props.title}</h3>
        {credential.username !== "" &&
          props?.renderPropFunction(credential.username)}
        <form onSubmit={LoginHandler} className="flex flex-col">
          <input
            type="text"
            name="username"
            placeholder="Username or Email"
            ref={usernameRef}
            onChange={handleOnChange}
            className="mb-2 p-1 border border-gray-500 rounded"
          />
          <input
            type="text"
            name="password"
            placeholder="password"
            ref={passwordRef}
            className="mb-2 p-1 border border-gray-500 rounded"
          />
          <button
            type="submit"
            className="font-bold bg-sky-500 text-white p-1 rounded"
          >
            {props.btnname}
          </button>
        </form>
        <p className="text-sm text-center mt-3">
          <a className="text-sky-600">forget password?</a>
        </p>
      </div>
      <p className="text-sm text-center mt-3">
        Don't have an account? Do
        <Link className="text-sky-600" to="/signup">
          signup
        </Link>
      </p>
    </div>
  );
}

export default Login;
