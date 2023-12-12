"use strict";
function countAndDescribe(element) {
    let descriptionText = "Got No Value";
    if (element.length === 1)
        descriptionText = "You Have Got 1 Value";
    else if (element.length > 1)
        descriptionText = `You Have Got ${element.length} values`;
    return [element, descriptionText];
}
const count = countAndDescribe("Bangladesh");
console.log(count);
function extractAndConvert(obj, key) {
    return obj[key];
}
const value = extractAndConvert({ name: "Mobin" }, "name");
console.log(value);
class WorkingStorage {
    constructor() {
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
    }
    removeItem(item) {
        this.items.splice(this.items.indexOf(item), 1);
    }
    showItem() {
        return [...this.items];
    }
}
const mobin = new WorkingStorage();
mobin.addItem("Hello");
mobin.addItem("asdf");
mobin.addItem("23r5dsf");
mobin.removeItem("asdf");
console.log(mobin.showItem());
function person(name, age, hobbies) {
    const obj = {};
    obj.name = name;
    obj.age = age;
    obj.hobbies = hobbies;
    return obj;
}
const mobin1 = person("Mobin", 560, ["Mobin", "Himon", "Rozen"]);
console.log(mobin1);
const arr = ["Bangladesh", "India"];
//# sourceMappingURL=code-V1.js.map