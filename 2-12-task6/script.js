"use strict";
let number;
do {
  number = prompt("Input a number > 100", "");
} while (number !== null && number !== "" && Number(number) < 101);
