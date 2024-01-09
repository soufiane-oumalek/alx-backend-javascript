export default function updateStudentGradeByCity(listStudents, city, newGrades) {
  return listStudents.filter((student) => student.location === city).map((student) => {
    const gradeobject = newGrades.find((grade) => student.id === grade.studentId);
    const grade = gradeobject ? gradeobject.grade : 'N/A';
    return { ...student, grade };
  });
}
