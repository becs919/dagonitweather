import React from 'react';
import './WeatherCard.css';

const WeatherCard = ({ weather }) => {
  let iconUrl = `https://openweathermap.org/img/w/${weather.icon}.png`;
  return (
    <div className='weather-card-div'>
    {weather.name.length > 0 &&
      <div className='weather-card'>
      <p tabIndex='0' className='current'>{weather.current}&deg;F</p>
      <img src={iconUrl} alt='weather icon'/>
      <p tabIndex='0' className='name'>{weather.name}</p>
      <p tabIndex='0' className='description'>{weather.description}</p>
      <p tabIndex='0' className='time'>at {weather.time}</p>
      </div>
    }
  </div>
  )
}

export default WeatherCard;
