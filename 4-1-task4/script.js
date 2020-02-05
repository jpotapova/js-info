"use strict";
function sumSalaries(salaries) {
  let sum = 0;
  for (let person in salaries) {
    sum = sum + salaries[person];
  }
  return sum;
}
