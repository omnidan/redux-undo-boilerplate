import { combineReducers } from 'redux';
import counter from './counter';
import {
  INCREMENT_COUNTER, DECREMENT_COUNTER,
  UNDO_COUNTER, REDO_COUNTER
} from '../actions/counter';
import undoable, { ifAction } from 'redux-undo';


const rootReducer = combineReducers({
  counter: undoable(counter, {
    filter: ifAction([INCREMENT_COUNTER, DECREMENT_COUNTER]),
    limit: 10,
    debug: true,
    undoType: UNDO_COUNTER,
    redoType: REDO_COUNTER
  })
});


export default rootReducer;
