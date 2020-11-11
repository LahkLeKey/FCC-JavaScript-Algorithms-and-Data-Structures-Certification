/*
    FCC Version - 7.0
    Remove Whitespace from Start and End
    Task - 33 / 33
*/

let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let result = hello.replace(wsRegex, ""); // Change this line
