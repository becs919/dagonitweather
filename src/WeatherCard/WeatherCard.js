import React from 'react';
import './WeatherCard.css';

const WeatherCard = ({ weather }) => {
  let iconUrl = `http://openweathermap.org/img/w/${weather.icon}.png`;
  return (
    <div>
    {weather.name.length > 0 &&
      <div className="weather-card">
      <h2>{weather.name}</h2>
      <p>{weather.current}&deg;F</p>
      <p>{weather.description}</p>
      <img src={iconUrl} alt="weather icon"/>
      <p>{weather.time}</p>
      </div>
    }
  </div>
  )
}

export default WeatherCard;
