import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import App from './App';


describe('App testing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('should render a WeatherForm component', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find('WeatherForm')).to.have.length(1);
  });

  it('should render a div with the className App and App-header', () => {
   const wrapper = shallow(<App/>);
   expect(wrapper.find('.App')).to.have.length(1);
   expect(wrapper.find('.App-header')).to.have.length(1);
 });

  it('should render an img, h1 and h3 tags', () => {
   const wrapper = shallow(<App/>);
   expect(wrapper.find('img')).to.have.length(1);
   expect(wrapper.find('h1')).to.have.length(1);
   expect(wrapper.find('h3')).to.have.length(1);
 });

});
