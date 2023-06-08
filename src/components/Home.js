import React, { useState } from "react";
import ProductList from "./ProductList";
import LifeCycle from "./LifeCycle";
function Home() {
  function clickHandler() {
    console.log("clickHandler called");
  }
  let inputRef = React.createRef();
  return (
    <div>
      <div>
        <button
          onClick={clickHandler}
          className="bg-gray-300 p-2 border border-black"
        >
          Click
        </button>
        <ProductList />

        <p className="bg-gray-300">Add Product : </p>
        <input type="text" className="border" ref={inputRef}></input>
        <button className="bg-gray-300"
          onClick={() => {
            alert(inputRef.current.value);
          }}
        >
          Submit
        </button>

        <LifeCycle></LifeCycle>
      </div>
    </div>
  );
}

export default Home;
