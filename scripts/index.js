function computerPlay() {
  choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You Win! Rock beats Scissors";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "You Lose! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You Lose! Scissors beats Paper";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You Win! Paper beats Rock";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You Win! Scissors beats Paper";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You Lose! Rock beats Scissors";
  } else {
    return "Draw!";
  }
}

const buttons = document.querySelectorAll(".choice-btn");
const winnerText = document.querySelector(".winner-text");
const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");
const roundInfo = document.querySelector(".round");

let round = 0;
roundInfo.innerText = round;

let playerChoice = "";
let computerWinCount = 0;
let playerWinCount = 0;
let finalWinner = "";

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (gameEnded(round)) return;

    playerChoice = e.target.innerText.toLowerCase();
    computerChoice = computerPlay();

    let result = playRound(playerChoice, computerChoice);
    winnerText.innerText = result;

    if (result.startsWith("You Lose")) {
      computerWinCount++;
      computerScore.innerText = computerWinCount;
    } else if (result.startsWith("Draw!")) {
    } else {
      playerWinCount++;
      playerScore.innerText = playerWinCount;
    }
    round++;
    roundInfo.innerText = round;
    if (gameEnded(round)) return;
  });
});

function gameEnded(round) {
  if (round === 5) {
    if (computerWinCount > playerWinCount) {
      finalWinner = "Computer won the game";
    } else if (computerWinCount === playerWinCount) {
      finalWinner = "Game ends in draw";
    } else finalWinner = "You won the game";
    winnerText.innerText = finalWinner;
    return true;
  }
  return false;
}

const restartBtn = document.querySelector("#restart");
restartBtn.addEventListener("click", () => {
  winnerText.innerText = "";
  computerWinCount = 0;
  playerWinCount = 0;
  computerScore.innerText = 0;
  playerScore.innerText = 0;
  round = 0;
  roundInfo.innerText = round;
});

// console.log(playRound(playerSelection, computerSelection));

// function game() {
//   let computerWinCount = 0;
//   let playerWinCount = 0;
//   for (let i = 0; i < 5; i++) {
//     let playerSelection = prompt("Enter your choice?");
//     let computerSelection = computerPlay();
//     winner = playRound(playerSelection.toLowerCase(), computerSelection);
//     console.log(winner);
//     if (winner.startsWith("Draw!")) {
//       i--;
//       continue;
//     }
//     if (winner.startsWith("You Lose")) {
//       computerWinCount++;
//     } else {
//       playerWinCount++;
//     }
//   }
//   if (computerWinCount > playerWinCount) {
//     console.log("You win!");
//   } else if (computerWinCount === playerWinCount) {
//     console.log("Draw!");
//   } else {
//     console.log("You lose!");
//   }
// }

// game();
