export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  get brand() {
    return this._brand;
  }

  set brand(valu) {
    this._brand = valu;
  }

  get motor() {
    return this._motor;
  }

  set motor(valu) {
    this._motor = valu;
  }

  get color() {
    return this._color;
  }

  set color(valu) {
    this._color = valu;
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    const Species = this.constructor[Symbol.species];

    return new Species();
  }
}
