const firstColor = document.querySelector("#first-color");
const secondColor = document.querySelector("#second-color");
const css = document.querySelector("h3");
const body = document.querySelector("body");

function changeColor() {
  body.style.background =
    "linear-gradient(to right," +
    firstColor.value +
    "," +
    secondColor.value +
    ")";
  css.textContent = body.style.background + ";";
}

firstColor.value = "#ff0000";
secondColor.value = "#ffff00";
changeColor();

firstColor.addEventListener("input", changeColor);

secondColor.addEventListener("input", changeColor);
