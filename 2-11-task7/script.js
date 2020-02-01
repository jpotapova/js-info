const age = 10;
if (age < 14 || age > 90) {
  console.log("out of range");
} else {
  console.log("in range");
}

if (!(age >= 14 && age <= 90)) {
  console.log("out of range");
} else {
  console.log("in range");
}
