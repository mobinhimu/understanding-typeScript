function add(num1: number, num2: number) {
  return num1 + num2;
}

function printResult(num: number): void {
  //   console.log("Result is : " + num);
}

let mySampleFunction: (num1: number, num2: number) => number;

mySampleFunction = add;
// mySampleFunction = printResult;
// mySampleFunction = 25;

// console.log(mySampleFunction(20, 50));

function addHandlerNumber(
  num1: number,
  num2: number,
  cb: (num: number) => void
): void {
  const result = num1 + num2;
  cb(result);
}

addHandlerNumber(10, 50, (result) => {
  console.log(result);
});
