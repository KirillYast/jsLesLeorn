"use strict";
function gameRandom() {
  function numberGenerate() {
    function getRandom(min = 0, max = 9) {
      return Math.round(Math.random() * (max - min) + min);
    }
    let arr = [];
    for (let i = 0; i < 4; i++) {
      arr[i] = getRandom();
      if (i == 0) while (arr[i] == 0) arr[i] = getRandom();
      else {
        let bool;
        do {
          bool = true;
          for (let j = 0; j < i; j++) {
            if (arr[j] == arr[i]) {
              bool = false;
              arr[i] = getRandom();
              break;
            }
          }
        } while (!bool);
      }
    }
    return arr;
  } //return arr
  function inputVerification() {
    let arrGuess,
      rider = "";
    while (true) {
      arrGuess = prompt(`${rider}Введите 4-х значное число:`);
      if (arrGuess === null) {
        console.log("Отмена ввода");
        return false;
      } else if (isNaN(+arrGuess) || arrGuess.split("").length != 4) {
        rider = "Неправильный ввод. ";
        continue;
      }
      return arrGuess.split("").map(Number);
    }
  } //return arrGuess or false
  function Guess(arrGenerate) {
    let arrGuess = inputVerification();
    if (!arrGuess) return true;
    let cow = 0,
      bull = 0,
      boo = true,
      rider;
    for (let i = 0; i < arrGuess.length; i++) {
      if (arrGuess[i] == arrGenerate[i]) ++cow;
      else {
        if (arrGenerate.includes(arrGuess[i])) bull++;
        if (boo) {
          boo = false;
          if (arrGuess[i] < arrGenerate[i]) rider = "МЕНЬШЕ";
          else rider = "БОЛЬШЕ";
        }
      }
    }
    if (cow == 4) {
      console.log("Вы угадали");
      return true;
    } else {
      count--;
      console.log(
        `Вы не угадали. Осталось ${count} попыток. Ваше число ${rider} загаданного. Коров: ${cow}, а Быков ${bull}`
      );
      if (count) return false;
      else return true;
    }
  } //return true or false
  const arrGenerate = numberGenerate();
  let count = 50;
  while (!Guess(arrGenerate));
  return;
}
function hundredOutput() {
  let i = 0;
  while (i <= 100) console.log(i++);
}
function forNone() {
  for (let i = 0; i < 10; console.log(i++));
}
function pyramidX() {
  for (let i = 0, x = ""; i < 20; i++, console.log((x += "x")));
}
function countBasketPrice(arrQuantity, arrPrice) {
  let 
    countBasket = 0;
  for (let i = 0; i < arrQuantity.length; i++) {
    countBasket += (arrQuantity[i] * arrPrice[i]);
  }
  return countBasket;
}
console.log(countBasketPrice([2,1],[3,2]))