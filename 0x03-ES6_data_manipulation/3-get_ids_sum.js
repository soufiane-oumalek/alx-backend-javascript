export default function getStudentIdsSum(ListStudents) {
  return ListStudents.reduce((vlu, student) => vlu + student.id, 0);
}
