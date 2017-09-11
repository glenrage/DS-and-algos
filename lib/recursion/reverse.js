/*
Implement a function that will reverse a string recursively.

reverse('abcdefg')
=> 'gfedcba'
*/

var reverseString = function(str) {
  if (str.length === 0) return '';

  return str[str.length - 1] + reverseString(str.substr(0, str.length - 1));
};

console.log(reverseString('abcdef'));
