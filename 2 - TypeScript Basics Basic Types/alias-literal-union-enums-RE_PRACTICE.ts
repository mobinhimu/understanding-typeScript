// practice  --- alias-literal-union-enums

enum Hello {
  NUMBER_INPUT_TYPE = "number",
  STRING_INPUT_TYPE = "string",
}

type CombineType = number | string;
type CombineLiteralType = Hello.NUMBER_INPUT_TYPE | Hello.STRING_INPUT_TYPE;

// we can yse any name bt its kind of a convention to use "Role" as a enum name

// enum Role {
//   NUMBER_INPUT_TYPE = "number",
//   STRING_INPUT_TYPE = "string",
// }

function combinePractice(
  input1: CombineType,
  input2: CombineType,
  inputTypes: CombineLiteralType
) {
  let result: CombineType;

  if (inputTypes === Hello.NUMBER_INPUT_TYPE) {
    result = +input1 + +input2;
  } else if (inputTypes === Hello.STRING_INPUT_TYPE) {
    result = input1.toString() + input2.toString();
  } else {
    throw Error("NO Input Type Found");
  }

  return result;
}

console.log(combinePractice(50, 40, Hello.NUMBER_INPUT_TYPE));
console.log(combinePractice("Hello ", "World", Hello.STRING_INPUT_TYPE));
console.log(combinePractice("Hello ", "World", Hello.STRING_INPUT_TYPE));
