function isWeekday(Day) {
  return !Day.startsWith('S');
}
console.log(isWeekday('Monday'));
