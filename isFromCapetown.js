function isFromCapeTown(regNumber) {
    results = regNumber.endsWith('CA');
    return results;
}
console.log(isFromCapeTown('CA 182736'));
