console.clear();

function gradePoint(num: number, hasResult: boolean) {
  let greet: string;

  switch (hasResult) {
    case num < 33:
      greet = `Unfortunately You Are Failed`;
      break;
    case num > 33 && num < 39:
      greet = `You Got D`;
      break;
    case num > 40 && num < 49:
      greet = `You Got C`;
      break;
    case num > 50 && num < 59:
      greet = `You Got B`;
      break;
    case num > 60 && num < 69:
      greet = `You Got AB`;
      break;
    case num > 70 && num < 79:
      greet = `You Got A`;
      break;
    case num > 80 && num < 100:
      greet = `You Got A+`;
      break;
    default:
      greet = `Input is not valid`;
  }

  return greet;
}

const hasResult = true;

const F = gradePoint(10, hasResult);
const D = gradePoint(35, hasResult);
const C = gradePoint(45, hasResult);
const B = gradePoint(55, hasResult);

// console.log({ F, D, C, B });

// object type

// const myBio: {
//   name: string;
//   age: number;
// } = {
// const myBio = {
//   name: "Mobin",
//   age: 18,
// };

// array type
const myHobbies = ["Playing", "Sleeping", "Coding"];

let myHobbies1: string[];
myHobbies1 = ["Hello"];

// tuple

// const myBio: {
//   name: string;
//   age: number;
//   myHobbies: [string, string, number];
// } = {
//   name: "Mobin",
//   age: 18,
//   myHobbies: ["Playing", "working", 1234],
// };

// myBio.myHobbies.push("Hello");
// myBio.myHobbies[1] = "123";

// enums

enum Role {
  ADMIN = "ADMIN",
  AUTHOR = 50,
  START,
  MY_SERIAL = 500,
  ADMINS_SERIAL,
}

const myBio = {
  name: "Mobin",
  age: 18,
  myHobbies: ["Playing", "working", 1234],
  role: Role.ADMIN,
};

if (myBio.role === Role.ADMIN) {
  console.log("Hello " + myBio.role);
  console.log(Role.ADMIN, Role.AUTHOR, Role.MY_SERIAL);
}
