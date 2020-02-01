"use strict";
const n = 10;
for (let potentialPrime = 2; potentialPrime <= n; potentialPrime++) {
  let isPrime = true;
  for (let divisor = 2; divisor < potentialPrime; divisor++) {
    if (potentialPrime % divisor === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(potentialPrime);
  }
}
