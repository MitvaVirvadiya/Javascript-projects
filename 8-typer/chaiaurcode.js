const typedTextSpan = document.querySelector('.typed-text');
const cursor = document.querySelector('.cursor');
let input = '';
let filteredWord = [];

const words = [
  'Awesome',
  'Amazing',
  'Adventurous',
  'Brilliant',
  'Beautiful',
  'Bold',
  'Creative',
  'Clever',
  'Cheerful',
  'Dazzling',
  'Dynamic',
  'Delightful',
  'Energetic',
  'Enthusiastic',
  'Exciting',
  'Fantastic',
  'Friendly',
  'Fun-loving',
  'Good',
  'Gracious',
  'Graceful',
  'Happy',
  'Helpful',
  'Hopeful',
  'Innovative',
  'Inspiring',
  'Intelligent',
  'Joyful',
  'Jubilant',
  'Jovial',
  'Kind',
  'Knowledgeable',
  'Keen',
  'Lively',
  'Loving',
  'Loyal',
  'Mindful',
  'Motivated',
  'Magical',
  'Nice',
  'Nurturing',
  'Optimistic',
  'Passionate',
  'Positive',
  'Playful',
  'Quality',
  'Quirky',
  'Quick-witted',
  'Radiant',
  'Resilient',
  'Resourceful',
  'Superb',
  'Supportive',
  'Sincere',
  'Terrific',
  'Trustworthy',
  'Thoughtful',
  'Unique',
  'Upbeat',
  'Understanding',
  'Vibrant',
  'Valiant',
  'Victorious',
  'Wonderful',
  'Warm-hearted',
  'Witty',
  'Xtraordinary',
  'Xenial',
  'Xenodochial',
  'Youthful',
  'Yummy',
  'Yearning',
  'Zesty',
  'Zealous',
  'Zippy',
];

const updateSuggestion = () => {
  typedTextSpan.textContent = input;

  if (filteredWord.length > 0) {
    const remainingWord = filteredWord[0].substring(
      input.length,
      filteredWord[0].length
    );
    cursor.textContent = remainingWord;
  } else {
    cursor.textContent = '';
  }
};

function type(key) {
  input += key;

  filteredWord = words.filter((word) => word.toLowerCase().startsWith(input));
  console.log(filteredWord);
  updateSuggestion();
}

function erase() {
  input = '';
  filteredWord = [];
  updateSuggestion();
}

function autoComplete() {
  typedTextSpan.textContent = filteredWord[0];
  cursor.textContent = '';
}

document.addEventListener('keydown', (event) => {
  const isAlpha = /^[a-zA-Z]$/.test(event.key);

  if (isAlpha) {
    type(event.key);
  } else if (event.keyCode == 8) {
    erase();
  } else if (event.keyCode == 9) {
    autoComplete();
    event.preventDefault();
  }
});
