// function for randomizing the computer's pick
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

// staging area for counts
let roundCount = 0;
let playerWins = 0;
let compWins = 0;
let tie = 0;
let roundText = "";

let computerSelect = computerPlay();
let playerSelect = "";

// logic for each round
const playRound = function(playerSelect, computerSelect) {
  if (
    (playerSelect === "rock" && computerSelect === "paper") ||
    (playerSelect === "paper" && computerSelect === "scissors") ||
    (playerSelect === "scissors" && computerSelect === "rock")
  ) {
    roundCount += 1;
    compWins += 1;
    roundText = `You lose with ${playerSelect}, computer wins with ${computerSelect}!`;
  } else if (
    (playerSelect === "rock" && computerSelect === "scissors") ||
    (playerSelect === "scissors" && computerSelect === "paper") ||
    (playerSelect === "paper" && computerSelect === "rock")
  ) {
    roundCount += 1;
    playerWins += 1;
    roundText = `Computer lose with ${computerSelect}, you win with ${playerSelect}!`;
  } else {
    roundCount += 1;
    tie += 1;
    roundText = `You both played ${playerSelect}! It's a tie, try again!`;
  }
  let score = `Round: ${roundCount} | Player: ${playerWins} | Computer: ${compWins} | Tie: ${tie}`;

  document.getElementById("outcome").textContent = roundText;
  document.getElementById("summaryCount").textContent = score;
  return score;
};

// user choices
document.getElementById("rock").onclick = function() {
  playerSelect = "rock";
  console.log(playRound(playerSelect, computerSelect));
  computerSelect = computerPlay();
};

document.getElementById("paper").onclick = function() {
  playerSelect = "paper";
  console.log(playRound(playerSelect, computerSelect));
  computerSelect = computerPlay();
};

document.getElementById("scissors").onclick = function() {
  playerSelect = "scissors";
  console.log(playRound(playerSelect, computerSelect));
  computerSelect = computerPlay();
};

// logic for 5 round match

// reset score
function resetScore() {
  document.getElementById("outcome").textContent = "";
  document.getElementById("summaryCount").textContent = "";
  roundCount = 0;
  playerWins = 0;
  compWins = 0;
  tie = 0;
  roundText = "";
}
// const game = function() {
//   for (let i = 0; i < 6; i++) {
//     if (playerWins === 5 && compWins < 5) {
//       return "You win the 5 round match!";
//     } else if (compWins === 5 && playerWins < 5) {
//       return "Computer wins the 5 round match";
//     }

//     console.log(score);
//     console.log(roundText);

//     playRound(playerSelect, computerSelect);
//   }
// };

// console.log(game());
