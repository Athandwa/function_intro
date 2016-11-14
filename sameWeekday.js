function sameWeekday(dt1, dt2) {
var date1 = new Date();
var date2 = new Date();
if (date1.getDay() === date2.getDay()) {
  return "The days are equal to each other";
  }
  else {
    return "The days are not equal to each other";
  }
}
console.log(sameWeekday("2005-09-23", "2005-09-23"));
