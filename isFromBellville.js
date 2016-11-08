function isFromBellville(registration) {
  results = registration.startsWith('CY');
  return results;
}
console.log(isFromBellville('CY 523519'));
