"use strict";
function readNumber() {
  let userInput;
  do {
    userInput = prompt("Enter a valid numeric value", "");
    if (userInput === "" || userInput === null) {
      return null;
    }
    userInput = Number(userInput);
  } while (isNaN(userInput));

  return userInput;
}
