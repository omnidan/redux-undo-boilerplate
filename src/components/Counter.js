import React, { Component, PropTypes } from 'react';


export default class Counter extends Component {

  static propTypes = {
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    undo: PropTypes.func.isRequired,
    redo: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired
  }

  render() {
    const { increment, decrement, counter, undo, redo } = this.props;
    return (
      <p>
        Clicked: {counter} times
        {' '}
        <button onClick={increment}>+</button>
        {' '}
        <button onClick={decrement}>-</button>
        {' '}
        <button onClick={undo}>Undo</button>
        {' '}
        <button onClick={redo}>Redo</button>
      </p>
    );
  }
}
