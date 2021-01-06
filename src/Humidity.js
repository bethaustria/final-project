import React from "react";

export default function Humidity(props) {
  
  return (
    <ul className="col-2">
      <li id="description">Sunny</li>
      <li>
        Humidity:
        <span id="humidity"> 0%</span>
      </li>
      <li>
        Wind:
        <span id="wind"> 5 km/h</span>
      </li>
    </ul>
  );
}
