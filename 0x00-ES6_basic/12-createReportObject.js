export default function createReportObject(employeesList) {
  return {
    allEmployes: { ...employeesList },
    getNumberOfDepartment(employeesList) {
      return Object.keys(employeesList).length;
    },
  };
}
