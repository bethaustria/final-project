import React from "react";
import Weather from "./Weather";

export default function Header(props) {

  return (
    <div className="header">
      <h1>MONTREAL</h1>
      <h3 id="date"></h3>
      <p className="hour" id="time"></p>

      <Weather />
    </div>
  );
}

