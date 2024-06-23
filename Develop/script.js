// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');


// Collect employee data
function collectEmployees() {
  let entermore = true;
  const employees = [];

  while (entermore) {
    let firstName = prompt("Enter First name here:");
    if (firstName === null || firstName.trim() === "") {
      alert('Invalid information. Enter again please!');
      continue;
    } else {
      firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
  
    }

    let lastName = prompt("Enter Last name here:");
    if (lastName === null || lastName.trim() === "") {
      alert('Invalid information. Enter again please!');
      continue;
    } else {
      lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
    }

    let salary = prompt("Enter Salary here:");
    if (salary === null || salary.trim() === "" || isNaN(salary) || Number(salary) < 0) {
      alert('Invalid information. Enter again please!');
      continue;
    } else {
      salary = parseFloat(salary.trim());
    }

    employees.push({ firstName, lastName, salary });

    entermore = confirm("Do you want to enter more employees?");
  }
  return employees;
}

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  const totalSalary = employeesArray.reduce((sum, employee) => sum + employee.salary, 0);
  const averageSalary = totalSalary / employeesArray.length;

  const averageSalaryStr = averageSalary.toFixed(2);
  const averageSalaryInt = averageSalary.toFixed(0)

  // Display the average salary based on the decimal or without decimal
  if (averageSalaryStr.endsWith('.00')) {
    console.log(`The average employee salary between our employee(s) is $${averageSalaryInt}`);
  } else {
    console.log(`The average employee salary between our employee(s) is $${averageSalaryStr}`);
  }
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomIndex];

  console.log (`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName} , our random drawing winner!`)


};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement('td');
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement('td');
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
