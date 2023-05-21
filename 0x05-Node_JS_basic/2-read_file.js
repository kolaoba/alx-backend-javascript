const fs = require('fs');

function countStudents(filepath) {
  try {
    const db = fs.readFileSync(filepath, 'utf-8');
    // console.log(db)
    const lines = db.split('\n');
    // console.log(lines.length)
    const students = lines.length - 2;
    console.log(`Number of students: ${students}`);
    const cs = lines.filter((field) => field.endsWith('CS'));
    // console.log(cs);
    cs.forEach((student, index) => {
      cs[index] = student.split(',')[0].trim();
    });
    // console.log(cs)
    console.log(`Number of students in CS: ${cs.length}. List: ${cs.join(', ')}`);
    const swe = lines.filter((field) => field.endsWith('SWE'));
    swe.forEach((student, index) => {
      swe[index] = student.split(',')[0].trim();
    });
    console.log(`Number of students in SWE: ${swe.length}. List: ${swe.join(', ')}`);
  } catch (err) {
    throw Error('Cannot load the database');
  }
}
module.exports = countStudents;
