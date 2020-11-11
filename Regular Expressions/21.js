/*
    FCC Version - 7.0
    Match All Non-Numbers
    Task - 21 / 33
*/

let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result = movieName.match(noNumRegex).length;
