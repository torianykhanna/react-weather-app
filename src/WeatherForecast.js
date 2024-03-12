import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "0a160c794b3a1d67961e42fa506069c5";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="WeatherForecastDay">Thu</div>
      <WeatherIcon code="http://openweathermap.org/img/wn/01d@2x.png" />
      <div className="WeatherForecastTemperatures">
        <span className="WeatherForecastTemperatureMin">10</span>
        <span className="WeatherForecastTemperatureMax">13</span>
      </div>
    </div>
  );
}
