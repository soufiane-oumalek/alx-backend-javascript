// define HolbertonCourse class
export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }
  // Get name of a course
  get name() {
    return this._name;
  }
  // set name of a course
  set name(valu) {
    if (typeof valu !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = valu;
  }
  // get length of a course
  get length() {
    return this._length;
  }
  // set length of a course
  set length(valu) {
    if (typeof valu !== 'number') { throw new TypeError('Length must be a number'); }
    this._length = valu;
  }
  // get students of a course
  get students() {
    return this._students;
  }
  // set students of a course
  set students(valu) {
    if (!Array.isArray(valu)) { throw new TypeError('Students must be an array'); }
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < valu.length; i++) {
      if (typeof valu[i] !== 'string') { throw new TypeError('Students must be an array of strings'); }
    }
    this._students = valu;
  }
}
