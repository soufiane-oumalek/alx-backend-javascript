export default function updateStudentGradeByCity(listStudents, targetLocation, newGrades) {
  const updatedStudents = [];

  for (const student of listStudents) {
    if (student.location === targetLocation) {
      const matchedGrade = newGrades.find(({ studentId }) => studentId === student.id);
      const { grade = 'N/A' } = matchedGrade || {};
      updatedStudents.push({ ...student, grade });
    }
  }

  return updatedStudents;
}
