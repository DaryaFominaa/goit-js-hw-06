// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

// Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

const inputTextEl = document.querySelector("#validation-input");

inputTextEl.addEventListener("blur", blurHandler);

function blurHandler() {
  if (
    inputTextEl.value.length >= Number(inputTextEl.getAttribute("data-length"))
  ) {
    inputTextEl.classList.add("valid");
    inputTextEl.classList.remove("invalid");
  } else {
    inputTextEl.classList.add("invalid");
    inputTextEl.classList.remove("valid");
  }
}

// console.log(inputTextEl.dataset.length);
// console.log(inputTextEl.getAttribute('data-length'));

//  if(inputTextEl.value.length < Number(inputTextEl.getAttribute('data-length')))
