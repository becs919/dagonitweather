import React from 'react';
import './WeatherHistory.css';

const WeatherHistory = ({ history }) => {
  return (
    <div className="history-div">
      <h3 className="past-cities" tabIndex="0">Search History</h3>
      <div className="history">
        { history.map(city => <div key={city.time} className="history-card">
        <p tabIndex="0" className="current">{city.current}&deg;F</p>
        <img src={`http://openweathermap.org/img/w/${city.icon}.png`} alt="weather icon"/>
        <p tabIndex="0" className="name">{city.name}</p>
        <p tabIndex="0" className="description">{city.description}</p>
        <p tabIndex="0" className="time">at {city.time}</p>
        </div>) }
      </div>
    </div>
  )
}

export default WeatherHistory;
