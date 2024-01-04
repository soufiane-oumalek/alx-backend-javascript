// Import the Currency class from 3-currency.js
import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  // get amount
  get amount() {
    return this._amount;
  }

  // set amount
  set amount(valu) {
    if (typeof valu !== 'number') {
      throw new TypeError('amount must be a number');
    }
    this._amount = valu;
  }

  // return currency
  get currency() {
    return this._currency;
  }

  // currency value
  set currency(valu) {
    if (!(valu instanceof Currency)) {
      throw new TypeError('currency must be a Currency');
    }
    this._currency = valu;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') { throw new TypeError('amount must be a number'); }
    if (typeof conversionRate !== 'number') { throw new TypeError('conversionRate must be a number'); }
    return amount * conversionRate;
  }
}
