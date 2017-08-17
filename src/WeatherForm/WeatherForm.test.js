import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import WeatherForm from './WeatherForm.js';

describe('WeatherForm testing', () => {
  const mockState = {
    city: '',
    history: [],
    weatherConditions: {
      name: '',
      description: '',
      current: '',
      icon: '',
      time: ''
    }
  }

  const mockStateHistory = {
    city: '',
    history: ['denver, boulder'],
    weatherConditions: {
      name: '',
      description: '',
      current: '',
      icon: '',
      time: ''
    }
  }

  it('should have WeatherCard as a component', () => {
    const wrapper = shallow(<WeatherForm />);

    expect(wrapper.find('WeatherCard')).to.have.length(1);
  });

  it('should have WeatherForm as a component if history exists', () => {
    const wrapper = shallow(<WeatherForm />);
    wrapper.setState(mockStateHistory);

    expect(wrapper.find('WeatherHistory')).to.have.length(1);
  });

  it('should have .history div if history exists', () => {
    const wrapper = mount(<WeatherForm />);
    wrapper.setState(mockStateHistory);

    expect(wrapper.find('.history')).to.have.length(1);
  });

  it('should have a state that matched the mockState', () => {
    const wrapper = shallow(<WeatherForm/>);

    expect(wrapper.state()).to.deep.equal(mockState);
  });

  it('should update city when input is valid', () => {
    const wrapper = shallow(<WeatherForm />);

    wrapper.find('.city').simulate('change', { target: { value: 'denver' } });

    expect(wrapper.state().city).to.equal('denver');
  });

  it('should render error message if city not found', () => {
    const wrapper = mount(<WeatherForm />);

    wrapper.find('.city').simulate('change', { target: { value: 'd' } });
    wrapper.find('.submit').simulate('click', { preventDefault() {} });
    expect(wrapper.state().city).to.equal('');

    expect(wrapper.find('.error-msg')).to.have.length(1);
  });

  it('should render error message when nothing in input field', () => {
    const wrapper = mount(<WeatherForm />);

    wrapper.find('.submit').simulate('click', { preventDefault() {} });

    expect(wrapper.state().city).to.equal('');
    expect(wrapper.find('.error-msg')).to.have.length(1);
  });

  it('should call fetchWeather function on click if valid', () => {
    const wrapper = shallow(<WeatherForm />);

    const instance = wrapper.instance();
    sinon.spy(instance, 'fetchWeather');

    wrapper.find('.city').simulate('change', {
      target: { value: 'denver' },
    });
    wrapper.find('.submit').simulate('click', { preventDefault() {} });

    expect(instance.fetchWeather.calledOnce).to.equal(true);
  });
});
