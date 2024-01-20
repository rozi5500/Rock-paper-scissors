const rockBtn = document.querySelector('button[id="rock"]')
const paperBtn = document.querySelector('button[id="paper"]')
const scissorsBtn = document.querySelector('button[id="scissors"]')
const results = document.querySelector('div[id="results"]')
const currentScore = document.querySelector('div[id="round-info"]')

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

let playerScore = 0;
let computerScore = 0;

function oneRoundGame(computerChoice, playerChoice) {
  const rock = 'Rock';
  const paper = 'Paper';
  const scissors = 'Scissors';

  if (playerScore > 4) {
    results.innerText = `User wins`
    return;
  }
  if (computerScore > 4) {
    results.innerText = `Computer wins`
    return;
  }

  if (playerChoice === computerChoice) {
    results.innerText = 'It\'s tie';
  }

  if (
    (playerChoice === rock && computerChoice === paper)
    ||
    (playerChoice === scissors && computerChoice === rock)
    ||
    (playerChoice === paper && computerChoice === scissors)
  ) {
    playerScore++
    results.innerText = `${playerChoice} beats ${computerChoice}`
  }

  if (
    (playerChoice === rock && computerChoice === scissors)
    ||
    (playerChoice === scissors && computerChoice === paper)
    ||
    (playerChoice === paper && computerChoice === rock)
  ) {
    computerScore++;
    results.innerText = `${computerChoice} beats ${playerChoice}`
  }

  currentScore.innerText = `\n User's score: ${playerScore} \n Computer's score: ${computerScore}`
}

function game() {
  rockBtn.addEventListener('click', () => {
    oneRoundGame(getComputerChoice(), 'Rock')
  })
  paperBtn.addEventListener('click', () => {
    oneRoundGame(getComputerChoice(), 'Paper')
  })
  scissorsBtn.addEventListener('click', () => {
   oneRoundGame(getComputerChoice(), 'Scissors');
  })

}


game()
