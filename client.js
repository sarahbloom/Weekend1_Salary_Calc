/* jshint esversion: 6*/

console.log('js');

$(document).ready(readyNow); {
}

function readyNow() {
  console.log("JQ");
  $('#submit').on('click', addEmployee);
}

function addEmployee(){
  console.log('adding employee');
  let fName = $('#firstName').val();
  let lName = $('#lastName').val();
  let id = $('#idNumber').val();
  let title = $('#jobTitle').val();
  let annualSalary = $('#salary').val();
  let tableRow = ('<tr><td>' + fName + '</td><td>' + lName + '</td><td>' +
                  id + '</td><td>' +title + '</td><td>' + annualSalary + '</td></tr>');
  $('#employeeTable').append(tableRow);
}
