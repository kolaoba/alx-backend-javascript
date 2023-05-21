const chai = require('chai');
const expect = chai.expect;
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should return a reslved promise with object', (done) => {
    getPaymentTokenFromAPI(true).then((data) => {
      expect(data).to.eql({ data: 'Successful response from the API' });
      done();
    })
      .catch((error) => done(error));
  });
});