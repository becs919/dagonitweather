import React from 'react';
// import $ from 'jquery';
// import './App.css';

const WeatherCard = ({ weather }) => {
  return (
    <div className="weather-card">
    <h2>{weather.name}</h2>
    <p>{weather.current}&deg;F</p>
    <p>{weather.description}</p>
    <p>{weather.time}</p>
    </div>
  )
}

export default WeatherCard;
