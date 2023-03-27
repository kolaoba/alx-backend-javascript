import getStudentsByLocation from './2-get_students_by_loc';

const updateStudentGradeByCity = (students, city, newGrades) => {
  if (!Array.isArray(students)) {
    return [];
  }
  const studentsByLocation = getStudentsByLocation(students, city);
  const updatedStudents = studentsByLocation.map((student) => {
    const studentGrade = newGrades.find((grade) => grade.studentId === student.id);
    if (studentGrade) {
      return { ...student, grade: studentGrade.grade };
    }
    return { ...student, grade: 'N/A' };
  });
  return updatedStudents;
};

export default updateStudentGradeByCity;
