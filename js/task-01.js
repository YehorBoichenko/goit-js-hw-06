 // Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories,
// найдет и выведет в консоль текст заголовка элемента(тега < h2 >)
// и количество элементов в категории(всех вложенных в него < li >).


// если делать через метод map

const listOfCategories = document.querySelectorAll(".item");
console.log(`Number of categories:${listOfCategories.length}`);
const listArray = [...listOfCategories]
    .forEach(categories => `Category: ${categories.children[0].textContent}
Elements:${categories.children[1].children.length}`)
    .join("\n");


// если делать через forEach;

// const listOfCategories = document.querySelectorAll("ul#categories");
// console.log("Number of categories:",listOfCategories.children.length);

// [...listOfCategories.children].forEach((item) => {
//     console.log("", item.children[0].textContent);
//     console.log("", item.children[1].children.length);
// });
