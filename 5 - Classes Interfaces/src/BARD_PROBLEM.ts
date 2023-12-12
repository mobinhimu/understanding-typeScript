/*interface Book {
  readonly name: string;
  writer?: string;
  published: number;
  price: number;
  typeOfBook: string;
  messageForReader: (string: string) => void | string;
}

// type Book = {
//   readonly name: string;
//   writer?: string;
//   published: number;
//   price: number;
//   typeOfBook: string;
//   messageForReader: (string: string) => void | string;
// };

class AllBook implements Book {
  readonly name: string;
  writer: string;
  published: number;
  price: number;
  typeOfBook: string;

  constructor(
    name: string,
    writer: string,
    published: number,
    price: number,
    typeOfBook: string
  ) {
    this.name = name;
    this.writer = writer;
    this.published = published;
    this.price = price;
    this.typeOfBook = typeOfBook;
  }

  messageForReader() {
    console.log(
      `Hi There, I\'m ${this.writer} . I Wrote This (${
        this.name
      }) Book About ${this.typeOfBook
        ?.split(",")
        .join(" | ")}. I Think You Will Enjoy This Book . Thank You !`
    );
  }
}

const fullStackDevelopment = new AllBook(
  "Fullstack Development Connecting The Dots",
  "HM Nayem",
  2004,
  360,
  "Programming , Development"
);
fullStackDevelopment.messageForReader();

console.log(fullStackDevelopment);
*/

/* 
    Create a class to represent a book. The book should have properties for the title, author, and number of pages. Create a method to return a description of the book.
*/

class Book {
  constructor(
    protected title: string,
    protected author: string,
    protected numOfPage: number
  ) {
    this.title = title;
    this.author = author;
    this.numOfPage = numOfPage;
  }

  describe() {
    return `${this.title} is a book . which has ${this.numOfPage} pages. It was written by ${this.author}`;
  }
}

const javascriptTheDefinitiveGuide = new Book(
  "Javascript: The Definitive Guide",
  " David Flanagan",
  1098
);

const describe = javascriptTheDefinitiveGuide.describe();
console.log(describe);

/*
  Create a class to represent a bank account. The bank account should have properties for the account holder's name, account number, and balance. Create methods to deposit and withdraw money from the account.
*/

class BankAccount {
  holdersName;
  accountNumber;
  balance;

  constructor(
    holdersName: string,
    accountNumber: number | string,
    balance: number
  ) {
    this.holdersName = holdersName;
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  depositMoney(money: number) {
    this.balance += money;
  }

  withdrawMoney(money: number) {
    this.balance -= money;
  }
}

// const mobin = new BankAccount("Mobin", 64, 5000);
// mobin.withdrawMoney(500);
// mobin.depositMoney(1000000000000);
// console.log(mobin);

/*
 Create an abstract class for a shape. The shape class should have an abstract method for calculating the area of the shape. Create concrete subclasses for a circle, square, and rectangle.
*/

abstract class Shape {
  abstract calculateAreaOfShape(): number;
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
    this.radius = radius;
  }

  //   calculateAreaOfShape(): number {
  //     return Math.pow(this.radius, 2);
  //   }

  calculateAreaOfShape(): number {
    return 3.1416 * this.radius ** 2;
  }
}

class Square extends Shape {
  constructor(private inputNum: number) {
    super();
    this.inputNum = inputNum;
  }

  calculateAreaOfShape(): number {
    return this.inputNum ** 2;
  }
}

class Rectangle extends Shape {
  private height;
  private width;

  constructor(height: number, width: number) {
    super();
    this.height = height;
    this.width = width;
  }

  calculateAreaOfShape(): number {
    return this.height * this.width;
  }
}

// Example usage
// const circle = new Circle(5);
// console.log(circle.calculateAreaOfShape()); // Output: 78.53981633974483

// const square = new Square(10);
// console.log(square.calculateAreaOfShape()); // Output: 100

// const rectangle = new Rectangle(4, 6);
// console.log(rectangle.calculateAreaOfShape()); // Output: 24

/*
    Create an interface for a person. The person interface should have properties for the person's name, age, and address. Create a class called Employee that implements the Person interface. Add properties for the employee's salary and department.
*/

interface Person {
  name: string;
  age: number;
  address: string;
}

class Employee implements Person {
  name: string;
  age: number;
  address: string;
  salary: number;
  department: string;

  constructor(
    name: string,
    age: number,
    address: string,
    salary: number,
    department: string
  ) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.salary = salary;
    this.department = department;
  }
}

const mobin = new Employee(
  "Mobin",
  18,
  "Dhaka, Bangladesh",
  50000,
  "Software Engineer"
);

// console.log(mobin);

/*
    Create an interface for a shopping cart. The shopping cart interface should have properties for the items in the cart and the total price of the items. Create a class called Cart that implements the ShoppingCart interface. Add methods to add and remove items from the cart, and to calculate the total price.
*/
type CartType = { product: string; nameOfProduct: string; price: number }[];
type ItemType = { product: string; nameOfProduct: string; price: number };

interface ShoppingCart {
  cart: CartType;
  totalPrice: number;
}

// type TotalPriceFun = {
//   (): (type: object) => number;
// };

function calculateTotalPrice(userData: CartType): number {
  return userData.reduce((acc, obj) => acc + obj.price, 0);
}

class Cart implements ShoppingCart {
  cart;
  totalPrice;

  constructor(cart: CartType, totalPrice: number) {
    this.cart = cart;
    this.totalPrice = totalPrice;
  }

  addItem(item: ItemType) {
    this.cart.push(item);
    this.totalPrice = calculateTotalPrice(this.cart);
  }

  removeItem() {
    this.cart.pop();
    this.totalPrice = calculateTotalPrice(this.cart);
  }
}

const mobinsCart = [
  { product: "Mobile", nameOfProduct: "Samsung", price: 500 },
  { product: "Mobile", nameOfProduct: "Samsung", price: 500 },
  { product: "Mobile", nameOfProduct: "Samsung", price: 500 },
  { product: "Mobile", nameOfProduct: "Samsung", price: 5000 },
];

const mihadsCart = [
  { product: "Laptop", nameOfProduct: "MacBook Pro", price: 9674 },
  { product: "Laptop", nameOfProduct: "MacBook Pro", price: 100 },
  { product: "Laptop", nameOfProduct: "MacBook Pro", price: 10000 },
  { product: "Laptop", nameOfProduct: "MacBook Pro", price: 14560 },
  { product: "Laptop", nameOfProduct: "MacBook Pro", price: 45600 },
];

const mobins = new Cart(mobinsCart, calculateTotalPrice(mobinsCart));
mobins.addItem({ product: "HI", nameOfProduct: "Samsung", price: 500 });

const mihads = new Cart(mihadsCart, calculateTotalPrice(mihadsCart));
mihads.removeItem();
mihads.removeItem();
mihads.removeItem();

console.log(mobins, mihads);
