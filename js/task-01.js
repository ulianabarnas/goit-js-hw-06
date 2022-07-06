//1
function getNumberOfCategories(selector) {
  const categoriesEl = document.querySelectorAll(selector);
  return `Number of categories: ${categoriesEl.length}`;
}

const result = getNumberOfCategories(".item");
console.log(result);

//2
const listEl = document.querySelectorAll("#categories ul");

listEl.forEach((element) => {
  console.log(`Category: ${element.previousElementSibling.textContent}`);
  console.log(`Elements: ${element.children.length}`);
});
