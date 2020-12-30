import React, { useState } from "react";
import axios from "axios";
import Humidity from "./Humidity";

export default function Weather(props) {
  let [temperature, setTemperature] = useState(null);

  function displayTemp(response) {
    setTemperature(response.data.main.temp);
  }

  let urlKey = "fbcbff47d196b60aa06eb680dd916472";
  let unit = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${urlKey}&units=${unit}`;
  axios.get(apiUrl).then(displayTemp);

  return (
    <div className="row">
      <div className="col-2 offset-4">
        <div className="temp">
          <img
            id="icon"
            src="https://img.icons8.com/color/64/000000/sun.png"
            alt="weather icon"
          />
          <p id="temperature" className="mainTemp">
            {Math.round(temperature)}
          </p>
          <span className="units">
            <a href="/#" className="active">
              °C
            </a>{" "}
            |
            <a href="/#" id="fahrenheit">
              °F
            </a>
          </span>
        </div>
      </div>
      <Humidity />
    </div>
  );
}
