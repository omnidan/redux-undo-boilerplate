/* global __DEVTOOLS__ */
import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import configureStore from '../store/configureStore';
import routes from '../routes';


const store = configureStore();


function createElements(history) {
  const elements = [
    <Router key="router" history={history} children={routes} />
  ];

  if (typeof __DEVTOOLS__ !== 'undefined' && __DEVTOOLS__) {
    const DevTools = require('./DevTools');
    elements.push(<DevTools key="devtools" />);
  }

  return elements;
}


export default class Root extends Component {

  static propTypes = {
    history: PropTypes.object.isRequired
  };

  render() {
    return (
      <Provider store={store} key="provider">
        <div>
          {createElements(this.props.history)}
        </div>
      </Provider>
    );
  }
}
