const btn = document.querySelector("button");

let randNum = Math.floor(Math.random() * 100) + 1;

const getData = document.querySelector("input");

const prevGuess = document.querySelector("#prev-guess");

const attemptsLeft = document.querySelector("#attempts");

const displayResult = document.querySelector("#res");

const p = document.createElement("p");

let previousGuess = [];
let totalAttempts = 5;

let gamePlay = true;

if (gamePlay) {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(getData.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please Enter a valid number");
  } else if (guess < 1) {
    alert("Number Must be more than 1");
  } else if (guess > 100) {
    alert("Number Must be less than 100");
  } else {
    previousGuess.push(guess);
    displayGuess(guess);
    if (totalAttempts < 1) {
      displayMessage(`Game Over. Correct Guess is ${randNum}`);
      endGame();
    } else {
      // displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess > randNum) {
    displayMessage(`Your Guess is more than actual number`);
  } else if (guess < randNum) {
    displayMessage(`Your Guess is less than actual number`);
  } else {
    displayMessage(`You Got the number it's ${guess}`);
  }
}

function displayGuess(guess) {
  getData.value = "";
  prevGuess.innerHTML += `${guess}, `;
  totalAttempts--;
  attemptsLeft.innerHTML = `Remaining Attempts = ${totalAttempts}`;
}

function displayMessage(msg) {
  displayResult.innerHTML = `<h3> ${msg} </h3>`;
}

function endGame() {
  getData.innerHTML = "";
  getData.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<button id = "playAgain">Play Again</button>`;
  displayResult.appendChild(p);
  gamePlay = false;
  newGame();
}

function newGame() {
  let newGameBtn = document.querySelector('#playAgain');
  newGameBtn.addEventListener('click', (e) => {
    
    randNum = Math.floor(Math.random() * 100) + 1;
    prevGuess = [];
    totalAttempts = 5;
    attemptsLeft.innerHTML = `Remaining Attempts = ${totalAttempts}`;
    getData.removeAttribute("disabled");
    displayResult.removeChild(p);
    gamePlay = true;
  });
}
