import React, { Component } from 'react';
import WeatherForm from './WeatherForm.js';
import logo from './logo.png';
import './App.css';

// `api.openweathermap.org/data/2.5/weather?q=${}&APPID=d31ca363f74a3aa14bf49f5ec22cc8a3`

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Dagonit Weather</h2>
          <p>Always be Prepared</p>
          <WeatherForm />
        </div>
      </div>  
    );
  }
}

export default App;
