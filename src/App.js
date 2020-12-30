import React from "react";
import Background from "./Background";
import Forecast from "./Forecast";
import Code from "./Code";

import "./App.css";

export default function App() {
  return (
    <div>
      <div className="background">
        <Background />
        <Forecast />
      </div>
        <Code />
      </div>
  );
}

