import React, { useState } from "react";

function Conditional() {
  const [isLogin, setisLogin] = useState(false);
    
    // if-else approch
    if (isLogin) {
      return (
        <div>
          <h1>Conditional Example : </h1>
          <div>
            <p>Welcome, Yash Prajapati</p><button onClick={()=>setisLogin(true)}className="bg-gray-400 p-1 border border-t-black">Login</button>
          </div>
        </div>
      );
    }else{
      return (
          <div>
            <h1>Conditional Example : </h1>
            <div>
              <p>Welcome, Guest</p><button onClick={()=>setisLogin(true)}className="bg-gray-400 p-1 border border-t-black">Login</button>
            </div>
          </div>
        );
    }

  // variable approch
  //   let message;
  //   if (isLogin) {
  //     message = <p>Welcome, Yash Prajapati</p>;
  //   } else {
  //     message = <p>Welcome, Guest</p>;
  //   }
  //   return (
  //     <div>
  //       <h1>Conditional Example : {isLogin} -</h1>
  //       <div>{message}</div>
  //     </div>
  //   );

  //Ternary operater
  //   return isLogin ? (
  //     <div>
  //       <h1>Conditional Example : {isLogin} -</h1>
  //       <div>Welcome, Yash Prajapati</div>
  //     </div>
  //   ) : (
  //     <div>
  //       <h1>Conditional Example : {isLogin} -</h1>
  //       <div>Welcome, Guest</div>
  //     </div>
  //   );
}

export default Conditional;
