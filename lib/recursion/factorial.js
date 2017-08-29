/*
Implement factorial.

factorial(5) => 5*4*3*2*1 => 120
*/

function rFactorial(n) {
  if (n === 1) return 1;

  return rFactorial(n - 1) * n;
}

function iFactorial(n) {
  var product = 1;
  for (var i = 1; i <= n; i++) {
    product *= i;
  }
  return product;
}
