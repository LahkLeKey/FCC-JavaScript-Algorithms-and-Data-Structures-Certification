/*
    FCC Version - 7.0
    Find the Longest Word in a String
    Task - 4 / 16
*/

function findLongestWordLength(str) {
  return Math.max(...str.split(" ").map((word) => word.length));
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
