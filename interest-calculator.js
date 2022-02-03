// i = pnr :D

function interestCalc(principal, time, rate) {
  let interest = (principal * time * rate) / 100;
  let answer = "You interest rate is : " + interest.toFixed(2) + " Taka";
  return answer;
}
let myInterest = interestCalc(10000, 2, 20);
console.log(myInterest);
