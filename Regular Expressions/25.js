/*
    FCC Version - 7.0
    Specify Upper and Lower Number of Matches
    Task - 25 / 33
*/

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/; // Change this line
let result = ohRegex.test(ohStr);
