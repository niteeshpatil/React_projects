import React from "react";
import Myparagrap from "./Myparagrap";

const DemoOutput = (props) => {
  console.log("Refresh DemoOutput");
  return <Myparagrap>{props.show ? "this is new!" : " "}</Myparagrap>;
};

export default React.memo(DemoOutput);
