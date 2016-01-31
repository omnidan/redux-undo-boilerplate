/*eslint-disable*/
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './containers/Root'
import { browserHistory } from 'react-router'
/*eslint-enable*/

ReactDOM.render(
  <Root history={browserHistory} />,
  document.getElementById('root')
)
