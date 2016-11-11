function isFromLimpopo(LimpopoRegNum) {
  RegNumber = LimpopoRegNum.startsWith('DRT');
  return RegNumber;
}
console.log(isFromLimpopo('DRT 122 L'));
const assert = require('assert');
assert.equal(isFromLimpopo('DRT 122 L'), true);
