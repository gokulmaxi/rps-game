const choices = document.querySelectorAll(".options button");
const result = document.getElementById("result");
const play = document.getElementById("play");

let playerScore = 0;
let computerScore = 0;

choices.forEach((choice) => {
  choice.addEventListener("click", playGame);
  choice.disabled = true;
});
play.addEventListener("click", function () {
  choices.forEach((choice) => {
    choice.disabled = false;
  });
});

function playGame(e) {
  const playerChoice = e.target.id;
  const computerChoice = getComputerChoice();
  const winner = getWinner(playerChoice, computerChoice);

  showResult(playerChoice, computerChoice, winner);
}

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getWinner(player, computer) {
  if (player === computer) {
    return "It's a tie!";
  } else if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    playerScore++;
    return "You win!";
  } else {
    computerScore++;
    return "Computer wins!";
  }
}

function showResult(playerChoice, computerChoice, winner) {
  result.innerHTML = `
    <p>You choose ${playerChoice}</p>
    <p>Computer choose ${computerChoice}</p>
    <p>${winner}</p>
    <p>Player: ${playerScore}</p>
    <p>Computer: ${computerScore}</p>
  `;
}
