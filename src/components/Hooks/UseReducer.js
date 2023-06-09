import React, { useReducer } from "react";
const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
  }
};
function UseReducer() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      UseReducer {count}
      <button
        onClick={() => dispatch("increment")}
        className="bg-red-500 p-1 rounded text-white"
      >
        increment
      </button>
      <button
        onClick={() => dispatch("decrement")}
        className="bg-sky-500 p-1 rounded text-white"
      >
        decrement
      </button>
      <button
        onClick={() => dispatch("reset")}
        className="bg-black p-1 rounded text-white"
      >
        reset
      </button>
    </div>
  );
}

export default UseReducer;
