import React, { Component } from 'react';
import WeatherForm from '../WeatherForm/WeatherForm.js';
import logo from '../images/logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Dagonit Weather</h1>
        </div>
          <h3 className="sub-header">Always be Prepared</h3>
          <WeatherForm />
      </div>
    );
  }
}

export default App;
