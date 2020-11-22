/*
    FCC Version - 7.0
    Sum All Odd Fibonacci Numbers
    Task - 12 / 21
*/

function sumFibs(num) {
  let x = 0,
    y = 1,
    result = 0;

  while (y <= num) {
    if (y % 2 !== 0) result += y;
    y += x;
    x = y - x;
  }

  return result;
}

sumFibs(4);
