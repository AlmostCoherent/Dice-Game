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
  