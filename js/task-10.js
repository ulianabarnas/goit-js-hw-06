function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const [input, createBtn, destroyBtn] =
  document.querySelector("#controls").children;
const boxesContainer = document.querySelector("#boxes");

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes() {
  const newArr = [];
  for (let i = 1; i <= +input.value; i += 1) {
    const box = document.createElement("div");
    box.style.width = box.style.height = `${20 + 10 * i}px`;
    box.style.background = getRandomHexColor();
    newArr.push(box);
  }
  boxesContainer.append(...newArr);
}

function destroyBoxes() {
  input.value = "";
  boxesContainer.innerHTML = "";
}
