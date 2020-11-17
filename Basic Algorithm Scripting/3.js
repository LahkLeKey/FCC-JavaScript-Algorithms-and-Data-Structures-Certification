/*
    FCC Version - 7.0
    Factorialize a Number
    Task - 3 / 16
*/

function factorialize(num) {
  if (num === 0) return 1;

  return num * factorialize(num - 1);
}

factorialize(5);
