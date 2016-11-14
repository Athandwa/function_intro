const assert = require('assert');
function sameWeekday(dt1, dt2) {
var date1 = new Date();
var date2 = new Date();
return date1.getDay() === date2.getDay();
}
console.log(sameWeekday("2005-09-23", "2005-09-30"));
assert.equal(sameWeekday("2005-09-23", "2005-09-30"), true);
