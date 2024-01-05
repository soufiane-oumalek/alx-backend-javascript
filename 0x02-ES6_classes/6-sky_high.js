// Import the Building class from 5-building.js
import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  // get floors
  get floors() {
    return this._floors;
  }

  // set floors
  set floors(valu) {
    this._floors = valu;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
