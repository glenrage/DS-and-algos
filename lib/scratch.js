function isPrime(n) {
  var divisor = 2;

  while (n > divisor) {
    if (n % divisor === 0) {
      return false;
    } else divisor++;
  }
  return true;
}

function primeFactors(n) {
  var factors = [],
    divisor = 2;

  while (n > 2) {
    if (n % divisor === 0) {
      factors.push(divisor);
      n = n / divisor;
    } else {
      divisor++;
    }
  }

  return factors;
}

function fibonacci(n) {
  var fibo = [0, 1];

  if (n <= 2) return 1;

  for (var i = 2; i <= n; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }

  return fibo[n];
}

function fibonacciRecursive(n) {
  if (n <= 1) return n;
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

function greatestCommonDivisor(a, b) {
  var greatest = 2;
  var greatestDivisor = 1;

  if (a < 2 || b < 2) return 1;
}
