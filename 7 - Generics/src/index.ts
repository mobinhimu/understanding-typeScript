// const country: Array<string | number> = ["Bangladesh", "India", "Japan"];
// country.push(45);

const country: Readonly<string[]> = ["Bangladesh", "India", "Japan"];
console.log(country);

function mimsReply(input: string) {
  const lifePromise: Promise<string> = new Promise((resolve, reject) => {
    let timer = setTimeout(() => {
      if (input === "yes") {
        resolve("I Will Never Leave You Babe 💖");
      } else {
        reject("Please Love Me . I Love You 😭");
      }

      return clearTimeout(timer);
    }, 2000);
  });

  return lifePromise;
}

mimsReply("yes").then((data) => console.log(data));

function object<T extends object, U extends object>(obj1: T, obj2: U) {
  return { ...obj1, ...obj2 };
}
const obj = object(
  { name: "mobin", hobbies: ["Playing", "Walking"] },
  { age: 19 }
);
console.log(obj);

type Lengthy1 = {
  length: number;
};

function splitAndDescribe<T extends Lengthy1>(element: T): [T, string] {
  let description = "Got No Values";

  if (element.length === 1) description = "God 1 Value";
  else if (element.length > 1)
    description = "God " + element.length + " values";

  return [element, description];
}

const bangladesh = splitAndDescribe<string>("Bangladesh");
const india = splitAndDescribe<string[]>(["india"]);
console.log(bangladesh, india);

function getObjKey<T extends object, U extends keyof T>(obj: T, string: U) {
  return obj[string];
}

const obj1 = getObjKey({ name: "Mobin" }, "name");
console.log(obj1);

interface MyObj {
  name: string;
  age: number;
  DOB: string;
}

function persons(name: string, DOB: string, age?: number): MyObj {
  console.log(age);
  const myObj: Partial<MyObj> = {};
  myObj.name = name;
  myObj.DOB = DOB;
  myObj.age = age;
  return myObj as MyObj;
}
console.log(persons("Mobin", "4-8-2004", 19));

class Students<T extends string | number | boolean> {
  students: T[] = [];

  addStudent(student: T) {
    this.students.push(student);
  }

  removeStudent(student: T) {
    console.log(student);
    // this.students.splice(this.students.findIndex(student), 1);
  }

  getStudent() {
    return [...this.students];
  }
}

const rozen = new Students();
rozen.addStudent(5564);
rozen.addStudent("5564");
rozen.addStudent(!!5564);
console.log(rozen.getStudent());
