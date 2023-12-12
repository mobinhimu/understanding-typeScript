"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
console.clear();
function Logger(input) {
    console.log(input);
    return (constructor) => {
        console.log(constructor);
        console.log("LOGGER");
    };
}
function TextContent(input) {
    console.log("Text Content Factories");
    return (constructor) => {
        const person = new constructor();
        console.log("TEXT CONTENT");
        const h1 = document.createElement("h1");
        h1.innerHTML = person.name;
        document.body.appendChild(h1);
    };
}
class Person {
    constructor() {
        this.name = "Mobin";
        console.log("Person Class ...........");
    }
}
function Log(target, name) {
    console.log("Property Decorator ! ----------");
    console.log(target, name);
}
function Log1(target, name, descriptor) {
    console.log("Accessor Decorator -----------");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function AutoBind(_, _2, descriptor) {
    const originalMethod = descriptor.value;
    const adjDecorator = {
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        },
    };
    return adjDecorator;
}
class Printer {
    constructor() {
        this.message = "Hello Bangladesh";
    }
    showMessage() {
        console.log(this.message);
    }
}
__decorate([
    AutoBind
], Printer.prototype, "showMessage", null);
const bangladesh = new Printer();
const button = document.querySelector("button");
button.addEventListener("click", bangladesh.showMessage);
const registeredValidatorConfig = {};
function Required(target, propertyName) {
    registeredValidatorConfig[target.constructor.name] = Object.assign(Object.assign({}, registeredValidatorConfig[target.constructor.name]), { [propertyName]: ["required"] });
}
function PositiveNumber(target, propertyName) {
    registeredValidatorConfig[target.constructor.name] = Object.assign(Object.assign({}, registeredValidatorConfig[target.constructor.name]), { [propertyName]: ["positive"] });
}
function validate(obj) {
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
    constructor(t, p) {
        this.title = t;
        this.price = p;
    }
}
__decorate([
    Required
], Course.prototype, "title", void 0);
__decorate([
    PositiveNumber
], Course.prototype, "price", void 0);
const courseForm = document.querySelector("form");
courseForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const titleEl = document.querySelector("#title");
    const priceEl = document.querySelector("#price");
    const title = titleEl.value;
    const price = +priceEl.value;
    const course = new Course(title, price);
    if (!validate(course)) {
        alert("Invalid Input - Please Try Again");
        return;
    }
});
//# sourceMappingURL=index.js.map