import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import WeatherCard from './WeatherCard.js';

describe('WeatherCard testing', () => {

  const mockStateWeather = {
    name: 'Denver',
    description: 'stormy',
    current: '67',
    icon: 'photo',
    time: '13:24:31'
  }

  it('should have .weather-card div if weather exists', () => {
    const wrapper = mount(<WeatherCard weather={mockStateWeather}/>);

    expect(wrapper.find('.weather-card')).to.have.length(1);
  });

  it('should render name, current, description, img, and time is exists', () => {
    const wrapper = shallow(<WeatherCard weather={mockStateWeather}/>);

    expect(wrapper.find('h2')).to.have.length(1);
    expect(wrapper.find('h2').text()).to.have.equal('Denver');
    expect(wrapper.find('p')).to.have.length(3);
    expect(wrapper.find('p').first().text()).to.have.equal('67°F');
    expect(wrapper.find('img')).to.have.length(1);
  });
});
