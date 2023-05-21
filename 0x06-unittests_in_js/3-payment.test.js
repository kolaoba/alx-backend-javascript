const utils = require('./utils');
const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('validate the usage of Utils module', function() {
    const spy = sinon.spy(utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20)
    expect(spy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    spy.restore();
  });
});