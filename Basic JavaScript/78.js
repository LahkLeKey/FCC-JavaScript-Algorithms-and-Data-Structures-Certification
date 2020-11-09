/*
    FCC Version - 7.0
    Multiple Identical Options in Switch Statements
    Task - 78 / 111
    Goal : Write a switch statement to set answer for the following ranges:
    1-3 - "Low"
    4-6 - "Mid"
    7-9 - "High"
*/

function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
      answer = "Low";
      break;
    case 2:
      answer = "Low";
      break;
    case 3:
      answer = "Low";
      break;
    case 4:
      answer = "Mid";
      break;
    case 5:
      answer = "Mid";
      break;
    case 6:
      answer = "Mid";
      break;
    case 7:
      answer = "High";
      break;
    case 8:
      answer = "High";
      break;
    case 9:
      answer = "High";
      break;
  }
  // Only change code above this line
  return answer;
}

sequentialSizes(1);
