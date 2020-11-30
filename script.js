'use strict';

// LOGIC //
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = document.querySelector('.highscore');
let previousHighscore = 0;

// DISPLAYS //
const scoreDisplay = document.querySelector('.score');
const message = document.querySelector('.message');
const number = document.querySelector('.number');
const documentBody = document.querySelector('body');

// BUTTONS //
const checkButton = document.querySelector('.check');
const againButton = document.querySelector('.again');

checkButton.addEventListener('click', startGame);

let score = 10;
function startGame() {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    message.textContent = '🚫 No number';
  } else if (guess === secretNumber) {
    message.textContent = '🎉 Correct number';
    documentBody.style.backgroundColor = '#60b347';
    number.textContent = secretNumber;

    if (secretNumber > previousHighscore) {
      previousHighscore = secretNumber;
      highscore.textContent = secretNumber;
    } else {
      highscore.textContent = previousHighscore;
    }

    number.style.width = '30rem';
  } else if (guess > secretNumber) {
    if (score > 1) {
      message.textContent = ' ⬆ Too high';
      score--;
      scoreDisplay.textContent = score;
      documentBody.style.backgroundColor = 'rgb(211, 24, 24)';
    } else {
      message.textContent = '💥 You lost the game';
      scoreDisplay.textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      message.textContent = '⬇ Too low';
      score--;
      scoreDisplay.textContent = score;
      documentBody.style.backgroundColor = 'rgb(211, 24, 24)';
    } else {
      message.textContent = '💥 You lost the game';
      scoreDisplay.textContent = 0;
    }
  }
}

againButton.addEventListener('click', restartGame);

function restartGame() {
  score = 10;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  message.textContent = 'Start guessing...';
  scoreDisplay.textContent = score;
  number.textContent = '?';
  document.querySelector('.guess').value = '';
  documentBody.style.backgroundColor = 'rgb(80, 24, 211)';
  number.style.width = '15rem';
  highscore.textContent = previousHighscore;
}
