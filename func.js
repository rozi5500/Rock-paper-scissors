function getComputerChoice() {
  const result = Math.floor(Math.random() * 3 + 1)

  switch (result) {
    case 1:
      return 'Rock';

    case 2:
      return 'Paper';

    case 3:
      return 'Scissors';
  }
}

const computerChoice = getComputerChoice();

function oneRoundGame(computerChoice, playerChoice) {
  playerChoice = playerChoice.toLowerCase()
  const capitalizedChoice = playerChoice[0].toUpperCase() + playerChoice.slice(1)

  if (
    (playerChoice === 'rock' && computerChoice === 'Paper')
    ||
    (playerChoice === 'scissors' && computerChoice === 'Rock')
    ||
    (playerChoice === 'paper' && computerChoice === 'Scissors')
  ) {
    return {status: false, playerChoice}
  }

  if (
    (playerChoice === 'rock' && computerChoice === 'Scissors')
    ||
    (playerChoice === 'scissors' && computerChoice === 'Paper')
    ||
    (playerChoice === 'paper' && computerChoice === 'Rock')
  ) {
    return {status: true, playerChoice}
  }

  if (playerChoice === computerChoice.toLowerCase()) return 'Draw';
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const result = oneRoundGame(computerChoice, prompt('Rock, Paper or Scissors?: '));
    result.status === false ? computerScore++ : playerScore++;
  }

  if (playerScore > computerScore) console.log(`You win with score of ${playerScore}:${computerScore}`)
  if (playerScore < computerScore) console.log(`You lost with score of ${playerScore}:${computerScore}`)
  if (playerScore === computerScore) console.log('Draw')
}


game()
