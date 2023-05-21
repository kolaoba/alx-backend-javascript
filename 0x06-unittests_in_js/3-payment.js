const utils = require('./utils')
function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const amount = utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${amount}`);
}
module.exports = sendPaymentRequestToApi;