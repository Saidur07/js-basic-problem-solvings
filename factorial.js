// Factorial using for loop

function factorialCalc(number) {
  let factorial = 1;
  for (let i = 1; i <= number; i++) {
    factorial = factorial * i;
  }
  return factorial;
}

let myFact = factorialCalc(10);
console.log(myFact);

// Factorial using while loop

function factorialCalcWhile(number) {
  let fact = 1;
  let i = 1;
  while (i <= number) {
      fact = fact * i;
    i++;
  }
  return fact;
}

let myFactWhile = factorialCalcWhile(8);
console.log(myFactWhile);
