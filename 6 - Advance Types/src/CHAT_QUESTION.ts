/*
    Question 1: Intersection Types
    Imagine you have two types: one representing a person with a name and an age, and another representing a worker with a job title. Create an intersection type that combines these two types into a single type representing a person with a job
*/

type Person1 = {
  name: string;
  age: number | string;
};

type Worker1 = {
  jobTitle: string;
};

type PersonWithJob = Person1 & Worker1;

/*
Question 2: Discriminated Unions
Suppose you are building a system to handle different shapes (circle, square, triangle). Implement a discriminated union to represent these shapes. Each shape should have specific properties (e.g., radius for a circle, side length for a square).
*/

interface Circle {
  type: "circle";
  circle: number;
}

interface Square {
  type: "square";
  square: number;
}

interface Triangle {
  type: "triangle";
  base: number;
  height: number;
}

type Shape = Circle | Square | Triangle;

function getShape(inputs: Shape) {
  let value;
  switch (inputs.type) {
    case "circle":
      value = 3.1416 * inputs.circle ** 2;
      break;
    case "square":
      value = inputs.square ** 2;
      break;
    case "triangle":
      value = (inputs.height * inputs.base) / 2;
      break;

    default:
      value = "Unknown Type";
  }

  return value;
}

const circle = getShape({ type: "circle", circle: 50 });
const square = getShape({ type: "square", square: 10 });
const triangle = getShape({ type: "triangle", base: 10, height: 15 });

console.log(circle, square, triangle);

/*
Question 3: Optional Chaining and Nullish Coalescing
You are working with data that may or may not have nested properties. Use optional chaining and nullish coalescing to safely access a deeply nested property. If the property is not present or is null/undefined, provide a default value.
*/

const myData = {
  name: "mobin",
  age: 20,
  hobbies: ["playing", "walking", "writing"],
};

const walking = myData?.hobbies.indexOf("walking") ?? [];
