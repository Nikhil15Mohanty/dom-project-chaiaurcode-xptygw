//first take random number
let random = parseInt((Math.random()*100+1));

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
  submit.addEventListener('click',(e)=>{
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  })
}

function validateGuess(guess){
  //check the guess value if it is number or alphabet or the guess value lies in the range

  if(isNaN(guess)){
    alert("Please enter a number");
  }else if(guess < 0 ){
    alert("Please make a guess more than 0 ");
  }else if(guess>100){
    alert("Please make a guess less the 100");
  }
  else{
    prevGuess.push(guess);
    if(numGuess === 10){
      displayGuess(guess);
      displayMessage(`Game over random number was ${random}`);
      endGame();
    }
    else{
      displayGuess(guess);
      checkGuess(guess); 
    }
  }

}

function checkGuess(guess){
  //check the guess number 
  if(guess === random){
    displayMessage(`You guessed it right 🎉🎉🎉`);
  }else if(guess < random){
    displayMessage(`Your guess is TOOOOO low 👇`);
  }else {
    displayMessage(`Your guess is TOOOOO high 👆`);
  }
}

function displayGuess(guess){
  //display the guess value
  userInput.value = '';
  guessSlot.innerHTML+=`${guess} `;
  numGuess++;
  remaining.innerHTML = `${11-numGuess}`
}

function displayMessage(message){
  //display the message
  lowOrHi.innerHTML=`<h2>${message}</h2>`
}
function endGame(){
  userInput.value = '';
  playGame = false;
  userInput.setAttribute('disabled','');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`
  startOver.appendChild(p);
  newGame();
}

function newGame(){
  const newGameBtn = document.querySelector("#newGame");
  newGameBtn.addEventListener('click',(e)=>{
    userInput.removeAttribute('disabled');
    prevGuess = [];
    numGuess = 1;
    random = parseInt(Math.random()*100+1);
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11-numGuess}`
    startOver.removeChild(p);

  })
}



