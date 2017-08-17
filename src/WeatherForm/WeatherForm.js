import React, { Component } from 'react';
import WeatherCard from '../WeatherCard/WeatherCard.js'
import WeatherHistory from '../WeatherHistory/WeatherHistory.js'
import $ from 'jquery';
import './WeatherForm.css';

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

  clearCity() {
    $(".city").val("");
    this.setState({ city: "" });
  }

  clearWeather() {
    this.setState({ weatherConditions: {
      name: '',
      description: '',
      current: '',
      icon: '',
      time: '' }
    });
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
    this.setHistoryState();
  }

  setHistoryState() {
    return this.state.history.includes(this.state.weatherConditions.name) ? null : this.state.history.push(this.state.weatherConditions.name);
  }

  renderWeather(e) {
    e.preventDefault();
    if (this.state.city.length < 1) {
      $(".error-msg").text("Enter a city")
      this.clearCity();
    } else {
      this.clearErrorMsg();
      this.fetchWeather();
    }
    this.clearCity();
  }

  fetchWeather() {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&units=imperial&APPID=d31ca363f74a3aa14bf49f5ec22cc8a3`)
    .then(response => { return response.json() })
    .then(json => {
      if (json.message) {
        $(".error-msg").text(json.message);
        this.clearWeather();
      } else {
        this.setWeatherState(json);
      }
    })
    .catch(error => {
      $(".error-msg").text(error);
    })
  }

  render() {
    return (
      <div className="weather-form">
        <form className="form">
            <input className="city"
                   type="text"
                   placeholder="City, State"
                   value={ this.state.weather }
                   onChange={ (e) => this.setState({ city: e.target.value }) }
                   aria-label="city"
                   />
            <input className="submit"
                    type="submit"
                    value="Get Weather"
                    onClick={ (e) => this.renderWeather(e) }
                    aria-label="submit"
                    />
          </form>

          <p className="error-msg"> </p>

          <WeatherCard weather={ this.state.weatherConditions } />

          { this.state.history.length > 0 && <WeatherHistory history={ this.state.history } /> }
      </div>
    )
  }
}

export default WeatherForm;
