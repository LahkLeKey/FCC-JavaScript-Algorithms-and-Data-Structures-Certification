/*
    FCC Version - 7.0
    Title Case a Sentence
    Task - 11 / 16
*/

function titleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase());
}

titleCase("I'm a little tea pot");
