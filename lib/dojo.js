//Write a program that would print all the odd numbers from 1 to 1000
function oddNum(){
  for(let i = 1; i < 1000; i = i + 2) {
    console.log(i)
  }
}

//write a program that would print the sum of all the odd numbers from 1 to 5000
function oddNum5k() {
  for(let i = 1; i < 5000; i = i + 2) {
    console.log(i);
  }
}

// Given an array X say [1,3,5,7,9,13], write a program that would iterate through each member of the array and print each value on the screen
function simplePrint(arr) {
  return arr.forEach(ar => console.log(ar));
}

// Given an array with multiple values (e.g. [-3, 3, 5, 7]), write a program that prints the maximum number in the array. (The best way to do this is to have the computer go through each number, one at a time, and to update the value in a variable called 'maximum'
function findMax(arr) {
  let max = arr[0];
  for(let i = 0; i < arr.length; i++) {
    if(max < arr[i]) {
      max = arr[i]
    }
    console.log(max)
  }
}

// Given an array with multiple values (e.g. [1,3,5,7,20]),
// write a program that prints the average of the values in the array.
function avgVal(arr) {
  let sum = 0;
  let average;
  for(let i = 0; i < arr.length; i++) {
    sum = sum + arr[i]
    average = sum / arr.length
    console.log(average)
  }
}

// Write a program that creates an array 'Y' that contains all the odd numbers between 1 to 255. When the program is done, 'y' should have the value of [1, 3, 5, 7, ... 255]. Again, make sure you come up with a simple base case and write instructions to solve that base case first and then test your instructions for other complicated cases. (you can do this using a simple for loop.  You are allowed to use .push method)

function pushOdd(){
  let result = [];
  for(let i = 0; i < 256; i++) {
    if(i%2) {
      result.push(i)
    }
  }
  console.log(result)
}

// Given an array x (e.g. [1,5, 10, -2]), create an algorithm (sets of instructions) that replaces any negative number with the value of 0.  When the program is done x should have no negative values (e.g. [1, 5, 10, 0]).
function filterNeg(arr){
  let result = []
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] < 0) {
      arr[i] = 0
      result.push(i)
    }
  }
  console.log(arr)
}
