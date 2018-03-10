/* jshint esversion: 6*/

console.log('js');
let salaries = [];
let employeeArray = [];
let totalMonthlySalary;
class Employee {
  constructor(fName, lName, id, title, annualSalary) {
    this.fName = fName;
    this.lName = lName;
    this.id = id;
    this.title = title;
    this.annualSalary = annualSalary;
  }
}

const employee1 = new Employee('Jessica', 'Jones', '234', "detective", '48000');
const employee2 = new Employee('Mary', 'Poppins', '1882', 'nanny', '36000');
const employee3 = new Employee('Charlie', 'Brown', '2346', 'teacher', '36000');
const employee4 = new Employee('Jack', 'Sprat', '980', 'cook', '360000');

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
  console.log(fName);
  addToArray(fName, lName, id, title, annualSalary);
}

function addToArray(fName, lName, id, title, annualSalary) {
  let addedEmployee = new Employee(fName, lName, id, title, annualSalary);
  console.log(addedEmployee);
  employeeArray.push($(addedEmployee));
}

function removeEmployee() {
  console.log('in remove employee');
  $("#table tr:last").remove();
}
function totalSalaries(salaryArray) {
  let payment = 0;
  for (let i = 0; i < salaryArray.length; i++) {
    payment += salaryArray[i];
  }
  let monthlyPayment = payment / 12; {
    console.log(monthlyPayment);
    $('#totalMoney').text('Total Monthly Payment: $' + monthlyPayment.toFixed(2));
  }
  if (monthlyPayment > 20000) {
    $('#total').css('background-color', 'red ');
  }
}
