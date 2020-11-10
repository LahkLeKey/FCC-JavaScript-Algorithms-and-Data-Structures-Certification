/*
    FCC Version - 7.0
    Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements
    Task - 15 / 31
*/

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
  "use strict";
  // Only change code below this line
  const [, , ...arr] = list;
  // Only change code above this line
  return arr;
}
const arr = removeFirstTwo(source);
