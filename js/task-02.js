const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul.ingredients.


const listOfIngridients = document.querySelector("#ingredients");
const addLi = ingredients.map(item => {
const items = document.createElement("li");
items.textContent = item;
items.classList.add("item");
  return items;
});
listOfIngridients.append(...addLi);
console.log(listOfIngridients);




