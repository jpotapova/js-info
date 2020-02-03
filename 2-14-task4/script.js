"use strict";
function pow(x, n) {
  return x ** n;
}
const x = prompt("x?", "");
const n = prompt("n?", "");
if (n < 1) {
  alert("Please enter n only integers up from 1");
} else {
  alert(pow(x, n));
}
