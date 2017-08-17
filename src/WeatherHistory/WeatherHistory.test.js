import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import WeatherHistory from './WeatherHistory.js';

describe('WeatherHistory testing', () => {

  const mockStateHistory = ['Denver', 'Boulder'];

  it('should have .history div if history exists', () => {
    const wrapper = mount(<WeatherHistory history={mockStateHistory}/>);

    expect(wrapper.find('.history')).to.have.length(1);
  });

  it('should render cities if exists', () => {
    const wrapper = shallow(<WeatherHistory history={mockStateHistory}/>);

    expect(wrapper.find('p')).to.have.length(2);
    expect(wrapper.find('p').first().text()).to.have.equal('Denver');
    expect(wrapper.find('p').last().text()).to.have.equal('Boulder');
  });
});
