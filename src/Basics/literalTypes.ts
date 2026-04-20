//! Literal Types in Typescript

//* 1) String Literal Types
type direction = "Up" | "Down" | "Left" | "Right";

const move: direction = "Down";
let move1: direction = "Right";
let move2: direction;
move2 = "Up";
console.log(move);
console.log(move1);
console.log(move2);

//* 2) Numeric Literal Types
type diceValue = 1 | 2 | 3 | 4 | 5 | 6;

function printDiceValue(value: diceValue): void {
  console.log(`I will roll the dice and I will get ${value}`);
}

printDiceValue(6);

//* 3) Boolean Literal Types
type decided = true | false;

function result(value: decided): void {
  if (value) {
    console.log("You are pass");
  } else {
    console.log("You are Failed");
  }
}

result(false);
