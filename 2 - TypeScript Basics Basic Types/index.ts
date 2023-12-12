type Color = "red" | "green" | "blue";

function combineColors(color1: Color, color2: Color) {
  if (
    (color1 === "red" && color2 === "green") ||
    (color1 === "green" && color2 === "red")
  ) {
    return "yellow";
  } else if (
    (color1 === "red" && color2 === "blue") ||
    (color1 === "blue" && color2 === "red")
  ) {
    return "purple";
  } else if (
    (color1 === "green" && color2 === "blue") ||
    (color1 === "blue" && color2 === "green")
  ) {
    return "teal";
  } else {
    // Return one of the input colors if there's no valid combination.
    return color1;
  }
}

const result = combineColors("red", "green");
// console.log(result); // Output: "yellow"

// Weekday Enum:
// Define an enum type for the days of the week (e.g., "Monday," "Tuesday," etc.). Then, write a function that takes a day of the week as an argument and returns the next day. Make sure the function correctly handles the transition from Sunday to Monday.

enum Weekday {
  Saturday,
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
}

function weekDay(today: number) {
  return today === Weekday.Friday ? Weekday[0] : Weekday[today + 1];
}

const today = Weekday.Wednesday;
const day = weekDay(today);

// console.log(`Today Is ${Weekday[today]}, And Next Day Is ${day}`);

type OutputType = string | number | boolean;
type AsAnInput = "as-string" | "as-number" | "as-boolean";

function isString(type: OutputType) {
  return typeof type === "string";
}

function isNumber(type: OutputType) {
  return typeof type === "number";
}

// const myOutput: OutputType = "Hello Bangladesh";
// const myOutput: OutputType = 50;

// if (isString(myOutput)) {
//   console.log(myOutput.toUpperCase());
// } else {
//   console.log(+myOutput * 50);
// }

function retrunFunction(input: OutputType, asAnInput: AsAnInput) {
  if (asAnInput === "as-string") return input.toString().toUpperCase();
  if (asAnInput === "as-number") return Number(input) ** 2;
  if (asAnInput === "as-boolean") return false;
}

// console.log(retrunFunction("Bangladesh", "as-string"));
// console.log(retrunFunction(50, "as-number"));
// console.log(retrunFunction(true, "as-boolean"));

function combine(input: number, input1: number) {
  return input + input1;
}

let myCombine: (num: number, num1: number) => number;
myCombine = combine;
// myCombine = 23;

console.log(myCombine(10, 50));
