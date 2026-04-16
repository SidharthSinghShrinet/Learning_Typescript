//& Literal Types
//^ There are three types of Literals Types.
//^ 1) String Literal Types
//! Example
type result = "pass" | "fail" | "pending";
const resultStatus: result = "pending";
console.log("Result Status:", resultStatus);

//^ 2) Numeric Literal Types
//! Example
type dieNumber = 1 | 2 | 3 | 4 | 5 | 6;

function rollDice(value: dieNumber): string {
  return `The result of rolled dice is ${value}`;
}

console.log(rollDice(6));

//^ 3) Boolean Literal Types
//! Example
type canVote = true | false;
function electionSheet(value: canVote): void {
  if (value) {
    console.log("Yes, you can vote.");
  } else {
    console.log("No, You can't vote");
  }
}

electionSheet(false);
