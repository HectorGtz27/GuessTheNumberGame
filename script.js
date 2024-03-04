'use strict';

/*  
// This line of code is used to select the element with the class of 'message' and then visualize the text content of that element to '🎉 Correct Number!'.
console.log(document.querySelector('.message').textContent);

// This line of code is used to select the element with the class of 'message' and then change the text content of that element to '🎉 Correct Number!'.
document.querySelector('.message').textContent = '🎉 Correct Number!';

console.log(document.querySelector('.message').textContent);

// This line of code is used to select the element with the class of 'number' and then visualize the text content of that element to 13.
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

// This line of code is used to select the element with the class of 'guess' and then change the value of that element to 23.
document.querySelector('.guess').value = 23;
// This line of code is used to select the element with the class of 'guess' and then visualize the value of that element.
console.log(document.querySelector('.guess').value);      
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;

// This is a state variable, this means that it is a variable that is going to change over time.
let score = 20;

let highScore = 0;

// This function would not only be called when there is an event.
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No number!';
    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // Change the styles of the body and the number
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // When the guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }

    // When the guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
