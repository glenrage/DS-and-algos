// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const hash = {}
  let max = 0;
  let maxChar = '';


  for(let char of str) {
    if(hash[char]) hash[char] ++;
    else hash[char] = 1;
  }
  console.log(hash)

  for(let char in hash) {
    if(hash[char] > max) {
      max = hash[char];
      maxChar = char;
    }
  }

  return maxChar;
}

module.exports = maxChar;
