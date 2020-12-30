import React from "react";
import axios from "axios";

export default function Humidity(props) {
  function showDetails(response) {
    let description = document.querySelector("#description");
    let humidity = document.querySelector("#humidity");
    let wind = document.querySelector("#wind");
    let icon = document.querySelector("#icon");
    description.innerHTML = ` ${response.data.weather[0].description}`;
    humidity.innerHTML = ` ${Math.round(response.data.main.humidity)}%`;
    wind.innerHTML = ` ${Math.round(response.data.wind.speed)} km/h`;
    icon.setAttribute(
      "src",
      `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  let key = "fbcbff47d196b60aa06eb680dd916472";
  let unit = "metric";
  let api = `https://api.openweathermap.org/data/2.5/weather?q=Montreal&appid=${key}&units=${unit}`;

  axios.get(api).then(showDetails);

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
