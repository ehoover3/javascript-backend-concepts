const React = require("react");

function employeesList({ employees }) {
  return (
    <html>
      <head>
        <title>My Project</title>
      </head>
      <body>
        <h1>List of Employees</h1>
        <li><a href={`/employees/0`}>{employees[0].name}</a></li>
        <li><a href={`/employees/1`}>{employees[1].name}</a></li>
        <li><a href={`/employees/2`}>{employees[2].name}</a></li>
        <li><a href={`/employees/3`}>{employees[3].name}</a></li>
      </body>
    </html>
  );
}

module.exports = employeesList;
