console.clear();

function Logger(input: string) {
  console.log(input);

  return (constructor: Function) => {
    console.log(constructor);
    console.log("LOGGER");
  };
}

function TextContent(input: string) {
  console.log("Text Content Factories");

  return (constructor: any) => {
    const person = new constructor();
    console.log("TEXT CONTENT");
    const h1 = document.createElement("h1");
    h1.innerHTML = person.name;
    document.body.appendChild(h1);
  };
}

// @Logger("Logger Factories")
// @TextContent("Hello h1")
class Person {
  name = "Mobin";
  constructor() {
    console.log("Person Class ...........");
  }
}

// const person = new Person();
// console.log(person);

function Log(target: any, name: string | Symbol) {
  console.log("Property Decorator ! ----------");
  console.log(target, name);
}

function Log1(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log("Accessor Decorator -----------");

  console.log(target);
  console.log(name);
  console.log(descriptor);
}

// function Log3(
//   target: any,
//   name: string | Symbol,
//   descriptor: PropertyDescriptor
// ) {
//   console.log("Method Decorator -----------");

//   console.log(target);
//   console.log(name);
//   console.log(descriptor);
// }

// function Log4(target: any, name: string | Symbol, position: number) {
//   console.log("Parameter Decorator -----------");

//   console.log(target);
//   console.log(name);
//   console.log(position);
// }

// class Product {
//   mobinTitles: string;
//   @Log
//   private _price: number;

//   @Log1
//   set price(p: number) {
//     if (p > 0) {
//       this.price = p;
//     }

//     throw new Error("Invalid Price - Should Be Positive");
//   }

//   constructor(t: string, p: number) {
//     this.mobinTitles = t;
//     this._price = p;
//   }

//   @Log3
//   getPriceWithTex(@Log4 tax: number) {
//     return this._price + (1 + tax);
//   }
// }

function AutoBind(_: any, _2: string | Symbol, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  const adjDecorator: PropertyDescriptor = {
    // enumerable: true,
    // configurable: false,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };

  return adjDecorator;
}

class Printer {
  message = "Hello Bangladesh";

  @AutoBind
  showMessage() {
    console.log(this.message);
  }
}

const bangladesh = new Printer();

const button = document.querySelector("button")!;
button.addEventListener("click", bangladesh.showMessage);

interface validationConfig {
  [property: string]: {
    [validationProp: string]: string[];
  };
}

const registeredValidatorConfig: validationConfig = {};

function Required(target: any, propertyName: string) {
  registeredValidatorConfig[target.constructor.name] = {
    ...registeredValidatorConfig[target.constructor.name],
    [propertyName]: ["required"],
  };
}

function PositiveNumber(target: any, propertyName: string) {
  registeredValidatorConfig[target.constructor.name] = {
    ...registeredValidatorConfig[target.constructor.name],
    [propertyName]: ["positive"],
  };
}

function validate(obj: any) {
  const objValidationConfig = registeredValidatorConfig[obj.constructor.name];

  let isValid = true;

  for (const prop in objValidationConfig) {
    console.log(prop);

    for (const validator of objValidationConfig[prop]) {
      switch (validator) {
        case "required":
          isValid = isValid && !!obj[prop];
          break;
        case "positive":
          isValid = isValid && obj[prop] > 0;
      }
    }
  }

  return isValid;
}

class Course {
  @Required
  title: string;
  @PositiveNumber
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const courseForm = document.querySelector("form")!;
courseForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const titleEl = document.querySelector("#title") as HTMLInputElement;
  const priceEl = document.querySelector("#price") as HTMLInputElement;

  const title = titleEl.value;
  const price = +priceEl.value;

  const course = new Course(title, price);

  if (!validate(course)) {
    alert("Invalid Input - Please Try Again");
    return;
  }
});

// console.log(registeredValidatorConfig);

/*
(() => {
  let x, y;

  try {
    throw new Error();
  } catch (x) {
    x = 1;
    y = 2;
    console.log(x);
  }

  console.log(x, y);
})();
*/
