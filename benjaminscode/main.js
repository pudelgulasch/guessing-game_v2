// Helper functions
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
  }

  // UI functions
  function printAppScreen(htmlString){
    let appElem = document.querySelector('#app');

    appElem.innerHTML = htmlString;
  }

  function printGuessScreen(title, message){
    printAppScreen(`
      <h1 class="display-1">${title}</h1>
      <p class="lead">${message}</p>
      <form class="mt-4 w-50 mx-auto" id="guess-form">
        <div class="form-row">
          <div class="col-xs-12 col-sm">
              <input type="number" class="form-control" name="guess" id="guess" placeholder="Your guess goes here..." required min="1" max="10">
          </div>
          <div class="col-xs-12 col-sm-4">
            <button type="submit" class="btn btn-primary w-100">Guess</button>
          </div>
        </div>
      </form>
    `);

    let guessForm = document.querySelector('#guess-form');

    guessForm.addEventListener('submit', makeGuess);
  }

  function printResultScreen(title, message){
    printAppScreen(`
      <h1 class="display-1">${title}</h1>
      <p class="lead">${message}</p>
      <button class="btn btn-primary btn-lg" role="button" id="again">Play Again!</button>
    `);

    let againButton = document.querySelector('#again');

    againButton.addEventListener('click', startGame);
  }

  // Globals
  let numberToGuess;
  let count;

  // Event handlers
  const startGame = function(){
    numberToGuess = getRandomIntInclusive(1, 10);
    count = 1;

    printGuessScreen('Guess Me!', 'I\'m thinking of a number between 1 and 10, can you guess it?');
  };

  const makeGuess = function(){
    let userGuess = parseInt(document.querySelector('#guess').value);

    if(userGuess === numberToGuess){
      printResultScreen('Success!!!', `The number is indeed ${numberToGuess}. You got the number correctly after ${count} attempts.`);
    } else if (count >= 3) {
      printResultScreen('Sorry, human', `You couldn't guess the number in less than three times. The number was ${numberToGuess}.`);
    } else {
      printGuessScreen('Wrong!!!', `Try Again! You have ${3 - count} attempts left`);
    }

    count++;
  };

  startGame();
