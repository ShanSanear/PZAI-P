class Calculator {
  constructor() {
    this.a = 0;
    this.b = 0;
  }

  read() {
    this.a = +prompt('a?', '0');
    this.b = +prompt('b?', '0');
  }

  sum() {
    return this.a + this.b;
  }

  mul() {
    return this.a * this.b;
  }
}

let calculator = new Calculator()
calculator.read()

alert("Sum=" + calculator.sum())
alert("Mul=" + calculator.mul())
