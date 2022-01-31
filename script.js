function computerPlay() {
  let choice = [
    'Rock',
    'Paper',
    'Scissors'
  ];
  return choice [Math.floor(Math.random()*3)];
}

function playRound(playerSelection, computerSelection) {
 
  if (playerSelection == computerSelection) {
    return ("It's a tie!");
  }
  else if ((playerSelection == "Rock" && computerSelection == "Scissors") || 
  (playerSelection == "Paper" && computerSelection == "Rock") ||
  (playerSelection == "Scissors" && computerSelection == "Paper")) {
    return (`You win! ${playerSelection} beats ${computerSelection}`);
  }
  else {
    return (`You lose! ${computerSelection} beats ${playerSelection}`);
  }
  
}

for (let i = 1; i<= 5; i++){
  let playerSelection = prompt("Pick Rock, Paper, or Scissors: ");
  playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
  const computerSelection = computerPlay();
  console.log(playerSelection);
  console.log(computerSelection);
  console.log(playRound(playerSelection, computerSelection));
}


