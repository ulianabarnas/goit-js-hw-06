const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

input.addEventListener("input", onInputChangeFontSize);

function onInputChangeFontSize({ currentTarget: { value } }) {
  text.style.fontSize = `${value}px`;
}
