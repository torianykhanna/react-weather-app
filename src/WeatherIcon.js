import React from "react";
import { WeatherSvg } from "weather-icons-animated";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "sunny",
    "01n": "clear-night",
    "02d": "cloudy",
    "02n": "cloudy",
    "03d": "partlycloudy",
    "03n": "partlycloudy",
    "04d": "pouring",
    "04n": "pouring",
    "09d": "rainy",
    "09n": "rainy",
    "10d": "rainy",
    "10n": "rainy",
    "11d": "lightning",
    "11n": "lightning",
    "13d": "snowy",
    "13n": "snowy",
    "50d": "fog",
    "50n": "fog",
  };

  return (
    <WeatherSvg
      state={codeMapping[props.code]}
      width={props.width}
      height={props.height}
    />
  );
}
