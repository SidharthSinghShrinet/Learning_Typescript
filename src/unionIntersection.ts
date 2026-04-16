//! Union Types
let a: number | string = 25;
console.log(a);
a = "Ram";
console.log(a);


//! Intersection Types
//^ Example 
type a = {name:string}
type b = {age:number}

type c = a & b
let obj:c = {
    name:"Ram",
    age:25
}
console.log(obj);

//^ Example (Union Types)
type d = a | b
let obj1:d = {
    // name:"Ram",
    age:25
}

console.log(obj1)