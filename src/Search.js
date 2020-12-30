import React, { useState } from "react";
import axios from 'axios';

export default function Search(props) {
  let [city, setCity] = useState(" ");

  function displayData(response) {
    let temperature = document.querySelector("#temperature");
    let description = document.querySelector("#description");
    let humidity = document.querySelector("#humidity");
    let wind = document.querySelector("#wind");
    let icon = document.querySelector("#icon");
    temperature.innerHTML = `${Math.round(response.data.main.temp)}`;
    description.innerHTML = ` ${response.data.weather[0].description}`;
    humidity.innerHTML = ` ${Math.round(response.data.main.humidity)}%`;
    wind.innerHTML = ` ${Math.round(response.data.wind.speed)} km/h`;
    icon.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    let h1 = document.querySelector("h1");
    h1.innerHTML = city;
    updateTemp(city);
  }

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function updateTemp(city) {
    let urlKey = "fbcbff47d196b60aa06eb680dd916472";
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${urlKey}&units=${unit}`;
    axios.get(apiUrl).then(displayData);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-row align-items-center">
          <div className="col-auto offset-4">
            <input
              type="search"
              className="form-control mb-2"
              placeholder="Enter a city"
              onChange={updateCity}
            />
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-primary mb-2">
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
