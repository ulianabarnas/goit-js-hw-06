const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

function makeArreyOfItems(arr) {
  return arr.map((ingredient) => {
    const item = document.createElement("li");
    item.textContent = ingredient;
    item.classList.add("item");

    return item;
  });
}
const arreyOfItems = makeArreyOfItems(ingredients);

list.append(...arreyOfItems);
