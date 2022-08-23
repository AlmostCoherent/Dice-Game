//* Player Elements
let player1Score = 0;
let player2Score = 0;
player1Turn = true;
let player1RoundsWon = 0;
let player2RoundsWon = 0;
const currentGame = new Game();
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