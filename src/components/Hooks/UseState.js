import React, { useState } from "react";
import UseEffect from "./UseEffect";

function UseState() {
  const [state, setState] = useState(0);
  const [name, setName] = useState([
    {
      FirstName: "Yash",
      LastName: "Prajapati",
    },
  ]);

  const fnameRef = React.createRef();
  const lnameRef = React.createRef();

  function updateHandler() {
    console.log("Updating")
    setState(state + 1);

  }

  const updateNameHandler = () => {
    console.log(fnameRef.current.value);
    console.log(lnameRef.current.value);
    setName((prevValue) => [
      ...prevValue,
      {
        FirstName: fnameRef.current.value,
        LastName: lnameRef.current.value,
      },
    ]);
  };
  const usersList = name.map((user, index) => (
    <li key={index}>
      {user.FirstName} {user.LastName}
    </li>
  ));

  return (
    <div>
      {console.log(name)}
      UseState state : {state}
      <button
        onClick={updateHandler}
        className="bg-sky-500 p-1 rounded text-white"
      >
        Update
      </button>
      <div>
        Name :
        <input
          className="border"
          type="text"
          name="fname"
          ref={fnameRef}
        ></input>
        <input
          className="border"
          type="text"
          name="lname"
          ref={lnameRef}
        ></input>
        <button
          onClick={updateNameHandler}
          className="bg-sky-500 p-1 rounded text-white"
        >
          Update
        </button>
        {usersList}
      </div>
    { state < 10 && <UseEffect />}

    </div>
  );
}

export default UseState;
