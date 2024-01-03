export default function createReportObject(employeesList) {
  function getNumberOfDepartments(employeesList) {
    return Object.keys(employeesList).length;
  }

  return {
    allEmployees: { ...employeesList },
    getNumberOfDepartments,
  };
}
