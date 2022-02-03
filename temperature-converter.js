// Converting Celcius to Fahrenheit

function celToFah(celcius) {
  let fahrenheit = celcius * 1.8 + 32;
  let answer = fahrenheit.toFixed(1) + "° Fahrenheit ";
  return answer;
}
let today = celToFah(30);
console.log(today);

// Converting Fahrenheit to Celcius

function fahToCel(fahrenheit) {
  let celcius = ((fahrenheit - 32) * 5) / 9;
  let answer = celcius.toFixed(1) + "° Celcius ";
  return answer;
}
let tonight = fahToCel(98);
console.log(tonight);
