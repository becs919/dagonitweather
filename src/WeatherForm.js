import React, { Component } from 'react';
import WeatherCard from './WeatherCard.js'
import $ from 'jquery';
// import './App.css';

class WeatherForm extends Component {
  constructor() {
    super();
    this.state = {
      city: "",
      history: [],
      weatherConditions: {
        name: '',
        description: '',
        current: '',
        icon: '',
        time: ''
      }
    }
  }

  clearField() {
    $(".city").val("");
    this.setState({ city: "" });
  }

  clearErrorMsg() {
    $(".error-msg").text("");
  }

  setWeatherState(json) {
    this.setState(
      { weatherConditions:
        { name: json.name,
          description: json.weather[0].description,
          current: json.main.temp,
          icon: json.weather[0].icon,
          time: new Date().toTimeString().split(" ")[0] }
        });
  }

  setHistoryState() {
    this.state.history.push(this.state.weatherConditions.name);
  }

  getWeather(e) {
    e.preventDefault();
    if (this.state.city.length < 1) {
      $(".error-msg").text("Enter a city")
      this.clearField();
    } else {
      this.clearErrorMsg();
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&units=imperial&APPID=d31ca363f74a3aa14bf49f5ec22cc8a3`)
      .then(response => { return response.json() })
      .then(json => {
        if (json.message) {
          $(".error-msg").text(json.message)
        } else {
          this.setHistoryState()
          this.setWeatherState(json)
        }
      })
      .catch(error => {
        console.log("error");
      })
    }
    this.clearField();
  }

  // figure out where to put the history so it renders asap

  render() {
    return (
      <div className="weather-form">
        <form className="form">
            <input className="city"
                   type="text"
                   placeholder="City, State"
                   value={ this.state.weather }
                   onChange={ (e) => this.setState({ city: e.target.value }) }
                   />
            <input className="submit"
                    type="submit"
                    value="Get Weather"
                    onClick={ (e) => this.getWeather(e) }
                    />
          </form>
          <h3 className="error-msg"> </h3>
          <WeatherCard weather={ this.state.weatherConditions } />
          <div className="history">
          <h3>Past Cities</h3>
          { this.state.history.length > 0 && this.state.history.map(city => <p key={city}>{city}</p>)}
          </div>
      </div>
    )
  }
}

export default WeatherForm;
