// Check Leap Year or Not

function leapYear(year) {
  if (year % 100 == 0) {
    let notLeapYear = year + " is not a leap year";
    return notLeapYear;
  } else if (year % 4 == 0) {
    let leapYear = year + " is a Leap year";
    return leapYear;
  } else if (year % 4 >= 0) {
    let notLeapYear = year + " is not a leap year";
    return notLeapYear;
  } else {
    let invalid = "Please provide a valid year";
    return invalid;
  }
}
console.log(leapYear(2020));
console.log(leapYear(2022));
console.log(leapYear(2100));
console.log(leapYear("Hello"));
