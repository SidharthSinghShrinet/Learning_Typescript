//! 1) Named Function
function greet(name: string): string {
  return `My name is ${name}`;
}

console.log(greet("Sitaram"));

//! 2) Anonymous Function
const anonymousGreet = function (name: string): string {
  return `My name is ${name}`;
};

console.log(anonymousGreet("RadhaKrishna"));

//! 3) Arrow Function
const arrowGreet = (name: string): string => {
  return `My name is ${name}`;
};

console.log(arrowGreet("Narayana"));

//! 4) Optional and Default Parameters
function ex1(name: string, age: number = Infinity, father?: string): string {
  return `My name is ${name} and my age is ${age} and my father name is ${father}`;
}

// console.log(ex1("Hanuman",undefined,"Shri Keshari Nandan ji and Vayu ji"));

//! 5) Return Type
function printName(name: string): string {
  return `My name is ${name}`;
}

console.log(printName("Choonaasi"));

//! 6) Void Type
function printDonName(name: string): void {
  console.log(`My name is don ${name}`);
}

printDonName("Sidharth");

//! 7) REST Parameters
function printArr(...arr:number[]):void{
    console.log(arr);
};
printArr(1,2,3,4,5);

//! 