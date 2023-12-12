var number1 = document.querySelector("#num1");
var number2 = document.querySelector("#num2");
var button = document.querySelector("button");
function add(number1, number2) {
    return number1 + number2;
}
function handleAddition() {
    var addResult = add(+number1.value, +number2.value);
    number1.value = "";
    number2.value = "";
    console.log(addResult);
}
button.addEventListener("click", handleAddition);
