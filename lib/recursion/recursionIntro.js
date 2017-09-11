//1. Write a function that loops through the numbers n down to 0. If you haven't done so try using a while loop to do this.

var countDown = function(n) {
  while (n > 0) {
    console.log(n);
    n--;
  }
};

//2. Next, try looping just like above except using recursion

var countDownRecursive = function(n) {
  while (n > 0) {
    console.log(n);
    return countDownRecursive(--n);
  }
};

console.log(countDownRecursive(10));

//3.Write a function 'exponent' that takes two arguments base, and expo, uses a while loop to return the exponenet value of the base.

var exponent = function(base, expo) {
  var val = base;

  while (expo > 1) {
    val *= base;
    expo--;
  }
  return val;
};

console.log(exponent(5, 2));

//4. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.

var recursiveExponent = function(base, expo) {
  if (expo === 1) return base;

  return base * recursiveExponent(base, --expo);
};

console.log(recursiveExponent(5, 3));

//5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.

var recursiveMultiplier = function(arr, num) {
  if (arr.length === 0) return arr;

  var last = arr.pop();
  recursiveMultiplier(arr, num);
  arr.push(last * num);

  return arr;
};

//6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse

var recursiveReverse = function(arr) {
  return recursiveReverse(arr.slice(1)).concat(a[0]);
};

console.log(recursiveReverse[(0, 1, 2, 3, 4, 5)]);

function reverseArray(a) {
  var len = a.length;
  var halfLen = Math.floor(len / 2);
  for (var i = 0; i < halfLen; i++) {
    var temp = a[i];
    a[i] = a[len - 1 - i];
    a[len - 1 - i] = temp;
  }
  return a;
}

var reverseArrayRecursve = function(arr) {
  var reversed;
  if (arr.length === 0) reversed = [];
  else {
    reversed = reverseArray(arr.slice(0));
    // reversed.push(arr[0]);
  }
  return reversed;
};

console.log(reverseArrayRecursve([0, 1, 2, 3, 4]));
