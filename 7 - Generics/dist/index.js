"use strict";
const country = ["Bangladesh", "India", "Japan"];
console.log(country);
function mimsReply(input) {
    const lifePromise = new Promise((resolve, reject) => {
        let timer = setTimeout(() => {
            if (input === "yes") {
                resolve("I Will Never Leave You Babe 💖");
            }
            else {
                reject("Please Love Me . I Love You 😭");
            }
            return clearTimeout(timer);
        }, 2000);
    });
    return lifePromise;
}
mimsReply("yes").then((data) => console.log(data));
function object(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const obj = object({ name: "mobin", hobbies: ["Playing", "Walking"] }, { age: 19 });
console.log(obj);
function splitAndDescribe(element) {
    let description = "Got No Values";
    if (element.length === 1)
        description = "God 1 Value";
    else if (element.length > 1)
        description = "God " + element.length + " values";
    return [element, description];
}
const bangladesh = splitAndDescribe("Bangladesh");
const india = splitAndDescribe(["india"]);
console.log(bangladesh, india);
function getObjKey(obj, string) {
    return obj[string];
}
const obj1 = getObjKey({ name: "Mobin" }, "name");
console.log(obj1);
function persons(name, DOB, age) {
    console.log(age);
    const myObj = {};
    myObj.name = name;
    myObj.DOB = DOB;
    myObj.age = age;
    return myObj;
}
console.log(persons("Mobin", "4-8-2004", 19));
class Students {
    constructor() {
        this.students = [];
    }
    addStudent(student) {
        this.students.push(student);
    }
    removeStudent(student) {
        console.log(student);
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
//# sourceMappingURL=index.js.map