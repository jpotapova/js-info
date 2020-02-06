"use strict";
let calculator = {
  // ... your code ...
  read() {
    this.operand1 = Number(prompt("Operand 1", ""));
    this.operand2 = Number(prompt("Operand 2", ""));
  },

  sum() {
    return this.operand1 + this.operand2;
  },

  mul() {
    return this.operand1 * this.operand2;
  }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
