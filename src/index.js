// sounds
let winSfx = new Audio("sfx/heavenly.mp3");
let loseSfx = new Audio("sfx/madcat.wav");

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

// reset handling
function resetAll() {
  roundCount = 0;
  playerWins = 0;
  compWins = 0;
  tie = 0;
  document.getElementById("roundCount").textContent = "0";
  document.getElementById("playerWins").textContent = "0";
  document.getElementById("compWins").textContent = "0";
  document.getElementById("tie").textContent = "0";
}

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
    roundText = `Oh no! ${computerSelect.slice(0, 1).toUpperCase() +
      computerSelect.slice(1)} beats ${playerSelect}!`;
  } else if (
    (playerSelect === "rock" && computerSelect === "scissors") ||
    (playerSelect === "scissors" && computerSelect === "paper") ||
    (playerSelect === "paper" && computerSelect === "rock")
  ) {
    roundCount += 1;
    playerWins += 1;
    roundText = `Horray! ${playerSelect.slice(0, 1).toUpperCase() +
      playerSelect.slice(1)} beats ${computerSelect}!`;
  } else {
    roundCount += 1;
    tie += 1;
    roundText = `It's a tie! Try again!`;
  }
  let score = `Round: ${roundCount} | Player: ${playerWins} | Computer: ${compWins} | Tie: ${tie}`;

  // logic for 5 round match
  if (playerWins === 5) {
    document.getElementById("outcome").textContent = "Player wins 5 matches!";
    winSfx.play();
    resetAll();
  } else if (compWins === 5) {
    document.getElementById("outcome").textContent = "Computer wins 5 matches!";
    loseSfx.play();
    resetAll();
  }

  document.getElementById("roundCount").textContent = roundCount;
  document.getElementById("playerWins").textContent = playerWins;
  document.getElementById("compWins").textContent = compWins;
  document.getElementById("tie").textContent = tie;

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

// reset score
const resetClick = document.getElementById("resetScore");
resetClick.onclick = function() {
  resetAll();
  roundText = "";
  document.getElementById("outcome").textContent = "";
  document.getElementById("summaryCount").textContent =
    "Round: 0 | Player: 0 | Computer: 0 | Tie: 0";
};
