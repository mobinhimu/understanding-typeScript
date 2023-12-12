"use strict";
var _a;
function getShape(inputs) {
    var value;
    switch (inputs.type) {
        case "circle":
            value = 3.1416 * Math.pow(inputs.circle, 2);
            break;
        case "square":
            value = Math.pow(inputs.square, 2);
            break;
        case "triangle":
            value = (inputs.height * inputs.base) / 2;
            break;
        default:
            value = "Unknown Type";
    }
    return value;
}
var circle = getShape({ type: "circle", circle: 50 });
var square = getShape({ type: "square", square: 10 });
var triangle = getShape({ type: "triangle", base: 10, height: 15 });
console.log(circle, square, triangle);
var myData = {
    name: "mobin",
    age: 20,
    hobbies: ["playing", "walking", "writing"],
};
var walking = (_a = myData === null || myData === void 0 ? void 0 : myData.hobbies.indexOf("walking")) !== null && _a !== void 0 ? _a : [];
//# sourceMappingURL=CHAT_QUESTION.js.map