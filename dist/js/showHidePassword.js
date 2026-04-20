let need = true;
const btn = document.getElementById("btn");
const input = document.getElementById("input");
btn.addEventListener("click", () => {
    console.log("Button is clicked");
    if (!need) {
        input.type = "password";
        btn.textContent = "👁️";
    }
    else {
        input.type = "text";
        btn.textContent = "🙈";
    }
    need = !need;
    console.log(need);
});
export {};
//# sourceMappingURL=showHidePassword.js.map