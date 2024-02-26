
const totalCategories = document.querySelectorAll(".item");
console.log(`Number of categories:${totalCategories.length}`);

const categoriesArray = [...totalCategories]
  .map(
    categories => `Categories: ${categories.children[0].textContent}
Elements: ${categories.children[1].children.length}`
  )
  .join("\n");
console.log(categoriesArray);