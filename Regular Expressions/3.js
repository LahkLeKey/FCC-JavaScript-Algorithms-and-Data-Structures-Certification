/*
    FCC Version - 7.0
    Match a Literal String with Different Possibilities
    Task - 3 / 33
*/

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result = petRegex.test(petString);
