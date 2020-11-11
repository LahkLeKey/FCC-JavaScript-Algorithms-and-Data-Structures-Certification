/*
    FCC Version - 7.0
    Check For Mixed Grouping of Characters
    Task - 30 / 33
*/

let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor).*Roosevelt/;
let result = myRegex.test(myString);
