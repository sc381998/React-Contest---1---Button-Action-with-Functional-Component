import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const [para, setPara] = useState({
    id: "",
    text: ""
  });
  function handleClick() {
    setPara({
      id: "para",
      text:
        "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
    });
  }
  return (
    <div id="main">
      <button id="click" onClick={handleClick}>
        click
      </button>
      {para.id && <p id={para.id}>{para.text}</p>}
    </div>
  );
}

export default App;
