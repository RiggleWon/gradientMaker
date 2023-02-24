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

firstColor.addEventListener("input", changeColor);

secondColor.addEventListener("input", changeColor);

localStorage.setItem("changeColor", firstColor.value);
localStorage.setItem("secondColor", secondColor.value);
