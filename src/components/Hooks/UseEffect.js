import React, { useState, useEffect } from "react";

function UseEffect() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("useEfeect - update title");
    document.title = `you clicked ${count} times`;

    return () => {
      console.log("unmount effect");
      document.title = `Welcome To React`;
    };
  }, [count]); 

  return (
    <>
      <div>UseEffect</div>
      <input
        className="border"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-sky-500 p-1 text-white"
      >
        update
      </button>
    </>
  );
}

export default UseEffect;
