"use strict";

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250
};

function topSalary(salaries) {
  const salariesArray = Object.entries(salaries);
  let maxSalary = 0;
  let maxSalaryName = null;
  for (let [name, salary] of salariesArray) {
    if (salary > maxSalary) {
      maxSalary = salary;
      maxSalaryName = name;
    }
  }
  return maxSalaryName;
}
