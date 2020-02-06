"use strict";
function Calculator() {
  (this.read = () => {
    this.operand1 = Number(prompt("Operand 1", ""));
    this.operand2 = Number(prompt("Operand 2", ""));
  }),
    (this.sum = () => {
      return this.operand1 + this.operand2;
    }),
    (this.mul = () => {
      return this.operand1 * this.operand2;
    });
}
let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());
