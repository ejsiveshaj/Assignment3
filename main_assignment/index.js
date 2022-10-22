const rock_button = document.getElementById("rock");
const paper_button = document.getElementById("paper");
const scissors_button = document.getElementById("scissors");

let player_scores = 0;
let computer_scores = 0;
let round = 1;

function computerPlay() {
  let options = ["Rock", "Paper", "Scissors"];
  return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerSelection, computerSelection) {
  const round_header = document.createElement("h3");
  const round_result_p = document.createElement("p");
  round_result_p.setAttribute("class", "round_result_p");
  const players_results_p = document.createElement("p");

  let temp_string = playerSelection.toLowerCase();
  playerSelection =
    playerSelection.charAt(0).toUpperCase() + temp_string.slice(1);

  let round_result;

  if (playerSelection === computerSelection) {
    round_result = "Draw.";
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    round_result = "You win! Rock beats Scissors.";
    player_scores += 1;
  } else if (playerSelection === "Rock" && computerSelection === "Paper") {
    round_result = "You lose! Paper beats Rock.";
    computer_scores += 1;
  } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    round_result = "You lose! Scissors beats Paper.";
    computer_scores += 1;
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    round_result = "You win! Paper beats Rock.";
    player_scores += 1;
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    round_result = "You win! Scissors beats Paper.";
    player_scores += 1;
  } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
    round_result = "You lose! Rock beats Scissors.";
    computer_scores += 1;
  }

  round_header.innerHTML = `Round: ${round}`;
  round_result_p.innerHTML = round_result;
  players_results_p.innerHTML = `<strong>Player scores:</strong> ${player_scores}  <b>|</b>   <strong>Computer scores:</strong> ${computer_scores}.`;

  for (let x of [round_header, round_result_p, players_results_p]) {
    document.getElementById("results").appendChild(x);
  }

  checkWins();

  round += 1;
}

function checkWins() {
  if (player_scores === 5 || computer_scores === 5) {
    let final_result;
    if (player_scores > computer_scores) {
      final_result = "You won.";
    } else {
      final_result = "Computer won.";
    }
    alert(`Game is finished. ${final_result}`);
    location.reload();
  }
}

rock_button.addEventListener("click", function () {
  playRound("rock", computerPlay());
});

paper_button.addEventListener("click", function () {
  playRound("paper", computerPlay());
});

scissors_button.addEventListener("click", function () {
  playRound("scissors", computerPlay());
});
