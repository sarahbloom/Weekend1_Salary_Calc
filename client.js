/* jshint esversion: 6*/

console.log('js');
let salaries = [];
let totalMonthlySalary;
$(document).ready(readyNow); {}

function readyNow() {
  console.log("JQ");
  $('#submit').on('click', addEmployee);
  $('#delete').on('click', removeEmployee);
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

function totalSalaries(salaryArray) {
  let payment = 0;
  for (let i = 0; i < salaryArray.length; i++) {
    payment += salaryArray[i];
    console.log(payment);
    }
      let monthlyPayment = payment/12;{
      console.log(monthlyPayment);
      $('#totalMoney').text('Total Monthly Payment: $' + monthlyPayment.toFixed(2));
      }
        if ( monthlyPayment > 20000 ){
        $('#total').css('background-color', 'red ');
        }
}

function removeEmployee() {
  console.log('in remove employee');
  $("#table tr:last").remove();
}
