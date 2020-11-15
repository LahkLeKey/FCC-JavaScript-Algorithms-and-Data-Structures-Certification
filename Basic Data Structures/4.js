/*
    FCC Version - 7.0
    Remove Items from an Array with pop() and shift()
    Task - 4 / 20
*/

function popShift(arr) {
  let popped = arr.pop(); // Change this line
  let shifted = arr.shift(); // Change this line
  return [shifted, popped];
}

console.log(popShift(["challenge", "is", "not", "complete"]));
