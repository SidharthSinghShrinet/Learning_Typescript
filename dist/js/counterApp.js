let count = 0;
const display = document.getElementById("counter-display");
const incrementBtn = document.getElementById("increment-btn");
const decrementBtn = document.getElementById("decrement-btn");
const resetBtn = document.getElementById("reset-btn");
function displayCount() {
    display.innerText = count.toString();
}
incrementBtn.addEventListener("click", () => {
    count++;
    displayCount();
});
decrementBtn.addEventListener("click", () => {
    if (count > 0) {
        count--;
        displayCount();
    }
});
resetBtn.addEventListener("click", () => {
    count = 0;
    displayCount();
});
export {};
//# sourceMappingURL=counterApp.js.map