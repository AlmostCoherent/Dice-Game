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
  