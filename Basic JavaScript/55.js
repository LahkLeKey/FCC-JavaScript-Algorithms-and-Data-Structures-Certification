/*
    FCC Version - 7.0
    Stand in Line
    Task - 55 / 111
    Goal : Write a function nextInLine which takes an array (arr) and a number (item) as arguments.

    Add the number to the end of the array, then remove the first element of the array.

    The nextInLine function should then return the element that was removed.
*/

function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item);
  return arr.shift();
  // Only change code above this line
}

// Setup
var testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
