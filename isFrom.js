const assert = require('assert');
 function isFrom(regNo, Location) {
   return regNo.startsWith(Location);
 }
 var WesternCape = isFrom('CA 10111', 'CA');
 var Natal = isFrom('ND 10111 GP', 'GP');
 console.log(isFrom('CA 10111','CA'));
 console.log(isFrom('ND 10111 GP', 'GP'));
assert.equal(isFrom('CA 10111','CA'), true);
