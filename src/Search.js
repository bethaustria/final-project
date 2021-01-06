import React, { useState } from "react";
import { UpdateTemp } from "./Helper"

export default function Search(props) {
  let [city, setCity] = useState(" ");

  function handleSubmit(event) {
    event.preventDefault();
    let h1 = document.querySelector("h1");
    h1.innerHTML = city;
    UpdateTemp(city);
  }

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
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
