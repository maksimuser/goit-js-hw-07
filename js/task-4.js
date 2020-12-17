let counterValue = 0;

const valueRef = document.querySelector('#value');
const btnIncrementRef = document.querySelector(
  'button[data-action="increment"]',
);
const btndecrementRef = document.querySelector(
  'button[data-action="decrement"]',
);

btnIncrementRef.addEventListener('click', increment);
btndecrementRef.addEventListener('click', decrement);

function increment() {
  valueRef.textContent = counterValue += 1;
}
function decrement() {
  valueRef.textContent = counterValue -= 1;
}
