// define airport class
export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  get name() {
    return this._name;
  }

  set name(valu) {
    this._name = valu;
  }

  get code() {
    return this._code;
  }

  set code(valu) {
    this._code = valu;
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }
}
