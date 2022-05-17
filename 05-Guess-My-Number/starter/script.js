'use strict';

// console.log(document.querySelector('.message').textContent);

// DOM: Document Object Model
// Structured representation of HTML documents. Allows JavaScript to access HTML elements and styles to manipulate them.

// document.querySelector('.message').textContent = '🎲 Correct Number';
// document.querySelector('.number').textContent = '13';
// document.querySelector('.score').textContent = '20';
// document.querySelector('.guess').value = 20;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// document.querySelector('.again').addEventListener('click', function () {
//   console.log(`reset is working`);
// });

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // when there is no input
  if (!guess) {
    displayMessage('⛔️ No number');
    //  document.querySelector('.message').textContent = '⛔️ No number';
  }

  // when player wins
  else if (guess === secretNumber) {
    displayMessage('🏆 Correct Number');
    //  document.querySelector('.message').textContent = '🏆 Correct Number';
    score++;
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '25rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  // when guess is incorrect
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? '🤦🏽‍♂️ Number too high' : '🤦🏽‍♂️ Number too low'
      );
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '🤦🏽‍♂️ Number too high' : '🤦🏽‍♂️ Number too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('😢 You lost!');
      // document.querySelector('.message').textContent = '😢 You lost!';
      document.querySelector('.score').textContent = 0;
    }
  }

  // when the input is higher
  //   else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '🤦🏽‍♂️ Number too high';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '😢 You lost!';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }

  // when the input is lower
  //   else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '🤦🏽‍♂️ Number too low';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '😢 You lost!';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  //   document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
