//! Type Aliases

//! Example 1
type input = string|number|boolean;
let input:input = 5665;
console.log(input);
input = "hello";
console.log(input);
input=false;
console.log(input);

//! Example 2 
type target = string|number|boolean|bigint;
function printSalary(value:target):boolean{
    if(value){
        return true;
    } else {
        return false;
    }
}

console.log(printSalary(true))