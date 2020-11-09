/*
    FCC Version - 7.0
    Using Objects for Lookups
    Task - 90 / 111
*/

// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
  var lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank",
  };
  result = lookup[val];

  // Only change code above this line
  return result;
}

phoneticLookup("charlie");
