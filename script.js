function getComputerChoice() {
  const computerChoice = ["ROCK", "PAPER", "SCISSORS"];
  let randomChoice = Math.floor(Math.random() * 3);
  return computerChoice[randomChoice];
}
function getHumanChoice() {
  let humanChoice = prompt("Enter Rock/Paper/Scissors:");
  if (
    humanChoice.toUpperCase() === "ROCK" ||
    humanChoice.toUpperCase() === "PAPER" ||
    humanChoice.toUpperCase() === "SCISSORS"
  ) {
    return humanChoice.toUpperCase();
  } else {
    console.log("Invalid entry, please enter Rock, Paper, or Scissors.");
    return getHumanChoice();
  }
}
let humanScore = 0;
let computerScore = 0;
function playRound() {
  const computerSelection = getComputerChoice();

  const humanSelection = getHumanChoice();
  if (
    (computerSelection === "ROCK" && humanSelection === "ROCK") ||
    (computerSelection === "PAPER" && humanSelection === "PAPER") ||
    (computerSelection === "SCISSORS" && humanSelection === "SCISSORS")
  ) {
    console.log(`Draw!`);
  } else if (humanSelection === "ROCK" && computerSelection === "PAPER") {
    console.log(`You Loose! Paper beats Rock`);
    computerScore++;
  } else if (humanSelection === "ROCK" && computerSelection === "SCISSORS") {
    console.log(`You Win! Rock beats Scissors`);
    humanScore++;
  } else if (humanSelection === "PAPER" && computerSelection === "SCISSORS") {
    console.log(`You Loose! Scissors beats Paper`);
    computerScore++;
  } else if (humanSelection === "PAPER" && computerSelection === "ROCK") {
    console.log(`You Win! Paper beats Rock`);
    humanScore++;
  } else if (humanSelection === "SCISSORS" && computerSelection === "ROCK") {
    console.log(`You Loose! Rock beats Scissors`);
    computerScore++;
  } else if (humanSelection === "SCISSORS" && computerSelection === "PAPER") {
    console.log(`You Win! Scissors beats Paper`);
    humanScore++;
  } else {
    console.log("Invalid Entry");
  }
}
for (let i = 1; i <= 5; i++) {
  playRound();
}

console.log(`Your Score: ${humanScore}`);
console.log(`Opponents Score: ${computerScore}`);
if (humanScore === computerScore) {
  console.log("Draw!");
}
if (humanScore > computerScore) console.log("You Win!");

if (humanScore < computerScore) console.log("You Loose!");
