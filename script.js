function getComputerChoice() {
  const computerChoice = ["Rock", "Paper", "Scissors"];
  let randomChoice = Math.floor(Math.random() * 3);
  return computerChoice[randomChoice];
}

let humanScore = 0;
let computerScore = 0;
let isStart = false;
const comment = document.querySelector("#comment");
const player = document.querySelector("#player");
const computer = document.querySelector("#computer");
const h3 = document.querySelector("h3");
const restart = document.querySelector("#restart");
let buttons = document.querySelectorAll(".btn");
let result = document.querySelector("#status");
restart.addEventListener("click", () => {
  isStart = true;
  humanScore = 0;
  computerScore = 0;
  computer.innerText = "0";
  player.innerText = "0";
  restart.style.display = "none";
  result.innerText = "";
  h3.innerText = `Round 1`;
  buttons.forEach((button) => {
    button.style.display = "block";
  });
});
let attempt = 0;
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    attempt++;
    h3.innerText = `Round ${attempt + 1}`;

    if (attempt <= 10) {
      const computerSelection = getComputerChoice();
      let humanSelection = e.target.innerText;

      if (
        (computerSelection === "Rock" && humanSelection === "Rock") ||
        (computerSelection === "Paper" && humanSelection === "Paper") ||
        (computerSelection === "Scissors" && humanSelection === "Scissors")
      ) {
        comment.innerText = "Draw";
      } else if (humanSelection === "Rock" && computerSelection === "Paper") {
        comment.innerText = "You Loose! Paper beats Rock";
        computerScore++;
        computer.innerText = `${computerScore}`;
      } else if (
        humanSelection === "Rock" &&
        computerSelection === "Scissors"
      ) {
        comment.innerText = "You Win! Rock beats Scissors";
        humanScore++;
        player.innerText = `${humanScore}`;
      } else if (
        humanSelection === "Paper" &&
        computerSelection === "Scissors"
      ) {
        comment.innerText = "You Loose! Scissors beats Paper";
        computerScore++;
        computer.innerText = `${computerScore}`;
      } else if (humanSelection === "Paper" && computerSelection === "Rock") {
        comment.innerText = "You Win! Paper beats Rock";
        humanScore++;
        player.innerText = `${humanScore}`;
      } else if (
        humanSelection === "Scissors" &&
        computerSelection === "Rock"
      ) {
        comment.innerText = "You Loose! Rock beats Scissors";
        computerScore++;
        computer.innerText = `${computerScore}`;
      } else if (
        humanSelection === "Scissors" &&
        computerSelection === "Paper"
      ) {
        comment.innerText = "You Win! Scissors beats Paper";
        humanScore++;
        player.innerText = `${humanScore}`;
      }
    }

    if (attempt == 10) {
      // setTimeout(()=>{

      // },1000)
      isStart = false;
      restart.style.display = "block";
      restart.innerText = "Restart";
      comment.innerText = "";

      h3.innerText = ``;
      attempt = 0;
      buttons.forEach((button) => {
        button.style.display = "none";
      });

      if (humanScore === computerScore) {
        result.innerText = "Draw!";
      }
      if (humanScore > computerScore) {
        result.innerText = "You Win!";
      }

      if (humanScore < computerScore) {
        result.innerText = "You Lose!";
      }
    }
  });
});
