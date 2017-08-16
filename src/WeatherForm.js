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
        time: ''
      },
    }
  }

  clearFields() {
    this.setState({ city: "" })
    $(".error-msg").text("")
  }

  getWeather(e) {
    e.preventDefault();

    if (this.state.city.length < 1) {
      $(".error-msg").text("Enter a city")

    } else {
      this.clearFields();
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&units=imperial&APPID=d31ca363f74a3aa14bf49f5ec22cc8a3`)
      .then(response => { return response.json() })
      .then(json => {
        if (json.message) {
          $(".error-msg").text(json.message)
        } else {
          this.setState({ weatherConditions: { name: json.name, description: json.weather[0].description, current: json.main.temp, time: new Date().toTimeString().split(" ")[0] }  })
          // save json data to display
          // save city in history
        }
      })
      .catch(error => {
        console.log("error");
      })
    }
  }

  // display current weather
  // handle errors with getting weather
  // if successful, save city in history

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
      </div>
    )
  }
}

export default WeatherForm;
