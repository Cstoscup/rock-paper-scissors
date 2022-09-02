function displayUserChoice(event) {
    event.preventDefault();
    document.querySelector("#choice-display").innerHTML = this.id;
    displayComputerChoice(this.id);
}

function displayComputerChoice(userChoice) {
    let choice = "";
    let number = Math.floor(Math.random() * (4 - 1) + 1);
    if (number === 1) {
        choice = "Rock";
    } else if (number === 2) {
        choice = "Paper";
    } else {
        choice = "Scissors";
    }
    document.querySelector("#computer-choice-display").innerHTML = choice;
    decideWinner(userChoice, choice);
}

function decideWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        document.querySelector("#results").innerHTML = "It's a tie!";
    } else if (userChoice === "Rock" && computerChoice === "Paper") {
        document.querySelector("#results").innerHTML = "You lose! Paper covers Rock!";
        computerWinCount++;
    } else if (userChoice === "Rock" && computerChoice === "Scissors") {
        document.querySelector("#results").innerHTML = "You win! Rock crushes Scissors!";
        userWinCount++;
    } else if (userChoice === "Paper" && computerChoice === "Rock") {
        document.querySelector("#results").innerHTML = "You win! Paper covers Rock!";
        userWinCount++;
    } else if (userChoice === "Paper" && computerChoice === "Scissors") {
        document.querySelector("#results").innerHTML = "You lose! Scissors cut Paper!";
        computerWinCount++;
    } else if (userChoice === "Scissors" && computerChoice === "Rock") {
        document.querySelector("#results").innerHTML = "You lose! Rock crushes Scissors";
        computerWinCount++;
    } else if (userChoice === "Scissors" && computerChoice === "Paper") {
        document.querySelector("#results").innerHTML = "You win! Paper cuts Scissors!";
        userWinCount++;
    }
    document.querySelector("#computer-score").innerHTML = computerWinCount;
    document.querySelector("#user-score").innerHTML = userWinCount;
    checkGameState();
}

function checkGameState() {
    if (computerWinCount === 5 || userWinCount === 5) {
        alert("Game Over!");
    }
}



let rockButton = document.getElementById("Rock");
let paperButton = document.getElementById("Paper");
let scissorsButton = document.getElementById("Scissors");
let userWinCount = 0;
let computerWinCount = 0;

rockButton.onclick = displayUserChoice;
paperButton.onclick = displayUserChoice;
scissorsButton.onclick = displayUserChoice;

document.querySelector("#computer-score").innerHTML = computerWinCount;
document.querySelector("#user-score").innerHTML = userWinCount;