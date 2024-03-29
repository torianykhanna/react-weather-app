import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTempetature";
import WeatherIcon from "./WeatherIcon";

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
        <div className="Icon">
          <WeatherIcon code={props.data.icon} width={90} height={90} />
        </div>
        <WeatherTemperature celsius={props.data.temperature} />
        <ul>
          <li>Humidity: {props.data.humidity}%</li>
          <li>Wind speed: {props.data.wind} km/h</li>
        </ul>
      </div>
    </div>
  );
}
