// define currency class
export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  get code() {
    return this._code;
  }

  set code(valu) {
    this._code = valu;
  }

  get name() {
    return this._name;
  }

  set name(valu) {
    this._name = valu;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
