"use strict";

function filterRangeInPlace(arr, min, max) {
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];

    if (element < min || element > max) {
      arr.splice(i, 1);
      i--;
    }
  }
}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

alert(arr); // [3, 1]
