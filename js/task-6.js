const inputRef = document.querySelector('#validation-input');
const attrRef = document.querySelector('[data-length]');
inputRef.setAttribute('autocomplete', 'off');

const attrLength = Number(attrRef.dataset.length);

inputRef.addEventListener('blur', handleInputBlur);

function handleInputBlur(event) {
  const length = (inputRef.textContent = event.target.value.length);
  if (length === attrLength) {
    inputRef.classList.remove('invalid');
    inputRef.classList.add('valid')
  } else {
    inputRef.classList.remove('valid');
    inputRef.classList.add('invalid')
  }
}



/*
inputRef.addEventListener('focus', handleInputFocus);
inputRef.addEventListener('blur', handleInputBlur);

function handleInputFocus() {
  inputRef.classList.remove('invalid');
  inputRef.classList.remove('valid');
}
function handleInputBlur() {
  const length = (inputRef.textContent = event.target.value.length);
  if ((length > 0 && length < attrLength) || length > attrLength) {
    inputRef.classList.add('invalid');
  } else if (length === attrLength) {
    inputRef.classList.add('valid');
  } 
}
*/