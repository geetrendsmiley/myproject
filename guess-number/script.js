let randomNumber = Math.floor(Math.random() * 100) + 1;
const guessInput = document.getElementById('guessInput');
const checkBtn = document.getElementById('checkBtn');
const message = document.getElementById('message');
const resetBtn = document.getElementById('resetBtn');

checkBtn.addEventListener('click', checkGuess);
resetBtn.addEventListener('click', resetGame);

function checkGuess() {
  const guess = Number(guessInput.value);
  if (!guess) {
    message.textContent = "⛔ Please enter a number!";
    return;
  }

  if (guess === randomNumber) {
    message.textContent = `🎉 Correct! The number was ${randomNumber}`;
    message.style.color = "green";
  } else if (guess < randomNumber) {
    message.textContent = "📉 Too low! Try again.";
    message.style.color = "red";
  } else {
    message.textContent = "📈 Too high! Try again.";
    message.style.color = "red";
  }
}

function resetGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  message.textContent = "";
  guessInput.value = "";
}
