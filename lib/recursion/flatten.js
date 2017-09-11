/*
Implement a function that flattens a nested array.

flatten([1,[2],[3, [[4]]]]);
=> [1,2,3,4]
*/

function flatten(arr) {
  var result = [];
  arr.forEach(function(el) {
    if (!Array.isArray(el)) {
      result.push(el);
    } else {
      result = result.concat(flatten(el));
    }
  });

  return result;
}

console.log(flatten([1, [2], [3, [[4]]]]));

function isPalindrome(str) {
  for (var i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) return false;
  }
  return true;
}
