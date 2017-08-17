import React from 'react';
import './WeatherHistory.css';

const WeatherHistory = ({ history }) => {
  return (
    <div className="history">
      <h3 tabIndex="0">Past Cities</h3>
      { history.map(city => <p tabIndex="0" key={ city }>{ city }</p>) }
    </div>
  )
}

export default WeatherHistory;
