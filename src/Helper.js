import axios from 'axios';
    
  export function UpdateTemp(city) {
    let urlKey = "fbcbff47d196b60aa06eb680dd916472";
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${urlKey}&units=${unit}`;
    axios.get(apiUrl).then(displayData);
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
