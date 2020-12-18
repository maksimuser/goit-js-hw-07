const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

const initialName = outputRef.textContent;

inputRef.addEventListener('input', textEvn);

function textEvn() {
  outputRef.textContent = event.target.value;
  if (outputRef.textContent === '') {
    outputRef.textContent = initialName;
  }
}
