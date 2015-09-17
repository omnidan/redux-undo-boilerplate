import { expect } from 'chai';
import jsdom from 'mocha-jsdom';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { Provider } from 'react-redux';
import CounterPage from '../../src/containers/CounterPage';
import configureStore from '../../src/store/configureStore';


function setup(initialState) {
  const store = configureStore(initialState);
  const app = TestUtils.renderIntoDocument(
    <Provider store={store}>
      <CounterPage />
    </Provider>
  );
  return {
    app: app,
    buttons: TestUtils.scryRenderedDOMComponentsWithTag(app, 'button').map(button => {
      return button;
    }),
    p: TestUtils.findRenderedDOMComponentWithTag(app, 'p')
  };
}


describe('containers', () => {
  jsdom();

  describe('App', () => {

    it('should display initial count', () => {
      const { p } = setup();
      expect(p.textContent).to.match(/^Clicked: 0 times/);
    });

    it('should display updated count after increment button click', () => {
      const { buttons, p } = setup();
      TestUtils.Simulate.click(buttons[0]);
      expect(p.textContent).to.match(/^Clicked: 1 times/);
    });

    it('should display updated count after descrement button click', () => {
      const { buttons, p } = setup();
      TestUtils.Simulate.click(buttons[1]);
      expect(p.textContent).to.match(/^Clicked: -1 times/);
    });

    it('shouldnt change if even and if odd button clicked', () => {
      const { buttons, p } = setup();
      TestUtils.Simulate.click(buttons[2]);
      expect(p.textContent).to.match(/^Clicked: 0 times/);
    });

    it('should change if odd and if odd button clicked', () => {
      const { buttons, p } = setup({ counter: 1 });
      TestUtils.Simulate.click(buttons[2]);
      expect(p.textContent).to.match(/^Clicked: 2 times/);
    });
  });
});
