const inputValue = document.querySelector("input");
const createButton =document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]")
const divContainer = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// const create = value => {
//   inputValue.setAttribute("counter", value.currentTarget.value);
// };

const createBoxes = () => {
  let initialBoxSize = 20;
  let allDiv = [];
  for (let i = 1; i <= inputValue.value; i += 1) {
    initialBoxSize += 10;
    const newDiv = document.createElement("div");
    newDiv.classList.add("box-item");
    newDiv.style.width = `${initialBoxSize}px`;
    newDiv.style.height = `${initialBoxSize}px`;
    newDiv.style.border = "2 px solid tomato";
    newDiv.style.backgroundColor = `${getRandomHexColor()}`;
    newDiv.style.marginTop = "10px";
    newDiv.style.verticalAlign = "middle";

    // divContainer.append(newDiv)
    allDiv.push(newDiv)
  }
  console.log(allDiv);
  divContainer.innerHTML = "";
  divContainer.append( ...allDiv);
};

const destroyBoxes = () => {
  divContainer.innerHTML = "";
  inputValue.removeAttribute("counter");
  inputValue.value = "";
  
}
// inputValue.addEventListener("input", create);
createButton.addEventListener("click", createBoxes);
destroyButton.addEventListener("click", destroyBoxes);