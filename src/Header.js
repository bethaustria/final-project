import React from "react";
import Weather from "./Weather";

export default function Header(props) {
  return (
    <div className="header">
      <h1>MONTREAL</h1>
      <h3>Saturday, December 26 2020</h3>
      <p className="hour" id="time">
        19:00
      </p>

      <Weather city="Montreal" />
    </div>
  );
}

