let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHI = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

// Start new game paragraph
const p = document.createElement('p');

// to store the values submitted by the user
let prevGuess = [];

// no. of attempts made by user
let numGuess = 1;

// a variable to allow user to play the game (done in games)
let playGame = true;

// user is allowed to play game and enters a number, picked the number, checked it and submitted 
if(playGame){
  submit.addEventListener('click', function(e){
    e.preventDefault();
    const guess = parseInt(userInput.value);
    // if (guess === '' || guess < 0 || isNaN(guess)){
    //   console.log("Enter a valid number");
    // }
    console.log(guess);
    validateGuess(guess);
  });
}

// to check the validation of number entered by user (if entered number is number or not, range, negative values etc.)
function validateGuess(guess){
  if(isNaN(guess)){
    alert('Please enter a valid number');
  } else if (guess < 1){
    alert('Please enter a valid number');
  } else if (guess > 100) {
    alert ('Please enter a valid number');
  } else {
    prevGuess.push(guess); 
    if(numGuess === 10){
      displayGuess(guess);
      displayMessage(`Game Over. Ramdom Number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }    
}

// to print the message of the value if it is equal, low or high
function checkGuess(guess){
  if(guess === randomNumber){
    displayMessage("You guessed it right");
    endGame()
  } else if (guess < randomNumber){
    displayMessage("Number is too Low!");
  } else if (guess > randomNumber){
    displayMessage("Number is too High!");
  }
}

// clean the values, update the array 
function displayGuess(guess){
  // cleanup method updating the array
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

// to print message (connected to dom)
function displayMessage(message){
  lowOrHI.innerHTML = `<h3>${message}</h3>`;
}

function endGame(){
  userInput.value = ''
  userInput.setAttribute('disabled', '')  // disabling input so that user can't add more values
  p.classList.add('button');
  p.innerHTML = `<button id="newGame">Start new Game</button>`;
  p.style.textAlign = 'center';
  startOver.appendChild(p);
  const newGameButton = document.getElementById('newGame');
  newGameButton.style.backgroundColor = "orangered";
  newGameButton.style.padding = '10px';
  newGameButton.style.borderRadius = '10px';
  newGameButton.style.fontWeight = '600';
  playGame = false;
  newGame();
}

function newGame(){
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function(e){
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    lowOrHI.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled', '');
    startOver.removeChild(p);
    playGame = true;
  });
}
