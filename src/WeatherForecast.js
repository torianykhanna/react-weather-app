import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="WeatherForecastDay">{forecast[0].dt}</div>
        <WeatherIcon code={forecast[0].weather[0].icon} />
        <div className="WeatherForecastTemperatures">
          <span className="WeatherForecastTemperatureMin">
            {Math.round(forecast[0].temp.min)}°
          </span>
          <span className="WeatherForecastTemperatureMax">
            {Math.round(forecast[0].temp.max)}°
          </span>
        </div>
      </div>
    );
  } else {
    let apiKey = "0a160c794b3a1d67961e42fa506069c5";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
