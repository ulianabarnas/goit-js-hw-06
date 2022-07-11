const inputRef = document.querySelector("#name-input");
const inputContentRef = document.querySelector("#name-output");

inputRef.addEventListener("input", onInputChange);

function onInputChange({ currentTarget: { value } }) {
  inputContentRef.textContent = value.trim() || "Anonymous";
}
