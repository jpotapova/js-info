"use strict";
function copySorted(arr) {
  const arrayCopy = [...arr].sort();
  return arrayCopy;
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert(sorted); // CSS, HTML, JavaScript
alert(arr); // HTML, JavaScript, CSS (no changes)
