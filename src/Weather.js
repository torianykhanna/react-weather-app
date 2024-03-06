import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form className="SearchName">
          <input
            type="text"
            className="SearchInput"
            placeholder="Enter a city..."
          />
          <button type="submit" className="SearchButton">
            Search
          </button>
        </form>
        <div className="CurrentWeather">
          <div className="Indicators">
            <h2>{weatherData.city}</h2>
            <ul>
              <li>Wednesday 10:20</li>
              <li>{weatherData.description}</li>
            </ul>
          </div>
          <div className="Properties">
            <div className="Temperature">
              🌤️ {Math.round(weatherData.temperature)}{" "}
              <span className="Units">°C</span>
            </div>
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind speed: {weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "0a160c794b3a1d67961e42fa506069c5";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
