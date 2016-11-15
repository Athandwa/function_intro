const assert = require('assert');
function isTuesday(day) {
  var day = 'Tuesday';
  var isWeekday = day.startsWith('T');
  return isWeekday
}
console.log(isTuesday('Tuesday'));
assert.equal(isTuesday('Tuesday'), true);
