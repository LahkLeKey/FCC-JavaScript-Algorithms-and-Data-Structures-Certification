/*
    FCC Version - 7.0
    Catch Arguments Passed in the Wrong Order When Calling a Function
    Task - 9 / 12
*/

function raiseToPower(b, e) {
  return Math.pow(b, e);
}

let base = 2;
let exp = 3;
let power = raiseToPower(base, exp);
console.log(power);
