/* 
Understanding Types ------ 👇

   1. What are the different types in TypeScript?

   2. What is the difference between a primitive type and a composite type?

   3. What is type inference?

   4. How do you specify the type of a variable?

*/

/* ANSWER  ---- (Understanding Types) */

// 1. What are the different types in TypeScript?
/* There are a number of types in TypeScript, such as: primitive type, object type  , union type, void type , never type , custom types (enums , interfaces, type aliases) */

type AgeType = number | string;

let userName: string = "Mobin";
let age: AgeType = 19;
let hasGirlFriend: boolean = false;
// console.log(userName, age, hasGirlFriend);

// object type 👇
const bioData: object = {
  userName,
  age,
  hasGirlFriend,
};

const bioDataAlternative: {
  userName: string;
  age?: AgeType;
  hasGirlFriend: boolean;
} = {
  userName,

  hasGirlFriend,
};

interface Greet {
  greet(phase: string, num2: number): void;
}

interface UsingInterface extends Greet {
  userName: string;
  age: AgeType;
  hasGirlFriend: boolean;
}

const bioDataInterfaces: UsingInterface = {
  userName,
  age,
  hasGirlFriend,
  greet(phase, num) {
    console.log("Hello, Bangladesh", phase, num ** num);
  },
};

// bioDataInterfaces.greet("Hello", 5);

// primitive types 👇
// Write a function that takes a string and returns a boolean value indicating whether the string is a valid email address

function emailValidation(email: string) {
  const regexp = email
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

  return regexp ? email : "NOT A Valid Email";
}

const valid = emailValidation("sdm241405@gamil.com");
const invalid = emailValidation("invalid email");

// Write a function that takes a boolean value and returns a string containing the boolean value in words.

function returnBooleanInText(type: boolean | string) {
  if (type === true) {
    return "true";
  } else if (type === false) {
    return "false";
  } else {
    return "Unknown";
  }
}

const trueValue = returnBooleanInText(true);
const falseValue = returnBooleanInText(false);
const invalidValue = returnBooleanInText("invalid");

// Object types 👇
// Write a function that takes a user object and returns a new user object with the password field removed.

function userWithoutPassword(user: object) {
  const newUser = user;
  delete newUser["password"];

  return newUser;
}

const user = userWithoutPassword({
  name: "Mobin",
  age: 18,
  password: "strong-password",
});

// console.log(user);

// Write a function that takes a product object and returns a new product object with the price reduced by 10%.

interface Product {
  name: string;
  price: number;
  productID?: number | string;
}

function product(products: Product) {
  const reducedObj = {
    ...products,
    price: products.price - products.price * (10 / 100),
  };

  return reducedObj;
}

const mobile = product({
  name: "realme",
  price: 10000,
  productID: "alsdjfoiwejr",
});

console.log(mobile);

// Write a function that takes an array of numbers and returns a new array containing the sum of each pair of numbers in the original array.

function arrayOfNumber(arrayOfNumbers: number[]): number[] {
  const newArray: number[] = [];
  let sum: number = 0;
  for (const num of arrayOfNumbers) {
    sum += num;
    newArray.push(sum);
  }
  return newArray;
}

const sumOfArrPair = arrayOfNumber([1, 2, 3, 4, 5]);

// console.log(sumOfArrPair);

// Union types 👇

// Write a function that takes a string or number and returns the string representation of the value.

function returnedString(value: number | string) {
  if (typeof value === "string") return value;
}

// Write a function that takes a string or number and returns the number representation of the value.
function returnedNumber(value: number | string) {
  if (typeof value === "number") return value;
}

// Write a function that takes a string or number and returns a boolean value indicating whether the value is a valid BANGLADESHI phone number.

function validBangladeshPhoneNumber(input: number | string) {
  if (
    input.toLocaleString().match(/(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/)
  )
    return input;
}

// Void type 👇
// Write a function that takes a message and prints it to the console.
function message(msg: string): void {
  console.log(msg);
}

/* 
2. Object Types
  1. How do you create an object type?

  2. How do you specify optional properties in an object type?

  3. How do you work with nested objects in TypeScript?

  4. What is the difference between an interface and a type alias?

*/

// const myObj: {
//   name: string;
//   age?: number;
//   hobbies: {
//     gf: string;
//     count?: number;
//   };
// } = {
//   name: "mobin",
//   hobbies: {
//     gf: "Takiya",
//   },
// };

interface User {
  name: string;
  age?: number;
  hobbies: {
    gf: string;
    count?: number;
  };
}

const myObj: User = {
  name: "mobin",
  hobbies: {
    gf: "Takiya",
  },
};

console.log(myObj);

/* 
3. Arrays Types

  How do you create an array type?
  How do you specify the type of elements in an array?
  How do you work with nested arrays in TypeScript?
  What is the difference between an array and a tuple?
*/

// const arr: string[] = ["Playing", "Sleeping", "Working"];
const arr: [string, string, number, [string, boolean]] = [
  "Playing",
  "Sleeping",
  50,
  ["Bangladesh", false],
];

const x = arr.push("Bangladesh");

/* 

Working with Enums

What is an enum?
How do you create an enum type?
How do you access the members of an enum?
How do you use enums to represent different states in a TypeScript application?
*/

enum DayOfTheWeek {
  Saturday,
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
}

function nextDay(currentDay: DayOfTheWeek) {
  if (currentDay === DayOfTheWeek.Friday) {
    return DayOfTheWeek.Saturday;
  } else {
    return currentDay + 1;
  }
}

const today = DayOfTheWeek.Sunday;
const nextD = nextDay(today);

console.log(today, nextD);

console.log(
  `Today is ${DayOfTheWeek[today]}, And The Next Day Is ${DayOfTheWeek[nextD]}`
);

/* 
The "any" Type

  What is the "any" type?
  = this another type of ts .

  When should you use the "any" type?
  = almost never

  What are the drawbacks of using the "any" type?
  = there are several negatives sites of using this "any type " => for instance ---
  1. if is use it in any variable . that means this variable can accept any kind of data type . then if the variable is accept any sorts of data type there is no meaning using TypeScript
  
  2. is useless . it is not usable . 

  and so one

  How can you avoid using the "any" type?
  = we can avoid this a lot of way   for example => 
  1. we will always specify the correct data type for correct variable
  2. if there is no data type is required then we can use unknown data type which is also awesome . 
  3. in summary we will never use it


  ANSWERED BY ME . IM VERY POOR IN ENGLISH 😭.

*/

/* 
7. Union Types

  What is a union type?
  When should you use a union type?
  How do you create a union type?
  How do you use union types to represent different possibilities for the value of a variable?

*/

type StringOrNumber = string | number;

let stringOrNumber: StringOrNumber = 2;
stringOrNumber = "Canada";

/* 
9. Type Aliases / Custom Types

  What is a type alias?
  When should you use a type alias?
  How do you create a type alias?
  How do you use type aliases to create custom types for your TypeScript applications?
*/

type UserBio = {
  name: string;
  age: number | string;
  hobbies?: string[];
};

function userInfo(user: UserBio) {
  return user;
}

const user1 = userInfo({
  name: "Mobin",
  age: "50",
  hobbies: ["Bangladesh"],
});
console.log(user1);

/* 
10. Core Types & Concepts

  What is the difference between a function type and a function declaration?
  What is the difference between a parameter type and a return type?
  What is the "void" type?
  When should you use the "void" type?

*/

type AddNum = (num1: number, num2: number, num3: number) => number;

function add(num1: number, num2: number): number {
  return num1 + num2;
}

const result: AddNum = add;

console.log(result(10, 50, 50));

/* 
11. Function Return Types & "void"

  How do you specify the return type of a function?
  How do you use the "void" type to indicate that a function does not return a value?
  What are the benefits of using explicit return types for your functions?
*/

// type AddFunction = (a: number, b: number) => number;

// function addition(a: number, b: number): AddFunction {
//   return (a: number, b: number) => {
//     return a + b;
//   };
// }

// console.log(addition(205, 87));

/* 
12. Functions as Types

  How can you use functions as types?
  Why might you want to use functions as types?
  What are some examples of how to use functions as types in TypeScript?


13. Function Types & Callbacks

  What is a callback function?
  How do you use function types to represent callback functions in TypeScript?
  What are some examples of how to use function types to represent callback functions in TypeScript?
*/
