import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
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
