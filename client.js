/* jshint esversion: 6*/

console.log('js');
let salaries = [];
let totalMonthlySalary;
$(document).ready(readyNow); {}

function readyNow() {
  console.log("JQ");
  $('#submit').on('click', addEmployee);
}

function addEmployee() {
  console.log('adding employee');
  let fName = $('#firstName').val();
  let lName = $('#lastName').val();
  let id = $('#idNumber').val();
  let title = $('#jobTitle').val();
  let annualSalary = $('#salary').val();
  salaries.push(parseInt(annualSalary));
  //console.log(salaries);
  let tableRow = ('<tr><td>' + fName + '</td><td>' + lName + '</td><td>' +
    id + '</td><td>' + title + '</td><td>' + annualSalary + '</td></tr>');
  $('#employeeTable').append(tableRow);
  $('.input').val('');
  totalSalaries(salaries);
}

function totalSalaries(x) {
  let payment = 0;
  for (let i = 0; i < x.length; i++) {
    payment += x[i];
    console.log(payment);
    }
      let monthlyPayment = payment/12;
      console.log(monthlyPayment);
      //$('#totalMoney').text('Total Monthly: ', monthlyPayment);
  }
