const inputRef = document.querySelector('#validation-input');
const attrRef = document.querySelector('[data-length]');

const attrLength = Number(attrRef.dataset.length);

inputRef.addEventListener('focus', () => {
  inputRef.classList.remove('invalid');
  inputRef.classList.remove('valid');
});

inputRef.addEventListener('blur', () => {
  const length = (inputRef.textContent = event.target.value.length);

  if ((length > 0 && length < attrLength) || length > attrLength) {
    inputRef.classList.add('invalid');
  } else if (length === attrLength) {
    inputRef.classList.add('valid');
  }
});
