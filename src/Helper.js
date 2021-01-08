import axios from 'axios';
    
  export function UpdateTemp(city) {
    let urlKey = "fbcbff47d196b60aa06eb680dd916472";
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${urlKey}&units=${unit}`;
    axios.get(apiUrl).then(displayData);

    apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${urlKey}&units=metric`;
    axios.get(apiUrl).then(displayForecast);
  }

  function displayData(response) {
    let temperature = document.querySelector("#temperature");
    let description = document.querySelector("#description");
    let humidity = document.querySelector("#humidity");
    let wind = document.querySelector("#wind");
    let icon = document.querySelector("#icon");
    let date = document.querySelector("#date");

    temperature.innerHTML = `${Math.round(response.data.main.temp)}`;
    description.innerHTML = ` ${response.data.weather[0].description}`;
    humidity.innerHTML = ` ${Math.round(response.data.main.humidity)}%`;
    wind.innerHTML = ` ${Math.round(response.data.wind.speed)} km/h`;
    date.innerHTML = formatDate(response.data.dt, response.data.timezone);
    icon.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  function formatDate(dt, timezone) { 
    
    let now = new Date(dt * 1000 + (timezone * 1000));
    let date = now.getDate();
    let year = now.getFullYear();

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let day = days[now.getDay()];

    let months = [
      "January",
      "Febuary",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    let month = months[now.getMonth()];

    return `${day}, ${month} ${date} ${year}`;
  }

function displayForecast(response) {
  let forecastElement = document.querySelector("#showForecast");
  forecastElement.innerHTML = null;
  let forecast = null;

  for (let index = 0; index < 5; index++) {
    let forecast = response.data.list[index];
    forecastElement.innerHTML += `
      <div class="col-2-days">
        <h5>
          ${formatHours(forecast.dt * 1000)}
       </h5>                        
        <p class="icons">
          <img src="http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png" />
        </p>
        <p class="temp-2">
          <strong>${Math.round(forecast.main.temp_max)}°</strong> 
          &nbsp ${Math.round(forecast.main.temp_min)}°
        </p>
      </div>`; 
  }
}

function formatHours(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
    return `${hours}:${minutes}`;
}
