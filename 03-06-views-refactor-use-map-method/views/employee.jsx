const React = require("react");
const Default = require('./layouts/Default')

function employee({ employees, index }) {
  return (
    <Default>
      <h1>Employee Info</h1>
      <li>Name: {employees[index].name}</li>
      <li>Job:  {employees[index].job}</li>
      <li>Pay:  ${employees[index].pay}</li>
      <br /> {/* <br /> creates a line break */}
      <div>
        <a href={`/employees`}>Return to Employees List</a>
     </div> 
  </Default>
  );
}

module.exports = employee;
