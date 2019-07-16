const playRound = function(playerSelect, computerSelect) {
  let playerPick = playerSelect.toLowerCase();
  if (
    (playerPick === "rock" && computerSelect === "paper") ||
    (playerPick === "paper" && computerSelect === "scissors") ||
    (playerPick === "scissors" && computerSelect === "rock")
  ) {
    return `You lose, computer wins with a ${computerSelect}!`;
  } else if (
    (playerPick === "rock" && computerSelect === "scissors") ||
    (playerPick === "scissors" && computerSelect === "paper") ||
    (playerPick === "paper" && computerSelect === "rock")
  ) {
    return `Computer lose, you win with a ${playerPick}!`;
  } else {
    return `You both played ${playerPick}! It's a tie, try again!`;
  }
};

const computerPlay = function() {
  let rando = Math.floor(Math.random() * Math.floor(3));
  if (rando === 2) {
    return "paper";
  } else if (rando === 1) {
    return "rock";
  } else {
    return "scissors";
  }
};

let playerSelect = "rock";
let computerSelect = computerPlay();
console.log(playRound(playerSelect, computerSelect));
computerPlay();
