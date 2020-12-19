const itemsRef = document.querySelectorAll('li.item');
console.log(`в списке ${itemsRef.length} категории`);

itemsRef.forEach(item => {
  const heading = item.querySelector('h2');
  console.log('Категория:', heading.textContent);

  const list = item.querySelectorAll('ul li');
  console.log('Количество элементов:', list.length);
});

// ВАРИАНТ №1

// const itemsRef = [...document.querySelectorAll('li.item')];
// console.log(`в списке ${itemsRef.length} категории`);

// itemsRef
//   .map(item => {
//     const title = item.querySelector('h2');
//     const list = item.querySelectorAll('ul li');
//     return {
//       title: title.textContent,
//       list: list.length,
//     };
//   })
//   .forEach(entry => {
//     console.log(
//       `Категория: ${entry.title}, \nКоличество элементов: ${entry.list}`,
//     );
//   });





