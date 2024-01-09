export default function updateStudentGradeByCity(listStudents, city, newGrades) {
  return listStudents.filter((student) => student.location === city).map((student) => {
    const gradeobjet = newGrades.find((grade) => student.id === grade.studentid);
    const grade = gradeobjet ? gradeobjet.grade : 'N/A';
    return { ...student, grade };
  });
}
