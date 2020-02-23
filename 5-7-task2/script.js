"use strict";

function prepareString(s) {
  return s
    .toLowerCase()
    .split("")
    .sort()
    .join("");
}

function checkIfAnagram(arr, element) {
  const preparedElement = prepareString(element);
  const preparedArray = arr.map(e => {
    return prepareString(e);
  });

  return preparedArray.includes(preparedElement);
}

function aclean(arrayWithAnagrams) {
  const cleanArray = [];
  arrayWithAnagrams.forEach(element => {
    const isAnagram = checkIfAnagram(cleanArray, element);
    if (!isAnagram) {
      cleanArray.push(element);
    }
  });
  return cleanArray;
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert(aclean(arr)); // "nap,teachers,ear" or "PAN,cheaters,era"
