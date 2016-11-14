const assert = require('assert')
function dayToday() {
var today = new Date();
var weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
return weekDays[today.getDay()];

}
console.log(dayToday());
assert.equal(dayToday(), 'Monday')
