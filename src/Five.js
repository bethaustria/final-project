import React from "react";
import Search from "./Search";

export default function Five(props) {
  return (
    <div className="five" id="showForecast">
      <div class="forecast">
            {/* <h4>5 Day Weather Forecast</h4> */}
            {/* <div class="five">
                <div class="row">                        
                    <div class="col-2-days">
                        <h5>Sun</h5>                        
                        <p class="icons">
                            <img src="https://img.icons8.com/color/64/000000/partly-cloudy-day.png" />
                        </p>
                        <p class="temp-2"><strong>15°</strong> 11°</p>
                    </div>
                    <div class="col-2-days">
                        <h5>Mon</h5>
                            <p class="icons">
                                <img src="https://img.icons8.com/color/64/000000/rain.png" />
                            </p>
                            <p class="temp-2"><strong>12°</strong> 8°</p>
                    </div>
                    <div class="col-2-days">
                        <h5>Tue</h5>
                            <p class="icons">
                                <img src="https://img.icons8.com/color/64/000000/rain.png" />
                            </p>
                            <p class="temp-2"><strong>10°</strong> 5°</p>
                    </div>
                    <div class="col-2-days">
                        <h5>Wed</h5>
                            <p class="icons">
                                <img src="https://img.icons8.com/color/64/000000/rain.png" />
                            </p>
                            <p class="temp-2"><strong>15°</strong> 7°</p>
                    </div>
                    <div class="col-2-days">
                        <h5>Thu</h5>
                            <p class="icons">
                                <img src="https://img.icons8.com/color/64/000000/partly-cloudy-day.png" />
                            </p>
                            <p class="temp-2"><strong>11°</strong> 7°</p>
                    </div>
                </div>
            </div>      */}
        </div>
      <Search />
    </div>
  );
}
