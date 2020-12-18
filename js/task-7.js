const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

// console.dir(textRef.value);

inputRef.addEventListener('input', () => {
  textRef.style.fontSize = inputRef.value + 'px';
});
