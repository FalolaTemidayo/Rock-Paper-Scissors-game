const userScoreSpan = document.getElementById("user-score");
const computerScoreSpan = document.getElementById("computer-score");
const resultMessage = document.getElementById("result-message");
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const resetBtn = document.getElementById("reset");
const resetBtnTwo = document.getElementById("resetTwo");
const historyList = document.getElementById("history-list");
const finalWinner = document.getElementById("final-winner");
const winnerName = document.getElementById("winner-name");
const winner = document.getElementById("winner");


// WELCOME BOX FUNCTION
let playerName = " ";
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  modal.style.display = "flex";
  const startButton = document.getElementById("startButton");
  startButton.addEventListener("click", function () {
    modal.style.display = "none";
    playerName = document.getElementById("nameInput").value;
    document.getElementById("userName").textContent = playerName;

    document.querySelector(".main-content").style.opacity = 1;
    document.querySelector(".main-content").style.pointerEvents = "auto";
  });
});

let userScore = 0;
let computerScore = 0;

// COMPUTER CHOICE
const choice = ["ROCK", "PAPER", "SCISSORS"];
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choice.length);
  return choice[randomIndex];
}

// USER CHOICE
rockBtn.addEventListener("click", () => game("ROCK"));
paperBtn.addEventListener("click", () => game("PAPER"));
scissorsBtn.addEventListener("click", () => game("SCISSORS"));

// GAME FUNCTIONS
function game(userChoice) {
  const computerChoice = getComputerChoice();
  if (
    (userChoice === "ROCK" && computerChoice === "SCISSORS") ||
    (userChoice === "PAPER" && computerChoice === "ROCK") ||
    (userChoice === "SCISSORS" && computerChoice === "PAPER")
  ) {
    win(userChoice, computerChoice);
  } else if (
    (userChoice == "SCISSORS" && computerChoice == "ROCK") ||
    (userChoice == "PAPER" && computerChoice == "SCISSORS") ||
    (userChoice === "ROCK" && computerChoice === "PAPER")
  ) {
    lose(userChoice, computerChoice);
  } else {
    draw(userChoice, computerChoice);
  }
}

// WIN FUNCTION
function win(userChoice, computerChoice) {
  userScore++;
  userScoreSpan.textContent = userScore;
  resultMessage.innerHTML = `${userChoice} beats ${computerChoice}: Plus one point 🎉🎉 `;
  if (userScore == 10) {
    finalWinner.style.display = "block";
    winner.innerHTML = "You Won 🎉🎉🎉"
    winnerName.innerHTML = `You have won with ${userScore} points <br/> and you've won $0.05 `;
    userScore = 0;
    computerScore = 0;
    computerScoreSpan.innerHTML = computerScore;
    userScoreSpan.innerHTML = userScore;
  }
  // addHistory(userChoice, computerChoice, win);
}
// LOSE FUNCTION

function lose(userChoice, computerChoice) {
  computerScore++;
  computerScoreSpan.textContent = computerScore;
  resultMessage.innerHTML = `${userChoice} loses to ${computerChoice}😢`;
  if (computerScore == 10) {
    finalWinner.style.display = "block";
    winner.innerHTML = "You Lost 😥😥"
    winnerName.innerHTML = `The Robot has won with ${computerScore} points`;
    userScore = 0;
    computerScore = 0;
    computerScoreSpan.innerHTML = computerScore;
    userScoreSpan.innerHTML = userScore;
  }
  // addHistory(userChoice, computerChoice, lose);
}
// DRAW FUNCTION
function draw(userChoice, computerChoice) {
  resultMessage.innerHTML = `${userChoice} equals ${computerChoice} : No Winner`;
  // addHistory(`${userChoice}, ${computerChoice} ${draw}`);
}

// NEW GAME
function newGame () {
  userScore = 0;
  computerScore = 0;
  userScoreSpan.innerHTML = userScore;
  computerScoreSpan.innerHTML = computerScore;
  resultMessage.innerHTML = `I have made my move already 
    <br /> <b>MAKE YOUR MOVE!! </b>`;
  historyList.innerHTML = "";
  finalWinner.style.display = "none";
};

resetBtn.addEventListener('click', newGame)
resetBtnTwo.addEventListener('click', newGame)









// HISTORY LIST
// const history = document.getElementById("history");
// history.addEventListener(
//   "click",
//   function addHistory(userChoice, computerChoice) {
//     const li = document.createElement("li");
//     li.textContent = `You choose ${userChoice}, computer chose ${computerChoice}`;
//     historyList.prepend(li);
//   }
// );
