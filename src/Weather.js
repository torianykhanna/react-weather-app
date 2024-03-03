import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="CurrentWeather">
      <div className="Indicators">
        <h2>London</h2>
        <ul>
          <li>Wednesday 10:20</li>
          <li>Cloudy</li>
        </ul>
      </div>
      <div className="Properties">
        <div className="Temperature">🌤️ 15 C</div>
        <ul>
          <li>Humidity:75%</li>
          <li>Wind speed: 20 km/h</li>
        </ul>
      </div>
    </div>
  );
}
