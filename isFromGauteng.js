function isFromGauteng(regNumber) {
  results = regNumber.endsWith('GP');
  return results;
}
console.log(isFromGauteng('DR 12 TY GP'));
const assert = require('assert');
assert.equal(isFromGauteng('DR 12 TY GP'), true);
