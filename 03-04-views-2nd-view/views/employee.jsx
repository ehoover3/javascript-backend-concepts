const React = require("react");

function employee({ employees, index }) {
  return (
    <html>
      <head>
        <title>My Project</title>
      </head>
      <body>
        <h1>Employee Info</h1>
        <li>Name: {employees[index].name}</li>
        <li>Job:  {employees[index].job}</li>
        <li>Pay:  ${employees[index].pay}</li>
        <br /> {/* <br /> creates a line break */}
        <div>
          <a href={`/employees`}>Return to Employees List</a>
        </div>
      </body>
    </html>
  );
}

module.exports = employee;
