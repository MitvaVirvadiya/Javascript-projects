const btn = document.querySelector('#emoji');
const emojis = [
  '😆',
  '😅',
  '🤣',
  '😂',
  '😀',
  '🤑',
  '🤨',
  '🙂',
  '😊',
  '😗',
  '😛',
  '😏',
  '🤥',
  '😴',
  '🥺',
  '😧',
  '😇',
  '😳',
  '🙃',
  '🥴',
  '🧐',
  '🤨',
  '😒',
  '🤔',
  '🤭',
  '🥰',
  '🤐',
  '👀',
  '🤔',
  '🤪',
  '🥲',
  '😃',
  '😁',
  '😬',
];

const emojiChange = () => {
  const newIndex = Math.floor(Math.random() * emojis.length);
  console.log(newIndex);
  btn.textContent = emojis[newIndex];
};

btn.addEventListener('mouseover', () => {
  emojiChange();
  btn.style.filter = 'grayscale(0)';
});

btn.addEventListener('mouseout', () => {
  btn.style.filter = 'grayscale(1)';
});
