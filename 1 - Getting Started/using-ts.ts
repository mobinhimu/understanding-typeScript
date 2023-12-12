var number1 = document.querySelector("#num1")! as HTMLInputElement;
var number2 = document.querySelector("#num2")! as HTMLInputElement;
var button = document.querySelector("button")! as Element;

function add(number1: number, number2: number) {
  return number1 + number2;
}

function handleAddition() {
  var addResult = add(+number1.value, +number2.value);
  number1.value = "";
  number2.value = "";
  console.log(addResult);
}

button.addEventListener("click", handleAddition);
