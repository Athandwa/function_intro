const assert = require('assert');
 function yearsAgo(year) {
  var today = new Date();
  return today.getFullYear() - year;

}
console.log(yearsAgo(1992) + " years ago");
assert.equal(yearsAgo(1992) + " years ago", '24 years ago');
