/*
    FCC Version - 7.0
    Restrict Possible Usernames
    Task - 22 / 33
*/

let username = "JackOfAllTrades";
let userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i; // Change this line
let result = userCheck.test(username);
