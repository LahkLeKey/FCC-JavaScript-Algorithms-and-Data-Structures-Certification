/*
    FCC Version - 7.0
    Match Everything But Letters and Numbers
    Task - 19 / 33
*/

let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;
