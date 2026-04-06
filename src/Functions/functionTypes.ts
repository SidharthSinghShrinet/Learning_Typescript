//! Types of Function

//* 1) Named Function
function sumOfTwoNumbers(a: number, b: number): number {
  return a + b;
}
console.log(sumOfTwoNumbers(8, 43));

function concatenation(a: string, b: string): string {
  return a + b;
}
console.log(concatenation("Hello", "Duniya"));

//* 2) Anonymous Function
const printTotalSalary = function (
  baseSalary: number,
  bonusSalary: number,
): void {
  console.log("Total Salary:", baseSalary + bonusSalary);
};

printTotalSalary(43145, 5694);

//* 3) Arrow Function
const tellAboutCar = (
  model: string,
  color: string,
  variant: string,
): string => {
  return `My car is ${model}, it is in ${color} color and it's variant is ${variant};`;
};

console.log(tellAboutCar("Gallardo", "yellow", "petrol"));

//* 4) Optional Parameters and Default Paramters
const iplTeams = (
  t1: string = "RCB",
  t2: string,
  t3: string = "CSK",
): string => {
  return `Favourite Teams are ${t1}, ${t2}, ${t3}`;
};

console.log(iplTeams(undefined, "MI"));

//* 5) REST parameters
let iplTeam = ["MI","CSK","RCB","KKR","SRH","GT","LSG","DC","KXIP","RR"];

function printAllTeams(teams:string[]){
    for(let i=0;i<teams.length;i++){
        console.log(teams[i])
    }
};
printAllTeams(iplTeam);

//* 6) Call Signatures
type greetFunction = {
    (name:string):string,
    description:string
}

const greet:greetFunction = (name:string) => {
    return `Hello, ${name}`
}

greet.description = "Mahapurush"; 

console.log(greet("Ram"))
console.log(greet.description)


type calculatorFunction = {
    (a:number,b:number):number,
    operation:string
}

const plus:calculatorFunction = (a:number,b:number) => {
    return a+b;
}
plus.operation="Addition";

console.log(`${plus.operation}: ${plus(25,10)}`);