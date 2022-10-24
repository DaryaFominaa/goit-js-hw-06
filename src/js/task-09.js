function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

const bodyEl = document.querySelector("body");
const buttonEl = document.querySelector(".change-color");
const colorSpanEl = document.querySelector(".color");

buttonEl.addEventListener("click", onClickChangeColor);

function onClickChangeColor() {
  bodyEl.style.backgroundColor = getRandomHexColor();
  colorSpanEl.textContent = bodyEl.style.backgroundColor;
}
