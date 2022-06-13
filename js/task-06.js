// Напиши скрипт, который при потере фокуса на инпуте(событие blur),
//     проверяет его содержимое на правильное количество введённых символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.


let inputValue = document.getElementById("validation-input");

let totalLength = inputValue.getAttribute("data-length");
let inTotalLength = parseInt(totalLength, 6);

inputValue.addEventListener("input", function () {
    if (inputValue.value.length === inTotalLength) {
        inputValue.classList.remove("invalid");
        inputValue.classList.add("valid");
    }
    else {
        inputValue.classList.remove("valid");
        inputValue.classList.add("invalid");
    }
    // if (inputValue.value.length !== inTotalLength && inputValue.value.length !== 0) {
    //     inputValue.classList.add("invalid");
    // }
        
});
