const request = require('request');
const chai = require('chai');
const expect = chai.expect;

describe('Basic integration testing', () => {
  describe('GET /', () => {
    it('endpoint GET /', (done) => {
      const options = {
        method: 'GET',
        url: 'http://localhost:7865',
      };
      request(options, (err, res, body) => {
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal('Welcome to the payment system')
        done();
      });
    });
  });
});