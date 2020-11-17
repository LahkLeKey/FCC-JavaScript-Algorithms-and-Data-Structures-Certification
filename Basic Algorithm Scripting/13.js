/*
    FCC Version - 7.0
    Falsy Bouncer
    Task - 13 / 16
*/

function bouncer(arr) {
  return arr.filter(Boolean);
}

bouncer([7, "ate", "", false, 9]);
