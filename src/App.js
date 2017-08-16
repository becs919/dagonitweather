import React, { Component } from 'react';
import WeatherForm from './WeatherForm.js';
import logo from './logo.png';
import './App.css';

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
