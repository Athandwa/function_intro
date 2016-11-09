function isFromPaarl(registration) {
  results = registration.startsWith('C');
  return results;
}
console.log(isFromPaarl('CJ 98912'));
