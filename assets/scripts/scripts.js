const choices = document.querySelectorAll(".options button");
const result = document.getElementById("result");
const play = document.getElementById("play");
const restart = document.getElementById("restart");
const systemIcon = document.getElementById("systemIcon")
const playerIcon = document.getElementById("playerIcon")
const playerScoreElement = document.getElementById("playerScore")
const computerScoreElement = document.getElementById("systemScore")

let playerScore = 0;
let computerScore = 0;

choices.forEach((choice) => {
  choice.addEventListener("click", playGame);
  choice.disabled = true;
});
play.addEventListener("click", function () {
  choices.forEach((choice) => {
    playerIcon.style.animationPlayState = "running";
    systemIcon.style.animationPlayState = "running";
    choice.disabled = false;
    choice.classList.remove("disabled")
  });
});
restart.addEventListener("click", function () { location.reload() })

function playGame(e) {
  const playerChoice = e.target.id;
  const computerChoice = getComputerChoice();
  playerIcon.src = `assets/img/${playerChoice}.png`;
  systemIcon.src = `assets/img/${computerChoice}.png`;
  playerIcon.style.animationPlayState = "paused";
  systemIcon.style.animationPlayState = "paused";
  setTimeout(function () {
    playerIcon.src = `assets/img/rock.png`;
    systemIcon.src = `assets/img/rock.png`;
    playerIcon.style.animationPlayState = "running";
    systemIcon.style.animationPlayState = "running";
  }, 1000);
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
  result.textContent = winner
  playerScoreElement.textContent = playerScore;
  computerScoreElement.textContent = computerScore;
  // result.innerHTML = `
  //   <p>You choose ${playerChoice}</p>
  //   <p>Computer choose ${computerChoice}</p>
  //   <p>${winner}</p>
  //   <p>Player: ${playerScore}</p>
  //   <p>Computer: ${computerScore}</p>
  // `;
}
