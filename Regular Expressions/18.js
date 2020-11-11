/*
    FCC Version - 7.0
    Match All Letters and Numbers
    Task - 18 / 33
*/

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;
