let count:number = 0;

const display = document.getElementById("counter-display") as HTMLSpanElement;
const incrementBtn = document.getElementById("increment-btn") as HTMLButtonElement;
const decrementBtn = document.getElementById("decrement-btn") as HTMLButtonElement;
const resetBtn = document.getElementById("reset-btn") as HTMLButtonElement;
function displayCount():void{
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
