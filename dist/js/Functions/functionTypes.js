//! Types of Function
//* 1) Named Function
function sumOfTwoNumbers(a, b) {
    return a + b;
}
console.log(sumOfTwoNumbers(8, 43));
function concatenation(a, b) {
    return a + b;
}
console.log(concatenation("Hello", "Duniya"));
//* 2) Anonymous Function
const printTotalSalary = function (baseSalary, bonusSalary) {
    console.log("Total Salary:", baseSalary + bonusSalary);
};
printTotalSalary(43145, 5694);
//* 3) Arrow Function
const tellAboutCar = (model, color, variant) => {
    return `My car is ${model}, it is in ${color} color and it's variant is ${variant};`;
};
console.log(tellAboutCar("Gallardo", "yellow", "petrol"));
//* 4) Optional Parameters and Default Paramters
const iplTeams = (t1 = "RCB", t2, t3 = "CSK") => {
    return `Favourite Teams are ${t1}, ${t2}, ${t3}`;
};
console.log(iplTeams(undefined, "MI"));
//* 5) REST parameters
let iplTeam = ["MI", "CSK", "RCB", "KKR", "SRH", "GT", "LSG", "DC", "KXIP", "RR"];
function printAllTeams(teams) {
    for (let i = 0; i < teams.length; i++) {
        console.log(teams[i]);
    }
}
;
printAllTeams(iplTeam);
const greet = (name) => {
    return `Hello, ${name}`;
};
greet.description = "Mahapurush";
console.log(greet("Ram"));
console.log(greet.description);
const plus = (a, b) => {
    return a + b;
};
plus.operation = "Addition";
console.log(`${plus.operation}: ${plus(25, 10)}`);
export {};
//# sourceMappingURL=functionTypes.js.map