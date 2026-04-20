//! Example 1
/*
class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  //^ Standard Method Declaration in Classes
  introduce(): string {
    return `My name is ${this.name} and my age is ${this.age}`;
  }
  //^ Creating Method with the help of arrow function
  secondIntroduction = (): string => {
    return `My age is ${this.age} and my age is ${this.name}`;
  };
}

const person1 = new Person("Sitaram", 95695);
console.log(person1.name);
console.log(person1.age);
console.log(person1.introduce());
console.log(person1.secondIntroduction());
*/

//! Example 2
/*
class Car {
  brand: string;
  model: string;
  color: string;
  fuelType: string;
  constructor(brand: string, model: string, color: string, fuelType: string) {
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.fuelType = fuelType;
  }
  ads1(): void {
    console.log(
      `This is launch of ${this.brand} ${this.model} and it is primarily available in ${this.color} and with ${this.fuelType} engine.`,
    );
  }
  ads2 = (): void => {
    // console.log(this);
    console.log(`Here, we are presenting ${this.brand} ${this.model} and which is primarily available in ${this.color} and with ${this.fuelType} engine.`);
  };
}

const car1 = new Car("Toyota", "Fortuner", "Pearl White", "Diesel");
// const newFn = car1.ads1;
// newFn();
const newFn1 = car1.ads2;
console.log(newFn1)
newFn1();
// console.log(car1)
// console.log(car1.brand);
// console.log(car1.model);
// console.log(car1.color);
// console.log(car1.fuelType);
// car1.ads1();
// let x = car1.ads2();
// console.log("x:", x);
*/

//! Example 3
/*
class Person{
    surname:string;
    age:number;
    constructor(surname:string,age:number){
        this.surname = surname;
        this.age = age;
    };
}

const john = new Person("Doe",25);
console.log(john.surname);
console.log(john.age);
*/

//! Small Projects on Classes
//^ 1st Managing Bank Account
/*
class BankAccount {
  accountHolder: string;
  balance: number;
  constructor(accountHolder: string, balance: number) {
    this.accountHolder = accountHolder;
    this.balance = balance;
  }
  deposit(amount: number): void {
    this.balance += amount;
  }
  printAccountSummary = (): string => {
    return `Bank Account Summary \nAccountHolder Name: ${this.accountHolder} \nTotal Amount (In Rupees): ${this.balance}`;
  };
}

const account1 = new BankAccount("Sitaram", 65485);
console.log(account1.accountHolder);
console.log(account1.balance);
account1.deposit(5456);
console.log(account1.balance);
console.log(account1.printAccountSummary());
*/

//^ 2nd) Area of Rectangle
/*
class AreaOfRectangle{
    length:number;
    breadth:number;
    constructor(length:number,breadth:number){
        this.length = length;
        this.breadth = breadth;
    };
    areaFn():void{
        console.log(`Area of Rectangle is: ${this.length*this.breadth}`);
    }
}

const reactangle1 = new AreaOfRectangle(5,9);
console.log(reactangle1.length);
console.log(reactangle1.breadth);
reactangle1.areaFn();
*/

//^ 3rd) Area of Triangle
class AreaOfTriangle {
  areaFn(base: number, height: number): string {
    return `Area of Triangle: ${0.5 * base * height}`;
  } 
}

const triangle1 = new AreaOfTriangle();
console.log(`Area of Triangle is: ${triangle1.areaFn(6, 30)}`);
