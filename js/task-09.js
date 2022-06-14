const randomColor = document.querySelector('.change-color');
const body = document.querySelector('body');
const span = document.querySelector('.color');
randomColor.addEventListener('click', buttonClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function buttonClick(event) {
  const color = getRandomHexColor();
  span.textContent = color;
  body.style.backgroundColor = color;
 
 
}
