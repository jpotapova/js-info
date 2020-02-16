"use strict";

function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) {
    partialSum = partialSum + item;
    maxSum = Math.max(maxSum, partialSum);
    if (partialSum < 0) {
      partialSum = 0;
    }
  }

  return maxSum;
}
