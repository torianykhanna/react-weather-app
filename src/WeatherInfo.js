import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="CurrentWeather">
      <div className="Indicators">
        <h2>{props.data.city}</h2>
        <ul>
          <li>
            <FormattedDate date={props.data.date} />{" "}
          </li>
          <li>{props.data.description}</li>
        </ul>
      </div>
      <div className="Properties">
        <div className="Temperature">
          🌤️ {Math.round(props.data.temperature)}{" "}
          <span className="Units">°C</span>
        </div>
        <ul>
          <li>Humidity: {props.data.humidity}%</li>
          <li>Wind speed: {props.data.wind} km/h</li>
        </ul>
      </div>
    </div>
  );
}
