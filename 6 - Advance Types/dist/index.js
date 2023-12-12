"use strict";
var student = {
    name: "Mobin",
    age: 19,
    id: crypto.randomUUID(),
    dob: "22-2-2004",
};
function sclStudent(student) {
    console.log(student.name + " is a good person");
    if ("age" in student) {
        console.log(student.name + " is " + student.age + " old");
    }
}
sclStudent(student);
var MyName = (function () {
    function MyName() {
    }
    MyName.prototype.myName = function (name) {
        console.log("This Is " + name);
    };
    return MyName;
}());
var MyAge = (function () {
    function MyAge() {
    }
    MyAge.prototype.myName = function (name) {
        console.log("This Is " + name);
    };
    MyAge.prototype.myAge = function (age) {
        console.log("Im " + age + " Old");
    };
    return MyAge;
}());
var mobin = new MyName();
var age = new MyAge();
function myFun(person) {
    person.myName("Mobin");
    if (person instanceof MyAge) {
        person.myAge(50);
    }
}
function getGadgetInfo(gadgets) {
    var value;
    switch (gadgets.type) {
        case "car":
            value = gadgets.speedPower;
            break;
        case "phone":
            value = gadgets.cameraPowers;
    }
    return value;
}
var phone = getGadgetInfo({ type: "phone", cameraPowers: "50mgpx" });
var inputEle = document.getElementById("input");
inputEle.value = "Hello Bangladesh";
var obj = {
    name: "Mobin",
    age: 231,
    dob: "1-5-2004",
};
console.log(obj);
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + a.toString();
    }
    return a + b;
}
var num = add(10, 20);
var str = add("Hello", "Bangladesh");
var str2 = add("Bangladesh", 564);
//# sourceMappingURL=index.js.map