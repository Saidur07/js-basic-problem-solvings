// Hour to Minute

function hourToMinutes(hour) {
  let minutes = hour * 60;
  let answer = minutes.toFixed(2) + " Minutes";
  return answer;
}
let myHour = hourToMinutes(2);
console.log(myHour);
