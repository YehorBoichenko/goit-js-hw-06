// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.
// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const counterButton = {
    increment: document.querySelector("[data-action= 'increment']"),
    decrement: document.querySelector("[data-action= 'decrement']"),
    span: document.querySelector("#value"),
};
let counterValue = 0;
const increment = () => {
    counterValue += 1;
    counterButton.span.textContent = counterValue;
};
const decrement = () => {
    counterValue -= 1;
    counterButton.span.textContent = counterValue;
};

counterButton.increment.addEventListener("click", increment);
counterButton.decrement.addEventListener("click", decrement);


