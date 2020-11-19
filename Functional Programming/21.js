/*
    FCC Version - 7.0
    Apply Functional Programming to Convert Strings to URL Slugs
    Task - 21 / 24
*/

// Only change code below this line
function urlSlug(title) {
  return title.toLowerCase().trim().split(/\s+/).join("-");
}
// Only change code above this line
