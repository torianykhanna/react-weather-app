import React from "react";

export default function WeatherIcon(props) {
  return <img src={props.code} alt="" size={props.size} />;
}
