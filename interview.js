function harmlessRandsomNote(noteText, magazineText) {
  var noteArr = noteText.split(' ');
  var magArr = magazineText.split(' ');
  var hash = {};
  var noteIsPossible = true;

  magArr.forEach(word => {
    if (!hash[word]) hash[word] = 0;
    hash[word]++;
  });

  noteArr.forEach(word => {
    if (hash[word]) {
      hash[word]--;
      if (hash[word] < 0) noteIsPossible = false;
    } else noteIsPossible = false;
  });

  return noteIsPossible;
}

function caesarCipher(str, num) {
  var lowerCaseString = str.toLowerCase();
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var newString = '';

  for (var i = 0; i < lowerCaseString.length; i++) {
    var curr = lowerCaseString[i];
    if (curr === ' ') {
      newString += curr;
      continue;
    }

    var currIndex = alphabet.indexOf(curr);
    var newIndex = currIndex + num;
    if (newIndex > 25) newIndex = newIndex - 26;
    if (newIndex < 0) newIndex = 26 + newIndex;

    if (str[i] === str[i].toUpperCase()) {
      newString += alphabet[newIndex].toUpperCase();
    } else newString += alphabet[newIndex];
  }

  return newString;
}

function reverseWords(str) {
  var wordsArray = str.split(' ');
  var result = [];

  wordsArray.forEach(word => {
    var reversedWord = '';
    for (var i = word.length - 1; i >= 0; i--) {
      reversedWord += word[i];
    }
    result.push(reversedWord);
  });
  return result.join(' ');
}

// function reverseArrayInPlace(arr) {
//   for (var i = 0; i < arr.length / 2; i++) {
//     var temp = arr[i];
//     arr[i] = arr[arr.length - 1 - i];
//     arr[arr.length - 1 - i] = temp;
//   }
//   return arr;
// }
