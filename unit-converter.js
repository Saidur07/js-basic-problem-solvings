// Inches to Feets

function inchToFeet(inches) {
  let feet = inches / 12;
  let answer = feet.toFixed(2) + " Feets";
  return answer;
}
let myInches = 445;
console.log(inchToFeet(myInches));

// Miles to Kilometers

function mileToKM(miles) {
  let km = miles * 1.60934;
  let answer = km.toFixed(2) + " Kilometers";
  return answer;
}

let myMiles = 21;
console.log(mileToKM(myMiles));
