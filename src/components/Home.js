import React from "react";
import LifeCycle from "./LifeCycle";
import ProductList from "./ProductList";
function Home() {
  // intilize ref
  let inputRef = React.createRef();

  function clickHandler() {
    console.log("clickHandler called");
  }

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
        <button
          className="bg-gray-300"
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
