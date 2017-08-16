import React, { Component } from 'react';
// import './App.css';

// `api.openweathermap.org/data/2.5/weather?q=${}&APPID=d31ca363f74a3aa14bf49f5ec22cc8a3`

class WeatherForm extends Component {
  constructor() {
    super();
    this.state = {
      city: "",
      history: []
    }
  }

  getWeather(e) {
    e.preventDefault();
    console.log('getting weather');
    // make api call
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
      </div>
    )
  }
}

export default WeatherForm;
