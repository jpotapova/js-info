"use strict";
function userFinished(answer, numericAnswer) {
  return answer === "" || answer === null || isNaN(numericAnswer);
}
function sumInput() {
  const userAnswers = [];
  while (true) {
    const answer = prompt("Enter a numeric value", "");
    const numericAnswer = Number(answer);
    if (userFinished(answer, numericAnswer)) {
      break;
    }
    userAnswers.push(numericAnswer);
  }

  let sum = 0;
  for (let userAnswer of userAnswers) {
    sum = sum + userAnswer;
  }

  return sum;
}

alert(sumInput());
