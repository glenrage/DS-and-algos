/*
Write a function that takes two numbers and returns the greatest common divisor.
*/

function greatestCommonDivisor(num1, num2) {
  var divisor = 2;
  var greatest = 1;

  if (num1 < 2 || num2 < 2) {
    return 1;
  }

  while (num1 >= divisor && num2 >= divisor) {
    if(num1 % divisor === 0 && num2 % divisor === 0) {
      greatest = divisor;
    }
    divisor ++;
  }
  return greatest;
}
