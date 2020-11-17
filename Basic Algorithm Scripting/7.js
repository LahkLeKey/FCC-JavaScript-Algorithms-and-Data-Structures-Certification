/*
    FCC Version - 7.0
    Repeat a String Repeat a String
    Task - 7 / 16
*/

function repeatStringNumTimes(str, num) {
  if (num < 1) return "";
  return str + repeatStringNumTimes(str, num - 1);
}

repeatStringNumTimes("abc", 3);
