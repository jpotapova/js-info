"use strict";
function isEmpty(obj) {
  if (obj == undefined) {
    return true;
  }

  if (typeof obj !== "object") {
    return false;
  }

  let foundAnyProperties = false;

  for (let prop in obj) {
    foundAnyProperties = true;
  }

  return !foundAnyProperties;
}
