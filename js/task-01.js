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

const liItemEl = document.querySelectorAll(".item");
console.log(`Number of categories:`, document.querySelectorAll(".item").length);

// АБО-
// const liItemEl = document.querySelector("#categories");
// console.log('Number of categories:', liItemEl.children.length);

const titlesEl = document.querySelectorAll(".item");
// console.log(titlesEl);

for (const title of titlesEl) {
  console.log(`Category:`, title.firstElementChild.textContent);
  console.log(`Elements:`, title.lastElementChild.children.length);
}
