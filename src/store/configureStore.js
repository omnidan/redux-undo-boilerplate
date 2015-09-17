/* global __DEVTOOLS__ */
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions/counter';
import reduxUndo, { ifAction } from 'redux-undo';

const loggerMiddleware = createLogger({
  level: 'info',
  collapsed: true
});


let createStoreWithMiddleware;

const reduxUndoConfig = {
  filter: ifAction([INCREMENT_COUNTER, DECREMENT_COUNTER]),
  limit: 10,
  debug: true
};

if (typeof __DEVTOOLS__ !== 'undefined' && __DEVTOOLS__) {
  const { devTools, persistState } = require('redux-devtools');
  createStoreWithMiddleware = compose(
    applyMiddleware(thunkMiddleware, promiseMiddleware, loggerMiddleware),
    reduxUndo(reduxUndoConfig),
    devTools(),
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
    createStore
  );
} else {
  createStoreWithMiddleware = compose(
    applyMiddleware(thunkMiddleware, promiseMiddleware),
    reduxUndo(reduxUndoConfig),
    createStore
  );
}


/**
 * Creates a preconfigured store.
 */
export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
}
