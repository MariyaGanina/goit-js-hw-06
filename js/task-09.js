const body = document.querySelector("body");
const color = document.querySelector(".color");
const changeColor = document.querySelector(".change-color");

function changeBodyColor() {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  color.textContent = newColor;
}

changeColor.addEventListener("click", changeBodyColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
