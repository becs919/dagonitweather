import React from 'react';
// import $ from 'jquery';
// import './App.css';

const WeatherHistory = ({ history }) => {
  return (
    <div className="history">
      <h3>Past Cities</h3>
      { history.map(city => <p key={ city }>{ city }</p>) }
    </div>
  )
}

export default WeatherHistory;
