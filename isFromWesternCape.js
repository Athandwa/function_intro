function isFromWesternCape(RegNumber) {
  results = RegNumber.startsWith('CY');
  return results;
}
const assert = require('assert');
assert.equal(isFromWesternCape('CY 10111'), true);
assert.equal(isFromWesternCape('ND 10345 GP'), false);
