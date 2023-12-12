/*
Understanding Types ------ 👇

   1. What are the different types in TypeScript?

   2. What is the difference between a primitive type and a composite type?

   3. What is type inference?

   4. How do you specify the type of a variable?

*/
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var userName = "Mobin";
var age = 19;
var hasGirlFriend = false;
// console.log(userName, age, hasGirlFriend);
// object type 👇
var bioData = {
    userName: userName,
    age: age,
    hasGirlFriend: hasGirlFriend,
};
var bioDataAlternative = {
    userName: userName,
    hasGirlFriend: hasGirlFriend,
};
var bioDataInterfaces = {
    userName: userName,
    age: age,
    hasGirlFriend: hasGirlFriend,
    greet: function (phase, num) {
        console.log("Hello, Bangladesh", phase, Math.pow(num, num));
    },
};
// bioDataInterfaces.greet("Hello", 5);
// primitive types 👇
// Write a function that takes a string and returns a boolean value indicating whether the string is a valid email address
function emailValidation(email) {
    var regexp = email
        .toLowerCase()
        .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    return regexp ? email : "NOT A Valid Email";
}
var valid = emailValidation("sdm241405@gamil.com");
var invalid = emailValidation("invalid email");
// Write a function that takes a boolean value and returns a string containing the boolean value in words.
function returnBooleanInText(type) {
    if (type === true) {
        return "true";
    }
    else if (type === false) {
        return "false";
    }
    else {
        return "Unknown";
    }
}
var trueValue = returnBooleanInText(true);
var falseValue = returnBooleanInText(false);
var invalidValue = returnBooleanInText("invalid");
// Object types 👇
// Write a function that takes a user object and returns a new user object with the password field removed.
function userWithoutPassword(user) {
    var newUser = user;
    delete newUser["password"];
    return newUser;
}
var user = userWithoutPassword({
    name: "Mobin",
    age: 18,
    password: "strong-password",
});
function product(products) {
    var reducedObj = __assign(__assign({}, products), { price: products.price - products.price * (10 / 100) });
    return reducedObj;
}
var mobile = product({
    name: "realme",
    price: 10000,
    productID: "alsdjfoiwejr",
});
console.log(mobile);
// Write a function that takes an array of numbers and returns a new array containing the sum of each pair of numbers in the original array.
function arrayOfNumber(arrayOfNumbers) {
    var newArray = [];
    var sum = 0;
    for (var _i = 0, arrayOfNumbers_1 = arrayOfNumbers; _i < arrayOfNumbers_1.length; _i++) {
        var num = arrayOfNumbers_1[_i];
        sum += num;
        newArray.push(sum);
    }
    return newArray;
}
var sumOfArrPair = arrayOfNumber([1, 2, 3, 4, 5]);
// console.log(sumOfArrPair);
// Union types 👇
// Write a function that takes a string or number and returns the string representation of the value.
function returnedString(value) {
    if (typeof value === "string")
        return value;
}
// Write a function that takes a string or number and returns the number representation of the value.
function returnedNumber(value) {
    if (typeof value === "number")
        return value;
}
// Write a function that takes a string or number and returns a boolean value indicating whether the value is a valid BANGLADESHI phone number.
function validBangladeshPhoneNumber(input) {
    if (input.toLocaleString().match(/(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/))
        return input;
}
// Void type 👇
// Write a function that takes a message and prints it to the console.
function message(msg) {
    console.log(msg);
}
var myObj = {
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
var arr = [
    "Playing",
    "Sleeping",
    50,
    ["Bangladesh", false],
];
var x = arr.push("Bangladesh");
/*

Working with Enums

What is an enum?
How do you create an enum type?
How do you access the members of an enum?
How do you use enums to represent different states in a TypeScript application?
*/
var DayOfTheWeek;
(function (DayOfTheWeek) {
    DayOfTheWeek[DayOfTheWeek["Saturday"] = 0] = "Saturday";
    DayOfTheWeek[DayOfTheWeek["Sunday"] = 1] = "Sunday";
    DayOfTheWeek[DayOfTheWeek["Monday"] = 2] = "Monday";
    DayOfTheWeek[DayOfTheWeek["Tuesday"] = 3] = "Tuesday";
    DayOfTheWeek[DayOfTheWeek["Wednesday"] = 4] = "Wednesday";
    DayOfTheWeek[DayOfTheWeek["Thursday"] = 5] = "Thursday";
    DayOfTheWeek[DayOfTheWeek["Friday"] = 6] = "Friday";
})(DayOfTheWeek || (DayOfTheWeek = {}));
function nextDay(currentDay) {
    if (currentDay === DayOfTheWeek.Friday) {
        return DayOfTheWeek.Saturday;
    }
    else {
        return currentDay + 1;
    }
}
var today = DayOfTheWeek.Sunday;
var nextD = nextDay(today);
console.log(today, nextD);
console.log("Today is ".concat(DayOfTheWeek[today], ", And The Next Day Is ").concat(DayOfTheWeek[nextD]));
var stringOrNumber = 2;
stringOrNumber = "Canada";
function userInfo(user) {
    return user;
}
var user1 = userInfo({
    name: "Mobin",
    age: "50",
    hobbies: ["Bangladesh"],
});
console.log(user1);
function add(num1, num2) {
    return num1 + num2;
}
var result = add;
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
