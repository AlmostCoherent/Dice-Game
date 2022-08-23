function rollDice() {
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
}
