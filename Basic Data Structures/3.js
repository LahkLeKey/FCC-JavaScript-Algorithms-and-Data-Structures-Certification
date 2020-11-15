/*
    FCC Version - 7.0
    Add Items to an Array with push() and unshift()
    Task - 3 / 20
*/

function mixedNumbers(arr) {
  // Only change code below this line
  arr.push(7, "VIII", 9);
  arr.unshift("I", 2, "three");
  // Only change code above this line
  return arr;
}

console.log(mixedNumbers(["IV", 5, "six"]));
