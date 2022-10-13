function computerPlay() {
  let options = ["Rock", "Paper", "Scissors"];
  return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerSelection, computerSelection) {
  let temp_string = playerSelection.toLowerCase();
  playerSelection =
    playerSelection.charAt(0).toUpperCase() + temp_string.slice(1);
  if (playerSelection === computerSelection) {
    return "Draw.";
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    return "You win! Rock beats Scissors.";
  } else if (playerSelection === "Rock" && computerSelection === "Paper") {
    return "You lose! Paper beats Rock.";
  } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    return "You lose! Scissors beats Paper.";
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    return "You win! Paper beats Rock.";
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    return "You win! Scissors beats Paper.";
  } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
    return "You lose! Rock beats Scissors.";
  }
}

function game() {
  let playerSelection;
  let computerSelection;
  let options = ["rock", "paper", "scissors"];
  let playerScores = 0;
  let computerScores = 0;

  for (let i = 0; i < 5; i++) {
    do {
      playerSelection = prompt(
        "Please write Rock, Scissors or Paper to start the round: "
      );
      tempPlayerSelection = playerSelection.toLowerCase();
    } while (!options.includes(tempPlayerSelection));

    computerSelection = computerPlay();

    let result = playRound(playerSelection, computerSelection);
    console.log(result);

    if (result.includes("win")) {
      playerScores += 1;
    } else if (result.includes("lose")) {
      computerScores += 1;
    }
  }

  if (playerScores === computerScores) {
    console.log("Draw!");
  } else if (playerScores < computerScores) {
    console.log("You lost!");
  } else {
    console.log("You won!");
  }
}

game();