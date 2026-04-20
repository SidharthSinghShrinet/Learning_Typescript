//! Variable with Type Annotations
/*
const str: string = "Hello, Typescript";
const num: number = 454;
const numArr: number[] = [1, 2, 3, 4, 5];
const movies: string[] = ["Race", "Krrish", "Dhoom"];
const mixedArr: (string | number)[] = [1, 2, 3, "Hello", "Hii", 5, "Hey"];

console.log(str);
console.log(num);
console.log(numArr);
console.log(movies);
console.log(mixedArr);
console.log(typeof str);
console.log(typeof num);
console.log(typeof numArr);
console.log(typeof movies);
console.log(typeof mixedArr);
*/
//! Function with Type Annotations
/*
function greet(name: string): string {
  return `Hi, My name is ${name}`;
}

console.log(greet("Raxsxsaxsdfdfsaxm"));
*/
//! Object with Type Annotations
/*
const person: {
  name: string;
  age: number;
  canVote: boolean;
} = {
  name: "Ram",
  age: 25,
  canVote: true,
};

console.log(person);
*/
//! Array with Type Annotations
/*
//* Number Array
let nums: number[] = [1, 2, 3, 4.5, 5];
console.log(nums);

//* String Array
let strs: string[] = ["Hello", "Hii", "Hey!"];
console.log(strs);

//* Mixed Array (Both Number and Array are present inside the Array)
let mixed: (string | number)[] = [1, 2, 3, "Delhi"];
console.log(mixed);
*/
export {};
//! Class with Type Annotations
/*
class Car {
  carModel: string;
  carColour: string;
  constructor(model: string, colour: string) {
    this.carModel = model;
    this.carColour = colour;
  }
  aboutCar(): string {
    return `My car name is ${this.carModel} and it's colour is light ${this.carColour}`;
  }
}

let newCar = new Car("Mustang", "Yellow");
console.log(newCar.carModel);
console.log(newCar.carColour);
console.log(newCar.aboutCar());
*/ 
//# sourceMappingURL=typeAnnotations.js.map