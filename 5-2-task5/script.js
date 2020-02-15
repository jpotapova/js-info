"use strict";
function random(min, max) {
  const difference = max - min;
  return min + Math.random() * difference;
}
alert(random(1, 5));
