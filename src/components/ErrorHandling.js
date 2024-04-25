import React from "react";

function ErrorHandling({ heroName }) {
  if (
    heroName === "Joker" ||
    heroName === "Gabbar Singh" ||
    heroName === "Mongambo"
  ) {
    throw new Error("Not a hero !");
  }
  return <div>{heroName}</div>;
}

export default ErrorHandling;
