/*
    FCC Version - 7.0
    Specify Only the Lower Number of Matches
    Task - 26 / 33
*/

let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Change this line
let result = haRegex.test(haStr);
