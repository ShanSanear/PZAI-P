class Accumulator {
  constructor(startValue) {
    this.value = startValue;
  }

  read() {
    this.value += +prompt('value', '0');
  }

}

let accumulator = new Accumulator(1)
alert(accumulator.value)
accumulator.read()
accumulator.read()

alert(accumulator.value)
