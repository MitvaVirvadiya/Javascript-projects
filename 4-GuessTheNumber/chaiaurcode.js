document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('subt');
  const hint = document.querySelector('.lowOrHi');
  const remGuess = document.querySelector('.lastResult');

  let randomNo;
  let prevGuess = [];
  let guessNum = 10;

  const generateRandomNo = () => {
    return Math.floor(Math.random() * 100) + 1;
  };

  const resetGame = () => {
    document.getElementById('guessField').value = '';
    randomNo = generateRandomNo();
    guessNum = 10;
    remGuess.textContent = guessNum;
    prevGuess = [];
    // hint.textContent = '';
    console.log(randomNo);
  };

  resetGame();

  const guessCheck = (num, guess) => {
    if (guess > num) {
      return 'low';
    } else if (guess < num) {
      return 'high';
    } else {
      return true;
    }
  };

  btn.addEventListener('click', (event) => {
    event.preventDefault();
    const guessInput = document.getElementById('guessField').value;
    const guess = parseInt(guessInput);

    if (guessNum === 0) {
      hint.textContent = `Game over! correct guess was ${randomNo}`;
      resetGame();
    } else {
      const msg = guessCheck(randomNo, guess);
      guessNum--;
      remGuess.textContent = guessNum;
      prevGuess.push(guess);

      if (msg === true) {
        hint.textContent = `Correct Guess in ${10 - guessNum} try`;
        resetGame();
      } else {
        hint.textContent = msg;
      }
    }
    document.querySelector('.guesses').textContent = prevGuess.join(', ');
  });
});
