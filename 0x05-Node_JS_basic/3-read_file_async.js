const fs = require('fs');

function countStudents(path) {
  const promise = (result, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) reject(Error('Cannot load the database'));
      const msgs = [];
      let msg;
      const content = data.toString().split('\n');
      let students = content.filter((item) => item);
      students = students.map((item) => item.split(','));
      const numStudents = students.length ? students.length - 1 : 0;
      msg = `Number of students: ${numStudents}`;
      console.log(msg);
      msgs.push(msg);
      const subjects = {};
      for (const i in students) {
        if (i !== 0) {
          if (!subjects[students[i][3]]) subjects[students[i][3]] = [];
          subjects[students[i][3]].push(students[i][0]);
        }
      }
      delete subjects.subject;
      for (const key of Object.keys(subjects)) {
        msg = `Number of students in ${key}: ${
          subjects[key].length
        }. List: ${subjects[key].join(', ')}`;
        console.log(msg);
        messages.push(msg);
      }
      result(msgs);
    });
  };
  return new Promise(promise);
}
module.exports = countStudents;
