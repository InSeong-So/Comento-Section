/**
 * 리팩토링 해주세요!
 */

class Car {
  model = "";

  constructor(model) {
    this.model = model;
  }

  start() {
    console.log(this.brand, this.model);
  }
}
class Audi extends Car {
  brand = "Audi";
  constructor(model) {
    super(model);
  }
}

class BMW extends Car {
  brand = "BMW";
  constructor(model) {
    super(model);
  }
}

const Audi_A6 = new Audi("A6");
const BMW_S_Class = new BMW("S_Class");

Audi_A6.start();
BMW_S_Class.start();
