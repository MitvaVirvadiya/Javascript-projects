const input = document.getElementById('input-field');
const output = document.getElementById('output-field');

const applyFormat = (formatFunction, style) => {
  let words = input.value;
  output.textContent = formatFunction(words);

  if (style === 'bold') {
    output.style.fontWeight =
      output.style.fontWeight === 'bold' ? 'normal' : 'bold';
  } else if (style === 'italic') {
    output.style.fontStyle =
      output.style.fontStyle === 'italic' ? 'normal' : 'italic';
  } else if (style === 'underline') {
    output.style.textDecoration =
      output.style.textDecoration === 'underline' ? 'none' : 'underline';
  }
};

const uppercase = document.querySelector('.uppercase');
const lowercase = document.querySelector('.lowercase');
const capitalize = document.querySelector('.capitalize');
const bold = document.querySelector('.bold');
const italic = document.querySelector('.italic');
const underline = document.querySelector('.underline');

uppercase.addEventListener('click', (event) => {
  event.preventDefault();
  applyFormat((words) => words.toUpperCase(), null);
});

lowercase.addEventListener('click', (event) => {
  event.preventDefault();
  applyFormat((words) => words.toLowerCase(), null);
});

capitalize.addEventListener('click', (event) => {
  event.preventDefault();
  applyFormat(
    (words) => words.replace(/\b\w/g, (char) => char.toUpperCase()),
    null
  );
});

bold.addEventListener('click', (event) => {
  event.preventDefault();
  applyFormat((words) => words, 'bold');
});

italic.addEventListener('click', (event) => {
  event.preventDefault();
  applyFormat((words) => words, 'italic');
});

underline.addEventListener('click', (event) => {
  event.preventDefault();
  applyFormat((words) => words, 'underline');
});
