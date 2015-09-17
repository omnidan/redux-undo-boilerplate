/* eslint no-unused-expressions: 0 */
import { expect } from 'chai';
import { spy } from 'sinon';
import jsdom from 'mocha-jsdom';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Counter from '../../src/components/Counter';


function setup() {
  const actions = {
    increment: spy(),
    incrementIfOdd: spy(),
    incrementAsync: spy(),
    decrement: spy()
  };
  const component = TestUtils.renderIntoDocument(<Counter counter={1} {...actions} />);
  return {
    component: component,
    actions: actions,
    buttons: TestUtils.scryRenderedDOMComponentsWithTag(component, 'button').map(button => {
      return button;
    }),
    p: TestUtils.findRenderedDOMComponentWithTag(component, 'p')
  };
}


describe('Counter component', () => {
  jsdom();

  it('should display count', () => {
    const { p } = setup();
    expect(p.textContent).to.match(/^Clicked: 1 times/);
  });

  it('first button should call increment', () => {
    const { buttons, actions } = setup();
    TestUtils.Simulate.click(buttons[0]);
    expect(actions.increment.called).to.be.true;
  });

  it('second button should call decrement', () => {
    const { buttons, actions } = setup();
    TestUtils.Simulate.click(buttons[1]);
    expect(actions.decrement.called).to.be.true;
  });

  it('third button should call incrementIfOdd', () => {
    const { buttons, actions } = setup();
    TestUtils.Simulate.click(buttons[2]);
    expect(actions.incrementIfOdd.called).to.be.true;
  });

  it('fourth button should call incrementAsync', () => {
    const { buttons, actions } = setup();
    TestUtils.Simulate.click(buttons[3]);
    expect(actions.incrementAsync.called).to.be.true;
  });
});
