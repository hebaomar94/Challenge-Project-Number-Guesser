let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random() * 10);

function compareGuesses(human, computer, target) {
  const diffHumanTarget = Math.abs(target - human);
  const diffComputerTarget = Math.abs(target - computer);
  if (human === computer) {
    return true;
  } else if (diffHumanTarget <= diffComputerTarget) {
    return true;
  } else {
    return false;
  }
}

function updateScore(winner){
  if (winner === 'human'){
    humanScore ++;
  } else {
    computerScore ++;
  }
}

const advanceRound = () => currentRoundNumber++;
