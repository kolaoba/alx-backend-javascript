const fs = require('fs');

function countStudents(filepath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, 'utf8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
      } else {
        const lines = data.split('\n');
        const students = lines.length - 2;
        console.log(`Number of students: ${students}`);
        const cs = lines.filter((field) => field.endsWith('CS'));
        cs.forEach((student, index) => {
          cs[index] = student.split(',')[0].trim();
        });
        console.log(`Number of students in CS: ${cs.length}. List: ${cs.join(', ')}`);
        const swe = lines.filter((field) => field.endsWith('SWE'));
        swe.forEach((student, index) => {
          swe[index] = student.split(',')[0].trim();
        });
        console.log(`Number of students in SWE: ${swe.length}. List: ${swe.join(', ')}`);

        resolve();
      }
    });
  });
}
