function isFromGauteng(regNumber) {
  results = regNumber.endsWith('GP');
  return results;
}
console.log(isFromGauteng('DR 12 TY GP'));
