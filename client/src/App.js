import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [name, setName] = useState("JY");

  const changeName = () => {
    fetch("/sendName", {
      method: "post",
      body: {
        name: "SNED TO BACKEND",
      },
    })
      .then((d) => {
        return d.text();
      })
      .then((d) => {
        alert(d);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {name}
        </a>
        <button onClick={changeName}> LCICK</button>
      </header>
    </div>
  );
}

export default App;
