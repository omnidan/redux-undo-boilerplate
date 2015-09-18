import React from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/Root';
import createBrowserHistory from 'history/lib/createBrowserHistory';


const history = createBrowserHistory();


ReactDOM.render(
  <Root history={history} />,
  document.getElementById('root')
);
