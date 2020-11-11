/*
    FCC Version - 7.0
    Reuse Patterns Using Capture Groups
    Task - 31 / 33
*/

let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/;
let result = reRegex.test(repeatNum);
