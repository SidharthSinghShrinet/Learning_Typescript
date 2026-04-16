const resultStatus = "pending";
console.log("Result Status:", resultStatus);
function rollDice(value) {
    return `The result of rolled dice is ${value}`;
}
console.log(rollDice(6));
function electionSheet(value) {
    if (value) {
        console.log("Yes, you can vote.");
    }
    else {
        console.log("No, You can't vote");
    }
}
electionSheet(false);
export {};
//# sourceMappingURL=literalTypes.js.map