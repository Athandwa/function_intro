const assert = require('assert');
function isFromBellville(registration) {
  results = registration.startsWith('CY');
  return results;
}
console.log(isFromBellville('CY 523519'));
assert.equal(isFromBellville('CY 523519'), true);
