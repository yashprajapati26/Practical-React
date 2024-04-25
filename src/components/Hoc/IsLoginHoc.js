import { render } from "@testing-library/react";
import React from "react";
import { useState } from "react";

const isLoggedIn = (WrappedComponent) => {
  // Define a new component
  const EnhancedComponent = (props) => {
    // Transform prop values to uppercase
    const [isLogin, setIsLogin] = useState(false);

    const checkIsLogin = () => {
      //check with credential is login or not
      setIsLogin(true);
    };

    const transformedProps = {
      ...props,
      counter: counter,
      setCounter: setCounter,
    };

    // Render the wrapped component with transformed props
    return (
      <>
        <WrappedComponent {...transformedProps} />
      </>
    );
  };

  // Return the new component
  return EnhancedComponent;
};

export default isLoggedIn;
