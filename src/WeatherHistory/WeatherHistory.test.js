import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import WeatherHistory from './WeatherHistory.js';

describe('WeatherHistory testing', () => {

  const mockStateHistory = [{
    name: 'Denver',
    description: 'stormy',
    current: '67',
    icon: 'photo',
    time: '13:24:31'
  }];

  it('should have .history div if history exists', () => {
    const wrapper = mount(<WeatherHistory history={mockStateHistory}/>);

    expect(wrapper.find('.history')).to.have.length(1);
  });

  it('should render cities if exists', () => {
    const wrapper = mount(<WeatherHistory history={mockStateHistory}/>);

    expect(wrapper.find('.current')).to.have.length(1);
    expect(wrapper.find('.name')).to.have.length(1);
    expect(wrapper.find('.description')).to.have.length(1);
    expect(wrapper.find('.name').text()).to.have.equal('Denver');
    expect(wrapper.find('.description').text()).to.have.equal('stormy');
  });
});
