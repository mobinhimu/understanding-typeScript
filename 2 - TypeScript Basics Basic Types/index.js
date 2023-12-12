function combineColors(color1, color2) {
    if ((color1 === "red" && color2 === "green") ||
        (color1 === "green" && color2 === "red")) {
        return "yellow";
    }
    else if ((color1 === "red" && color2 === "blue") ||
        (color1 === "blue" && color2 === "red")) {
        return "purple";
    }
    else if ((color1 === "green" && color2 === "blue") ||
        (color1 === "blue" && color2 === "green")) {
        return "teal";
    }
    else {
        // Return one of the input colors if there's no valid combination.
        return color1;
    }
}
var result = combineColors("red", "green");
// console.log(result); // Output: "yellow"
// Weekday Enum:
// Define an enum type for the days of the week (e.g., "Monday," "Tuesday," etc.). Then, write a function that takes a day of the week as an argument and returns the next day. Make sure the function correctly handles the transition from Sunday to Monday.
var Weekday;
(function (Weekday) {
    Weekday[Weekday["Saturday"] = 0] = "Saturday";
    Weekday[Weekday["Sunday"] = 1] = "Sunday";
    Weekday[Weekday["Monday"] = 2] = "Monday";
    Weekday[Weekday["Tuesday"] = 3] = "Tuesday";
    Weekday[Weekday["Wednesday"] = 4] = "Wednesday";
    Weekday[Weekday["Thursday"] = 5] = "Thursday";
    Weekday[Weekday["Friday"] = 6] = "Friday";
})(Weekday || (Weekday = {}));
function weekDay(today) {
    return today === Weekday.Friday ? Weekday[0] : Weekday[today + 1];
}
var today = Weekday.Wednesday;
var day = weekDay(today);
function isString(type) {
    return typeof type === "string";
}
function isNumber(type) {
    return typeof type === "number";
}
// const myOutput: OutputType = "Hello Bangladesh";
// const myOutput: OutputType = 50;
// if (isString(myOutput)) {
//   console.log(myOutput.toUpperCase());
// } else {
//   console.log(+myOutput * 50);
// }
function retrunFunction(input, asAnInput) {
    if (asAnInput === "as-string")
        return input.toString().toUpperCase();
    if (asAnInput === "as-number")
        return Math.pow(Number(input), 2);
    if (asAnInput === "as-boolean")
        return false;
}
// console.log(retrunFunction("Bangladesh", "as-string"));
// console.log(retrunFunction(50, "as-number"));
// console.log(retrunFunction(true, "as-boolean"));
function combine(input, input1) {
    return input + input1;
}
var myCombine;
myCombine = combine;
// myCombine = 23;
console.log(myCombine(10, 50));
