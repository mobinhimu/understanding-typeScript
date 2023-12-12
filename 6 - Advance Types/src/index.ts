// type Student = {
//   id: string | number;
//   dob: string | number;
//   startDate: Date;
// };

// type Person = {
//   name: string;
//   age: number;
// };

interface Student {
  name: string;
  id?: string | number;
  dob: string | number;
}
interface Person {
  name: string;
  age: number;
}

type SclStudent = Student | Person;

const student: SclStudent = {
  name: "Mobin",
  age: 19,
  id: crypto.randomUUID(),
  dob: "22-2-2004",
};

function sclStudent(student: SclStudent) {
  console.log(student.name + " is a good person");

  if ("age" in student) {
    console.log(student.name + " is " + student.age + " old");
  }
}

sclStudent(student);

// const sum = add(10, 20);
// const str = add("Hello", 20);

class MyName {
  myName(name: string) {
    console.log("This Is " + name);
  }
}

class MyAge {
  myName(name: string) {
    console.log("This Is " + name);
  }

  myAge(age: number) {
    console.log("Im " + age + " Old");
  }
}

type MyBio = MyName | MyAge;

const mobin = new MyName();
const age = new MyAge();

function myFun(person: MyBio) {
  person.myName("Mobin");
  if (person instanceof MyAge) {
    person.myAge(50);
  }
}

type Phone = {
  type: "phone";
  cameraPowers: string;
};

type Car = {
  type: "car";
  speedPower: string;
};

type Gadgets = Phone | Car;

function getGadgetInfo(gadgets: Gadgets) {
  let value;
  switch (gadgets.type) {
    case "car":
      value = gadgets.speedPower;
      break;
    case "phone":
      value = gadgets.cameraPowers;
  }

  return value;
}

const phone = getGadgetInfo({ type: "phone", cameraPowers: "50mgpx" });

const inputEle = document.getElementById("input") as HTMLInputElement;

inputEle.value = "Hello Bangladesh";

type ErrorObj = {
  [error: string]: string | number;
};

const obj: ErrorObj = {
  name: "Mobin",
  age: 231,
  dob: "1-5-2004",
};

console.log(obj);

type Combinable = string | number;
type Numeric = number | string;

type Add = Combinable & Numeric;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: number, b: string): string;
function add(a: string, b: number): string;
function add(a: Add, b: Add) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + a.toString();
  }
  return a + b;
}

const num = add(10, 20);
const str = add("Hello", "Bangladesh");
const str2 = add("Bangladesh", 564);
