export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

import { ActionCreators } from 'redux-undo';

export function increment() {
  return {
    type: INCREMENT_COUNTER
  };
}

export function decrement() {
  return {
    type: DECREMENT_COUNTER
  };
}

export function undo() {
  return ActionCreators.undo();
}

export function redo() {
  return ActionCreators.redo();
}
