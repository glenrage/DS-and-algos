// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

//first for loop to iterate length
//check

function steps(n) {
  for (var row = 0; row < n; row++) {
    let result = '';
    for (var column = 0; column < n; column++) {
      if (column <= row) {
        result += '#';
      } else {
        result += ' ';
      }
    }
    console.log(result);
  }
}

module.exports = steps;
