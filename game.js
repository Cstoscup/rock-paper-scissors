function displayGame() {
    document.getElementById("play-game-button").className = "hidden";
    document.getElementById("timer").className = "active";
    let timeLeft = 3;
    let timer = setInterval(function() {
        if (timeLeft === 3) {
            document.getElementById("timer").innerHTML = "Paper";
        } else if (timeLeft === 2) {
            document.getElementById("timer").innerHTML = "Scissors";
        } else if (timeLeft === 1) {
            document.getElementById("timer").innerHTML = "Shoot!";
            clearInterval(timer);
            document.getElementById("options").className = "active";
        }
        timeLeft = timeLeft - 1;
    }, 1000);
    setTimeout(function() {
        document.getElementById("options").className = "hidden";
        document.getElementById("round-score").className = "active";
        document.querySelector("#choice-display").innerHTML = "Nothing!";
        displayComputerChoice("...");
    }, "5000");
    // document.getElementById("game").className = "active";
    // document.getElementById("play-game-button").className = "hidden";
}

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
    if (userChoice === "...") {
        document.querySelector("#results").innerHTML = "You lose! Hesitation is death!";
        computerWinCount++;
    }
    else if (userChoice === computerChoice) {
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
    if (computerWinCount === 5) {
       document.querySelector("#score").innerHTML = "You lose! The computer made it to 5 points first!"
       document.getElementById("play-again-button").className = "active";
    } else if (userWinCount === 5) {
        document.querySelector("#score").innerHTML = "You win! You made it to 5 points first!"
        document.getElementById("play-again-button").className = "active";
    }
}

function playAgain() {
    location.reload();
    return false;
}

let playButton = document.getElementById("play-game-button");
let rockButton = document.getElementById("Rock");
let paperButton = document.getElementById("Paper");
let scissorsButton = document.getElementById("Scissors");
let playAgainButton = document.getElementById("play-again-button");
let userWinCount = 0;
let computerWinCount = 0;

playButton.onclick = displayGame;
rockButton.onclick = displayUserChoice;
paperButton.onclick = displayUserChoice;
scissorsButton.onclick = displayUserChoice;
playAgainButton.onclick = playAgain;

document.querySelector("#computer-score").innerHTML = computerWinCount;
document.querySelector("#user-score").innerHTML = userWinCount;