function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const color = document.querySelector(".color");

changeColorBtn.addEventListener("click", onChangeColorBtnClick);

function onChangeColorBtnClick() {
  const hexColor = getRandomHexColor();
  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
}
