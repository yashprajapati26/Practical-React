import React from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";

function Subscribe() {
  const navigate = useNavigate();

  const close = () => {
    navigate("/");
  };

  return ReactDOM.createPortal(
    <div className="flex flex-col justify-center items-center w-fit border border-gray-400 rounded-xl bg-gray-400 p-5 shadow-md shadow-gray-500">
      <h1 className="pt-3 text-4xl font-bold">Subscribe Us !</h1>
      <p className="pb-3 font-light text-sm">
        Enter your email address and subscribe our channel
      </p>
      <input
        type="text"
        className="p-1 border shadow-md shadow-gray-500 rounded-lg"
        placeholder="Email Address"
      ></input>
      <button
        className="p-1 px-2 bg-blue-500 text-white font-bold rounded-lg m-3"
        onClick={close}
      >
        submit
      </button>
    </div>,
    document.getElementById("portal-root")
  );
}

export default Subscribe;
