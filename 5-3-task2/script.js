"use strict";
function checkSpam(str) {
  const lowercase = str.toLowerCase();
  return lowercase.indexOf("viagra") > -1 || lowercase.indexOf("xxx") > -1;
}
