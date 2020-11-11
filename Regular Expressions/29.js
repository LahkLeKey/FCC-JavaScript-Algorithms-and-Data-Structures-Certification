/*
    FCC Version - 7.0
    Positive and Negative Lookahead
    Task - 29 / 33
*/

let sampleWord = "astronaut";
var pwRegex = /^\D(?=\w{5})(?=\w*\d{2})/; // Change this line
let result = pwRegex.test(sampleWord);
