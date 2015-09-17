import React from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/Root';
import BrowserHistory from 'react-router/lib/BrowserHistory';


const history = new BrowserHistory();


ReactDOM.render(
  <Root history={history} />,
  document.getElementById('root')
);
