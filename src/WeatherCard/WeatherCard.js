import React from 'react';
import './WeatherCard.css';

const WeatherCard = ({ weather }) => {
  let iconUrl = `http://openweathermap.org/img/w/${weather.icon}.png`;
  return (
    <div className="weather-card-div">
    {weather.name.length > 0 &&
      <div className="weather-card">
      <p className="current">{weather.current}&deg;F</p>
      <img src={iconUrl} alt="weather icon"/>
      <p className="name">{weather.name}</p>
      <p className="description">{weather.description}</p>
      <p className="time">at {weather.time}</p>
      </div>
    }
  </div>
  )
}

export default WeatherCard;
