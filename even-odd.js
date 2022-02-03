// Check even and odd numbers

function oddOrEven(number) {
  if (number % 2 == 0) {
    let evenNum = number + " is an even number";
    return evenNum;
  } else if (number % 2 == 1) {
    let oddNum = number + " is an odd number";
    return oddNum;
  } else {
    let invalid = "Please provide a valid number";
    return invalid;
  }
}
console.log(oddOrEven(25));
console.log(oddOrEven(50));
console.log(oddOrEven("Hello"));
