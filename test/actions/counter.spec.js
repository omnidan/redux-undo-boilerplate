/* eslint no-unused-expressions: 0 */
import { expect } from 'chai';
import * as actions from '../../src/actions/counter';


describe('actions', () => {

  it('increment should create increment action', () => {
    expect(actions.increment()).to.deep.equal({ type: actions.INCREMENT_COUNTER });
  });

  it('decrement should create decrement action', () => {
    expect(actions.decrement()).to.deep.equal({ type: actions.DECREMENT_COUNTER });
  });
});
