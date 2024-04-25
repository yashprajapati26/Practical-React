import React from "react";
import ReactDOM from "react-dom";
function Portal(props) {
  return ReactDOM.createPortal(
    <div className="App shadow-sm mx-10 border border-black">
      <h1 className="text-xl">Portals Demo {props.title}</h1>
      <h3>
        Hey User, This is portal view, Here we can show popup, or soemthing you
        want
      </h3>
      <p>{props.content}</p>
      <button
        className="bg-blue-500 text-white p-2 rounded"
        onClick={() => props.onClose()}
      >
        close
      </button>
    </div>,
    document.getElementById("portal-root")
  );
}

export default Portal;

// ReactDOM.createPortal(arg 1 , arg 2)
