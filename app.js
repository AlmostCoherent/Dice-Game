//* Player Elements
let player1Score = 0;
let player2Score = 0;
player1Turn = true;
let player1RoundsWon = 0;
let player2RoundsWon = 0;
const message = document.getElementById("message");
const player1Scorecard = document.getElementById("player1Score");
const player2Scorecard = document.getElementById("player2Score");
const player1Dice = document.getElementById("player1Dice");
const player2Dice = document.getElementById("player2Dice");
//* BUTTONS
const rollButton = document.getElementById("rollBtn");
const restartButton = document.getElementById("restartBtn");
const nextRound = document.getElementById("nextRoundBtn");

const container = document.getElementById("container-box");
//* ROUND INDICATORS
const player1Round1 = document.getElementById("player-1-round1");
const player1Round2 = document.getElementById("player-1-round2");
const player1Round3 = document.getElementById("player-1-round3");
const player1Round4 = document.getElementById("player-1-round4");
const player1Round5 = document.getElementById("player-1-round5");

const player2Round1 = document.getElementById("player-2-round1");
const player2Round2 = document.getElementById("player-2-round2");
const player2Round3 = document.getElementById("player-2-round3");
const player2Round4 = document.getElementById("player-2-round4");
const player2Round5 = document.getElementById("player-2-round5");

let currentRound = 1;
const roundMessage = document.getElementById("roundMessage");

function showNextRoundButton() {
  rollButton.style.display = "none";
  restartButton.style.display = "none";
  nextRound.style.display = "inline";
}
function showRestartButton() {
  rollButton.style.display = "none";
  restartButton.style.display = "inline";
  nextRound.style.display = "none";
}

function winner() {
  if (player1RoundsWon === 3) {
    message.textContent = "Player 1 Wins The Game!";
    container.classList.add("gameWinner");
    showRestartButton();
  } else if (player2RoundsWon === 3) {
    message.textContent = "Player 2 Wins The Game!";
    container.classList.add("gameWinner");
    showRestartButton();
  }
}

function roundTracker() {
  //! ROUND 1
  if (player1Score >= 20 && currentRound === 1) {
    player1Round1.style.backgroundColor = "green";
    player2Round1.style.backgroundColor = "red";
    roundMessage.textContent = 2;
    message.textContent = "Player 1 Wins Round 1!";
    player1RoundsWon += 1;
    currentRound = 2;
  } else if (player2Score >= 20 && currentRound === 1) {
    player2Round1.style.backgroundColor = "green";
    player1Round1.style.backgroundColor = "red";
    roundMessage.textContent = 2;
    message.textContent = "Player 2 Wins Round 1!";
    player2RoundsWon += 1;
    currentRound = 2;
    //! ROUND 2
  } else if (player1Score >= 20 && currentRound === 2) {
    player1Round2.style.backgroundColor = "green";
    player2Round2.style.backgroundColor = "red";
    roundMessage.textContent = 3;
    message.textContent = "Player 1 Wins Round 2!";
    player1RoundsWon += 1;
    currentRound = 3;
  } else if (player2Score >= 20 && currentRound === 2) {
    player2Round2.style.backgroundColor = "green";
    player1Round2.style.backgroundColor = "red";
    roundMessage.textContent = 3;
    message.textContent = "Player 2 Wins Round 2!";
    player2RoundsWon += 1;
    currentRound = 3;
    //! ROUND 3
  } else if (player1Score >= 20 && currentRound === 3) {
    player1Round3.style.backgroundColor = "green";
    player2Round3.style.backgroundColor = "red";
    roundMessage.textContent = 4;
    message.textContent = "Player 1 Wins Round 3!";
    player1RoundsWon += 1;
    currentRound = 4;
  } else if (player2Score >= 20 && currentRound === 3) {
    player2Round3.style.backgroundColor = "green";
    player1Round3.style.backgroundColor = "red";
    roundMessage.textContent = 4;
    message.textContent = "Player 2 Wins Round 3!";
    player2RoundsWon += 1;
    currentRound = 4;
    //! ROUND 4
  } else if (player1Score >= 20 && currentRound === 4) {
    player1Round4.style.backgroundColor = "green";
    player2Round4.style.backgroundColor = "red";
    roundMessage.textContent = 5;
    message.textContent = "Player 1 Wins Round 4!";
    player1RoundsWon += 1;
    currentRound = 5;
  } else if (player2Score >= 20 && currentRound === 4) {
    player2Round4.style.backgroundColor = "green";
    player1Round4.style.backgroundColor = "red";
    roundMessage.textContent = 5;
    message.textContent = "Player 2 Wins Round 4!";
    player2RoundsWon += 1;
    currentRound = 5;
    //! ROUND 5
  } else if (player1Score >= 20 && currentRound === 5) {
    player1Round5.style.backgroundColor = "green";
    player2Round5.style.backgroundColor = "red";
    message.textContent = "Player 1 Wins Round 5!";
    player1RoundsWon += 1;
    currentRound = 6;
  } else if (player2Score >= 20 && currentRound === 5) {
    player2Round5.style.backgroundColor = "green";
    player1Round5.style.backgroundColor = "red";
    message.textContent = "Player 2 Wins Round 5!";
    player2RoundsWon += 1;
    currentRound = 6;
  }
}

rollButton.addEventListener("click", function () {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  if (player1Turn) {
    message.textContent = "Player 1 Turn";
    player1Score += randomNumber;
    player1Dice.textContent = randomNumber;
    player1Scorecard.textContent = player1Score;
    player1Dice.classList.add("active");
    player2Dice.classList.remove("active");
  } else {
    message.textContent = "Player 2 Turn";
    player2Score += randomNumber;
    player2Dice.textContent = randomNumber;
    player2Scorecard.textContent = player2Score;
    player2Dice.classList.add("active");
    player1Dice.classList.remove("active");
  }

  if (player1Score >= 20) {
    container.classList.add("winner");
    message.style.color = "white";

    showNextRoundButton();
  } else if (player2Score >= 20) {
    container.classList.add("winner");
    message.style.color = "white";

    showNextRoundButton();
  }

  roundTracker();
  winner();

  player1Turn = !player1Turn;
});

nextRound.addEventListener("click", function () {
  roundReset();
});
restartButton.addEventListener("click", function () {
  restartGame();
});
function roundReset() {
  player1Score = 0;
  player2Score = 0;
  player1Turn = true;
  container.classList.remove("winner");
  message.style.color = "black";
  player1Scorecard.textContent = 0;
  player2Scorecard.textContent = 0;
  player1Dice.textContent = "-";
  player2Dice.textContent = "-";
  message.textContent = "Player 1 Turn";
  nextRound.style.display = "none";
  rollButton.style.display = "inline";
  player2Dice.classList.remove("active");
  player1Dice.classList.add("active");
}
function restartGame() {
  player1Score = 0;
  player2Score = 0;
  player1Turn = true;
  container.classList.remove("winner");
  container.classList.remove("gameWinner");
  message.style.color = "black";
  player1Scorecard.textContent = 0;
  player2Scorecard.textContent = 0;
  player1Dice.textContent = "-";
  player2Dice.textContent = "-";
  message.textContent = "Player 1 Turn";
  nextRound.style.display = "none";
  rollButton.style.display = "inline";
  player2Dice.classList.remove("active");
  player1Dice.classList.add("active");
  player1Round1.style.backgroundColor = "white";
  player1Round2.style.backgroundColor = "white";
  player1Round3.style.backgroundColor = "white";
  player1Round4.style.backgroundColor = "white";
  player1Round5.style.backgroundColor = "white";
  player2Round1.style.backgroundColor = "white";
  player2Round2.style.backgroundColor = "white";
  player2Round3.style.backgroundColor = "white";
  player2Round4.style.backgroundColor = "white";
  player2Round5.style.backgroundColor = "white";
  restartButton.style.display = "none";
  player1RoundsWon = 0;
  player2RoundsWon = 0;
  currentRound = 1;
  roundMessage.textContent = 1;
}
