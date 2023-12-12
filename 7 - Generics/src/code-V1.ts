// const names: Array<string> = ["Mobin", "Mihad"];

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     return resolve("Hello Bangladesh");
//   }, 2000);
// });

// promise.then((data) => {
//   console.log(data.split(" "));
// });

// function greet(hobbies: string[], message: string) {
//   return message + " " + hobbies.length + " hobbies";
// }

// const greet1 = greet(["Playing", "Walking", "Writing"], "You Have");
// console.log(greet1);
// console.log(greet1);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got No Value";

  if (element.length === 1) descriptionText = "You Have Got 1 Value";
  else if (element.length > 1)
    descriptionText = `You Have Got ${element.length} values`;

  return [element, descriptionText];
}

const count = countAndDescribe("Bangladesh");
console.log(count);

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
}

const value = extractAndConvert({ name: "Mobin" }, "name");
console.log(value);

class WorkingStorage<T extends number | string | boolean> {
  private items: T[] = [];

  addItem(item: T) {
    this.items.push(item);
  }

  removeItem(item: T) {
    this.items.splice(this.items.indexOf(item), 1);
  }

  showItem() {
    return [...this.items];
  }
}
const mobin = new WorkingStorage<string>();
mobin.addItem("Hello");
mobin.addItem("asdf");
mobin.addItem("23r5dsf");
mobin.removeItem("asdf");
console.log(mobin.showItem());

// const mihad = new WorkingStorage ();
// mihad.addItem({ name: "hello", age: 5 });
// mihad.addItem({ name: "asdf", age: 235 });
// mihad.addItem({ name: "helasdfasdlo", age: 235 });
// mihad.removeItem({ name: "asdf", age: 235 });
// console.log(mihad.showItem());

interface Person {
  name: string;
  age: number;
  hobbies: string[];
}

function person(name: string, age: number, hobbies: string[]): Person {
  // return {
  //   name,
  //   age,
  //   hobbies,
  // };

  const obj: Partial<Person> = {};
  obj.name = name;
  obj.age = age;
  obj.hobbies = hobbies;

  return obj as Person;
}

const mobin1 = person("Mobin", 560, ["Mobin", "Himon", "Rozen"]);
console.log(mobin1);

const arr: Readonly<string[]> = ["Bangladesh", "India"];
