import React, { useState } from "react";
import Humidity from "./Humidity";

export default function Weather(props) {
  let [temperature, setTemperature] = useState(null);
  const [convertUnit, setUnit] = useState("celsius");
  let temp;
  
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (temp = document.querySelector("#temperature")) {
    temperature = parseInt(temp.innerText);  
  }

  console.log("Converting to " + convertUnit + " with " + temperature + " into " + (Math.round(temperature * 9 / 5) + 32));
  if (convertUnit === 'celsius') {
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
              { Math.round((temperature - 32) * 5/9) }
            </p>
            <span className="units">              
                °C
              {" "}
                | <a href="/#" onClick={showFahrenheit} className="active">°F</a>         
            </span>
          <Humidity />
          </div>
         </div>
       </div>
    );
  } else {
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
              { Math.round(temperature * 9/5) + 32 }
            </p>
            <span className="units">
              <a href="/#" onClick={showCelsius} className="active">
                °C
              </a>{" "}
                | °F            
            </span>
          <Humidity />
          </div>
         </div>
       </div>
    );

  }

}
