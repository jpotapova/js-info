"use strict";

function sumSalaries(salaries) {
  let sum = 0;
  const numbers = Object.values(salaries);
  for (let salary of numbers) {
    sum = sum + salary;
  }
  return sum;
}

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250
};

alert(sumSalaries(salaries)); // 650
