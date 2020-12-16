const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientList = ingredients.map(ingredient => {
  const list = document.createElement('li');
  list.textContent = ingredient;
  return list;
});

const rootIngredients = document.querySelector('#ingredients');

rootIngredients.append(...ingredientList);

console.log(rootIngredients);
