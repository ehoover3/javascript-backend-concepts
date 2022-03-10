const React = require("react");
const Default = require("./layouts/Default");

function employeesList({ employees, index }) {
  return (
    <Default>
      <h1>List of Employees</h1>

      {/* Option A (replaces Option B) - use map method */}
      {employees.map((employee, index) => {
        return (
          <li key={index}>
            <a href={`/employees/${index}`}>{employee.name}</a>
          </li>
        );
      })}

      {/* Option B (is replaced by Option A) - hard code each employee */}
      {/* <li><a href={`/employees/0`}>{employees[0].name}</a></li>
        <li><a href={`/employees/1`}>{employees[1].name}</a></li>
        <li><a href={`/employees/2`}>{employees[2].name}</a></li>
        <li><a href={`/employees/3`}>{employees[3].name}</a></li> */}
    </Default>
  );
}

module.exports = employeesList;
