/*
    FCC Version - 7.0
    Search and Replace
    Task - 7 / 21
*/

function myReplace(str, before, after) {
  after = after[0].toLowerCase() + after.substring(1);
  if (/^[A-Z]/.test(before)) {
    after = after[0].toUpperCase() + after.substring(1);
  }

  return str.replace(before, after);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
