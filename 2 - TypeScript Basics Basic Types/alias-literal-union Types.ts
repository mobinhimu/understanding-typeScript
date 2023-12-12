//here using alias and literal type and also union type
type Combinable = number | string; // alias with union type
type ConversionDescription = "number-value" | "string-value"; // alias with literal type

function combine(
  input1: Combinable,
  input2: Combinable,
  typeOfOutput: ConversionDescription
) {
  let result: Combinable;

  if (
    (typeof input1 === "string" && typeof input2 === "string") ||
    typeOfOutput === "string-value"
  ) {
    result = input1.toString() + input2.toString();
  } else {
    result = +input1 + +input2;
  }

  return result;
}

const addition = combine(10, 30, "number-value");
console.log(addition);

const concatString = combine("Hello ", "Bangladesh", "string-value");
console.log(concatString);
