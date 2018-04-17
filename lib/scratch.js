function isPrime(n) {
  // var divisor = 2;
  //
  // while (n > divisor) {
  //   if (n % divisor === 0) {
  //     return false;
  //   } else divisor++;
  // }
  // return true;
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

function isPalindrome(str) {
  str = str.toLowerCase();
  var charArray = str.split('');
  var validChars = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var letters = [];

  charArray.forEach(char => {
    if (validChars.indexOf(char) > -1) letters.push(char);
  });

  if (letters.join('') === charArray.reverse().join('')) {
    return true;
  } else return false;
}

function reverse(str) {
  // var lowered = str.toLowerCase();
  var wordsArr = str.split(' ');
  var reversedWords = [];

  wordsArr.forEach(word => {
    var reversedWord = '';
    for (var i = word.length - 1; i >= 0; i--) {
      reversedWord += word[i];
    }
    reversedWords.push(reversedWord);
  });

  return reversedWords.join(' ');
}

function reverseArray(arr) {
  for (var i = 0; i < arr.length / 2; i++) {
    var temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr;
}

function getMean(arr) {
  var sum = 0;
  arr.forEach(num => {
    sum += num;
  });

  var mean = sum / arr.length;
  return mean;
}

function getMedian(arr) {
  arr.sort(function(a, b) {
    return a - b;
  });
  var median;

  if (arr.length % 2 !== 0) {
    median = arr[Math.floor(arr.length / 2)];
  } else {
    var midOne = arr[arr.length / 2 - 1];
    var midTwo = arr[arr.length / 2];
    median = (midOne + midTwo) / 2;
  }
  return median;
}

function getMode(arr) {
  var hash = {};
  arr.forEach(num => {
    if (!hash[num]) hash[num] = 0;
    hash[num]++;
  });

  var maxFreq = 0;
  var modes = [];

  for (var num in hash) {
    if (hash[num] > maxFreq) {
      modes = [num];
      maxFreq = hash[num];
    } else if (hash[num] === maxFreq) {
      modes.push(num);
    }

    if (modes.length === Object.keys(hash).length) modes = [];
  }

  return modes;
}

function meanMedianMode(arr) {
  return {
    mean: getMean(arr),
    median: getMedian(arr),
    mode: getMode(arr)
  };
}

meanMedianMode([1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9]);

function twoSum(arr, sum) {
  var result = [];
  var hash = [];

  for (var i = 0; i < arr.length; i++) {
    var currIndex = arr[i];
    var counterPart = sum - currIndex;

    if (hash.indexOf(counterPart) !== -1) {
      result.push([currIndex, counterPart]);
    }

    hash.push(currIndex);
  }

  return result;
}

twoSum([1, 6, 4, 5, 3, 3], 7);

function binarySearch(arr, key) {
  var middleIndex = Math.floor(arr.length / 2);
  var middleElm = arr[middleIndex];

  if (middleElm === key) return true;
  else if (middleElm < key && arr.length > 1) {
    return binarySearch(arr.splice(middleIndex, arr.length), key);
  } else if (middleElm > key && arr.length > 1) {
    return binarySearch(arr.splice(0, arr.length), key);
  } else return false;
}

binarySearch([3, 2, 5, 6, 7, 9, 8, 56, 312, 32], 56);

function fibMemo(index, cache) {
  cache = cache || [];

  if (cache[index]) return cache[index];
  else {
    if (index < 3) return 1;
    else {
      cache[index] = fibMemo(index - 1, cache) + fibMemo(index - 2);
    }
  }
}

function sieve(num) {
  var primes = [];
  for (var i = 0; i <= num; i++) {
    primes[i] = true;
  }

  primes[0] = false;
  primes[1] = false;

  for (var i = 2; i <= Math.sqrt(num); i++) {
    for (var j = 2; j * i <= num; j++) {
      primes[i * j] = false;
    }
  }
  var result = [];

  for (var t = 0; t < primes.length; t++) {
    if (primes[t] === true) result.push(t);
  }
  return result;
}

sieve(100);

function bubbleSort(arr) {
  for (var i = arr.length; i > 0; i--) {
    for (var j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

bubbleSort([4, 5, 1, 8, 9, 3]);
