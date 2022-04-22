import React from "react";

const Myparagrap = (props) => {
  console.log("Myparagrap is also runing!");
  return <p>{props.children}</p>;
};

export default Myparagrap;
