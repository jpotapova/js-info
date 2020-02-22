"use strict";

function camelize(kebabCasedString) {
  const camelCasedParts = kebabCasedString.split("-").map((part, index) => {
    if (index > 0) {
      return part[0].toUpperCase() + part.slice(1);
    }
    return part;
  });

  return camelCasedParts.join("");
}
