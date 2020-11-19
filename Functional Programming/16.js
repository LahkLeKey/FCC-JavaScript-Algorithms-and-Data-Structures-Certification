/*
    FCC Version - 7.0
    Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem
Now that you have worked through a few chal
    Task - 16 / 24
*/

const squareList = (arr) => {
  // Only change code below this line
  return arr
    .filter((num) => num > 0 && num % parseInt(num) === 0)
    .map((num) => Math.pow(num, 2));
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
