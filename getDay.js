const assert = require('assert');
function getDay(day) {
  var day = new Date(day);
  var weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return weekDays[day.getDay()];

}
console.log(getDay('2016-12-06'));
assert.equal(getDay('2016-12-06'), 'Tuesday');
