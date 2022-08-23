function SetupGame(numberOfPlayers){
  var players = [];
  for(var i; i < numberOfPlayers; i++){
    //we +1 so that player 1 is 1 and not zero
    players.add(new Player(i+1, 0, 0))
  }
  
  currentGame = new Game(players, "New game, yay!", 1);
}

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
  // Return winning player if there is one.
  var result = doWeHaveAWinner();
  
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
  rollDice();
});

nextRound.addEventListener("click", function () {
  roundReset();
});
restartButton.addEventListener("click", function () {
  restartGame();
});
