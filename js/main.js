
let display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
let operators = ["%", "/", "*", "+", "-", "="];
let result = "";

const calculet = (val) => {
  if (val === "=" && result !== "") {
    result = eval(result.replace("%", "/100"));
  } else if (val === "C") {
    result = result.toString().slice(0, -1);
  } else {
    if (result === "" && operators.includes(val)) return;
    result += val;
  }
  display.value = result;
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculet(e.target.dataset.value));
});

let right = document.querySelector(".right");

