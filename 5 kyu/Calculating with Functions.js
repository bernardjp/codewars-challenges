/*
This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3

Requirements:

  There must be a function for each number from 0 ("zero") to 9 ("nine")
  There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
  Each calculation consist of exactly one operation and two numbers
  The most outer function represents the left operand, the most inner function represents the right operand
  Division should be integer division. For example, this should return 2, not 2.666666...:

eight(dividedBy(three()));
*/

function calculation(calcCB, num) {
  if(calcCB) return calcCB(num);
  return num;
}

function zero(operation = null) {
  return calculation(operation, 0);
}
function one(operation = null) {
  return calculation(operation, 1);
}
function two(operation = null) {
  return calculation(operation, 2);
}
function three(operation = null) {
  return calculation(operation, 3);
}
function four(operation = null) {
  return calculation(operation, 4);
}
function five(operation = null) {
  return calculation(operation, 5);
}
function six(operation = null) {
  return calculation(operation, 6);
}
function seven(operation = null) {
  return calculation(operation, 7);
}
function eight(operation = null) {
  return calculation(operation, 8);
}
function nine(operation = null) {
  return calculation(operation, 9);
}

function plus(num1) {
  return (num2) => parseInt(num2 + num1);
}
function minus(num1) {
  return (num2) => parseInt(num2 - num1);
}
function times(num1) {
  return (num2) => parseInt(num2 * num1);
}
function dividedBy(num1) {
  return (num2) => parseInt(num2 / num1);
}