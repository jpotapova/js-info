"use strict";
function random(min, max) {
  const difference = max - min;
  return min + Math.random() * difference;
}

function randomInteger(min, max) {
  const randomNumber = random(min, max + 1);
  return Math.floor(randomNumber);
}

alert(randomInteger(1, 5));
