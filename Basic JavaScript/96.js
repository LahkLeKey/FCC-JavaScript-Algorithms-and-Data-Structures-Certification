/*
    FCC Version - 7.0
    Iterate with JavaScript While Loops
    Task - 96 / 111
    Goal : Add the numbers 5 through 0 (inclusive) in descending order to myArray using a while loop.
*/

// Setup
var myArray = [];

// Only change code below this line
var i = 0;
while (i < 6) {
  myArray.unshift(i);
  i++;
}

console.log(myArray);
