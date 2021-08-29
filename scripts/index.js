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
