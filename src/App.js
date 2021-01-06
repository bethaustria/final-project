import React from "react";
import Background from "./Background";
import Forecast from "./Forecast";
import Code from "./Code";
import { UpdateTemp } from "./Helper"

import "./App.css";

export default function App() {

  UpdateTemp("Montreal");
  
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

