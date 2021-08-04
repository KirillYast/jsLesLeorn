"use strict";
function getRandom(min = 0, max = 10) {
  return Math.round(Math.random() * (max - min) + min);
}
function gameRandom(x = getRandom()) {
  let i = prompt("Ваше число:");
  if (i == x) console.log("Вы выйграли");
  else if (i > x) {
    console.log("x меньше вашего числа, пробуйте ещё!");
    gameRandom(x);
  } else if (i < x) {
    console.log("x больше вашего числа, пробуйте ещё!");
    gameRandom(x);
  }
}
function game() {
  if (confirm("Отгадаешь число от 0 до 10?")) gameRandom();
}
function znaki() {
  let a = -5,
    b = -3;
  if (a >= 0 && b >= 0) console.log(a - b);
  else if (a < 0 && b < 0) console.log(a * b);
  else console.log(a / b);
}
function perecluchatel() {
  let a = getRandom(0, 15);
  switch (a) {
    case 0:
      console.log("0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15");
      break;
    case 1:
      console.log("1 2 3 4 5 6 7 8 9 10 11 12 13 14 15");
      break;
    case 2:
      console.log("2 3 4 5 6 7 8 9 10 11 12 13 14 15");
      break;
    case 3:
      console.log("3 4 5 6 7 8 9 10 11 12 13 14 15");
      break;
    case 4:
      console.log("4 5 6 7 8 9 10 11 12 13 14 15");
      break;
    case 5:
      console.log("5 6 7 8 9 10 11 12 13 14 15");
      break;
    case 6:
      console.log("6 7 8 9 10 11 12 13 14 15");
      break;
    case 7:
      console.log("7 8 9 10 11 12 13 14 15");
      break;
    case 8:
      console.log("8 9 10 11 12 13 14 15");
      break;
    case 9:
      console.log("9 10 11 12 13 14 15");
      break;
    case 10:
      console.log("10 11 12 13 14 15");
      break;
    case 11:
      console.log("11 12 13 14 15");
      break;
    case 12:
      console.log("12 13 14 15");
      break;
    case 13:
      console.log("13 14 15");
      break;
    case 14:
      console.log("14 15");
      break;
    case 15:
      console.log("15");
      break;
  }
}
function abSum(a, b) {
  return a + b;
}
function abSub(a, b) {
  return a - b;
}
function abMult(a, b) {
  return a * b;
}
function abDiv(a, b) {
  return a / b;
}
function ab(a, b, c) {
  switch (c) {
    case "+":
      return abSum(a, b);
      break;
    case "-":
      return abSub(a, b);
      break;
    case "*":
      return abMult(a, b);
      break;
    case "/":
      return abDiv(a, b);
      break;
  }
}
function power(val, pow) {
  if (pow === 1) return val;
  else return val * power(val, pow - 1);
}
console.log(power(27, 3));
