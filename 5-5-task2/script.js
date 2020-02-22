"use strict";

function filterRange(arr, min, max) {
  return arr.filter(element => {
    if (element < min) {
      return false;
    } else if (element > max) {
      return false;
    }
    return true;
    s;
  });
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert(filtered); // 3,1 (matching values)

alert(arr); // 5,3,8,1 (not modified)
