// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".


const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');
console.log(inputEl);
console.log(spanEl);


inputEl.addEventListener('input', inputHandler);
    
function inputHandler(event) { 
    console.log(event.currentTarget.value);
    spanEl.textContent = event.currentTarget.value;
    console.log(spanEl);
};