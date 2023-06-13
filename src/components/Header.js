import React, { useState } from "react";

function Header(props) {
    // useState example 
  const [Welcome, setWelcome] = useState(
    "You can subscribe our channel for new updates and news regrading ReactJS"
    );
    return (
        <div>
        <marquee> {Welcome} <button onClick={()=>setWelcome("Thank You For Subscribe.")} className="text-red-500">Click Here</button></marquee>
      <div className="bg-blue-300">
        <div className="flex justify-between mx-20 py-5">
          <h1 className="font-bold text-3xl flex items-center">
            {/* logo  */}
            <svg
              width="100%"
              height="100%"
              viewBox="-10.5 -9.45 21 18.9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-sm mr-0 w-10 h-10 text-link dark:text-link-dark flex origin-center transition-all ease-in-out"
            >
              <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
              <g stroke="currentColor" strokeWidth="1" fill="none">
                <ellipse rx="10" ry="4.5"></ellipse>
                <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
                <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
              </g>
            </svg>
            {/* logo end  */}
            {props.title}
          </h1>
          <div className="flex items-center">
            <ul className="flex flex-wrap">{props.children}</ul>
          </div>
        </div>
      </div>
    </div>
  );
  //   return React.createElement('div', null , React.createElement('h1', null, "hello world"))
}

export default Header;
