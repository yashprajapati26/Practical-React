import React , {useState} from "react";

function Home() {
  function clickHandler() {
    console.log("clickHandler called");
  }

  return (
    <div>
      <div>
        {}
        <button
          onClick={clickHandler}
          className="bg-gray-300 p-2 border border-black"
        >
          Click
        </button>
      </div>
    </div>
  );
}

export default Home;
