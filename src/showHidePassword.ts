let need: boolean = true;
const btn = document.getElementById("btn") as HTMLButtonElement;
const input = document.getElementById("input") as HTMLInputElement;

btn.addEventListener("click", (): void => {
  console.log("Button is clicked");
  if (!need) {
    input.type = "password";
    btn.textContent = "👁️";
  } else {
    input.type = "text";
    btn.textContent = "🙈";
  }
  need = !need;
  console.log(need);
});
