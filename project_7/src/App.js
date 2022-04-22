import React, { useState, useCallback } from "react";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";

import "./App.css";

function App() {
  const [showParagaph, setParagaph] = useState(false);
  const [allowtoggle, setAllowToggle] = useState(false);

  const toggleParagrapHandler = useCallback(() => {
    if (allowtoggle) {
      setParagaph((prevpara) => !prevpara);
    }

    console.log("Refresh!");
  }, [allowtoggle]);

  // recreating above funtion using useCallback funtion on change of allowtoggle

  const allowtoggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagaph}></DemoOutput>
      <Button onClick={toggleParagrapHandler}>Toggle Paragraph!</Button>
      <Button onClick={allowtoggleHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
