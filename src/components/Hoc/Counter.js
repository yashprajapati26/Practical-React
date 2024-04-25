import { useState } from "react";

function Counter(props) {
  return (
    <div className="text-center items-center justify-center">
      <h3 className="text-2xl">
        {props.text} - {props.counter}
      </h3>
      <button
        onClick={() => {
          props.setCounter(props.counter + 1);
        }}
        className="p-3 border border-black"
      >
        Update
      </button>
    </div>
  );
}

export default Counter;
