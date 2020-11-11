/*
    FCC Version - 7.0
    Find One or More Criminals in a Hunt
    Task - 15 / 33
*/

let crowd = "P1P2P3P4P5P6CCCP7P8P9";

let reCriminals = /C+/; // Change this line

let matchedCriminals = crowd.match(reCriminals);
console.log(matchedCriminals);
