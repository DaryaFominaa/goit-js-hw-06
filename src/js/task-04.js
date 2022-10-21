// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue

const counterValue = {
    value: 0,
    decrement (){
        this.value -= 1;
    },
    increment (){
        this.value += 1;
    }
}


const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');

console.log(decrementButton);
console.log(incrementButton);
console.log(valueEl);


decrementButton.addEventListener('click', function () {
    console.log('click on decr');
    counterValue.decrement();
    console.log(counterValue);

    valueEl.textContent = counterValue.value;
});


incrementButton.addEventListener('click', function () {
    console.log('click on incr');
 counterValue.increment();
    console.log(counterValue);
    valueEl.textContent = counterValue.value;
});

