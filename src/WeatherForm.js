import React, { Component } from 'react';
// import './App.css';

// `api.openweathermap.org/data/2.5/weather?q=${}&APPID=d31ca363f74a3aa14bf49f5ec22cc8a3`

class App extends Component {
  constructor() {
    super();
    this.state = {
      weather: "",
      history: []
    }
  }

  render() {
    return (
      <div className="weather-form">
        <form className="form">
            <input className="city"
                   type="text"
                   placeholder="City, State"
                   value={this.state.weather}
                   onChange={(e) => this.setState({ weather: e.target.value })}
                   />
            <input className="submit"
                    type="submit"
                    value="Get Weather"
                    />
          </form>
      </div>
    )
  }
}

export default App;
