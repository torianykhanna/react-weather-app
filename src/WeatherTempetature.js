import React from "react";

export default function WeatherTemperature(props) {
  return (
    <div className="Temperature">
      {Math.round(props.celsius)}
      <span className="Units">°C</span>
    </div>
  );
}
