function isFromCapeTown(regNumber) {
    results = regNumber.endsWith('CA');
    return results;
}
console.log(isFromCapeTown('CA 182736'));
const assert = require('assert');
assert.equal(isFromCapeTown('CA 182736'), false);
