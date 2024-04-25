import { render } from "@testing-library/react";
import React from "react";
import { useState } from "react";

const HocComp = (WrappedComponent) => {
  // Define a new component
  const EnhancedComponent = (props) => {
    // Transform prop values to uppercase
    const [counter, setCounter] = useState(0);

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

export default HocComp;
