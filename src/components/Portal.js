import React from "react";
import ReactDOM from "react-dom";
function Portal() {
  return ReactDOM.createPortal(
    <div className="App">
      <h1>Portals Demo</h1>
    </div>,
    document.getElementById('portal-root')
  );
}

export default Portal;


// ReactDOM.createPortal(arg 1 , arg 2)