const refs = {
  decrBtn: document.querySelector('[data-action="decrement"]'),
  incrBtn: document.querySelector('[data-action="increment"]'),
  counterValueEl: document.querySelector("#value"),
};

let counterValue = 0;

refs.decrBtn.addEventListener("click", onDecrementClick);
refs.incrBtn.addEventListener("click", onIncrementClick);

function onDecrementClick() {
  counterValue -= 1;
  refs.counterValueEl.textContent = counterValue;
}

function onIncrementClick() {
  counterValue += 1;
  refs.counterValueEl.textContent = counterValue;
}
