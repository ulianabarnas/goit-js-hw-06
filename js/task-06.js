const input = document.querySelector("#validation-input");

input.addEventListener("blur", onInputBlur);
input.addEventListener("focus", onInputFocus);

function onInputBlur({ currentTarget: { value } }) {
  value.trim().length === +input.dataset.length
    ? input.classList.add("valid")
    : input.classList.add("invalid");
}

function onInputFocus() {
  input.classList.toggle("invalid");
}
