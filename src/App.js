import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/torianykhanna"
            target="_blank"
            rel="noreferrer"
          >
            Hanna Torianyk
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/torianykhanna/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          {/* <a href="#" target="_blank" rel="noreferrer">
            hosted on Netlify
          </a> */}
        </footer>
      </div>
    </div>
  );
}
