/*
    FCC Version - 7.0
    Confirm the Ending
    Task - 6 / 16
*/

function confirmEnding(str, target) {
  return new RegExp(target + "$", "i").test(str);
}

confirmEnding("Bastian", "n");
