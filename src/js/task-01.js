"use strict";
// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у спику ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5


const liItemEl = document.querySelector("li.item");
console.log('Number of categories:', liItemEl.length);


const headingEl = liItemEl.querySelectorAll('.item')

// for (let i = 0; i < liItemEl.length; i += 1) { 
//     console.log(`Category:`liItemEl[i].querySelector('h2'));
// };



const textEl = document.querySelector('h2');
console.log('Category:', textEl.textContent);

// const nameEl = textEl.querySelector('li');
// console.log(nameEl);


const liItemElll = document.querySelectorAll("li.item");
console.log(liItemElll.children);