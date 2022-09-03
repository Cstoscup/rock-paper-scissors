function displayGame() {
    document.getElementById("play-game-button").className = "hidden";
    document.getElementById("timer").innerHTML = "👊🏻";
    let timeLeft = 3;
    let timer = setInterval(function() {
        if (timeLeft === 3) {
            document.getElementById("timer").innerHTML = "✋🏻";
        } else if (timeLeft === 2) {
            document.getElementById("timer").innerHTML = "✌🏻";
        } else if (timeLeft === 1) {
            document.getElementById("timer").innerHTML = "👇🏻";
            clearInterval(timer);
            document.getElementById("options").className = "active";
        }
        timeLeft = timeLeft - 1;
    }, 800);
    hesitation = setTimeout(function() {
        document.getElementById("options").className = "hidden";
        document.getElementById("round-score").className = "active";
        document.querySelector("#choice-display").innerHTML = "😑";
        document.getElementById("timer").style.fontSize = "18px";
        displayComputerChoice("...");
    }, "5000");
}

function displayGameNext() {
    document.getElementById("next-round-button").className = "hidden";
    document.getElementById("timer").style.fontSize = "96px";
    document.querySelector("#computer-choice-display").innerHTML = "";
    document.querySelector("#choice-display").innerHTML = "";
    document.getElementById("timer").innerHTML = "👊🏻";
    let timeLeft = 3;
    let timer = setInterval(function() {
        if (timeLeft === 3) {
            document.getElementById("timer").innerHTML = "✋🏻";
        } else if (timeLeft === 2) {
            document.getElementById("timer").innerHTML = "✌🏻";
        } else if (timeLeft === 1) {
            document.getElementById("timer").innerHTML = "👇🏻";
            clearInterval(timer);
            document.getElementById("options").className = "active";
        }
        timeLeft = timeLeft - 1;
    }, 800);
    hesitation = setTimeout(function() {
        document.getElementById("options").className = "hidden";
        document.getElementById("round-score").className = "active";
        document.querySelector("#choice-display").innerHTML = "😑";
        document.getElementById("timer").style.fontSize = "18px";
        displayComputerChoice("...");
    }, "5000");
}

function displayUserChoice(event) {
    event.preventDefault();
    document.getElementById("timer").style.fontSize = "18px";
    let choice = "";
    document.getElementById("options").className = "hidden";
    clearTimeout(hesitation);
    if (this.id === "Rock") {
        choice = "👊🏻";
    } else if (this.id === "Paper") {
        choice = "📄";
    } else {
        choice = "✂️";
    }
    document.querySelector("#choice-display").innerHTML = choice;
    displayComputerChoice(choice);
}

function displayComputerChoice(userChoice) {
    let choice = "";
    let number = Math.floor(Math.random() * (4 - 1) + 1);
    if (number === 1) {
        choice = "👊🏻";
    } else if (number === 2) {
        choice = "📄";
    } else {
        choice = "✂️";
    }
    document.querySelector("#computer-choice-display").innerHTML = choice;
    decideWinner(userChoice, choice);
}

function decideWinner(userChoice, computerChoice) {
    if (userChoice === "...") {
        document.querySelector("#timer").innerHTML = "You lose!<br />Hesitation is death!";
        document.getElementById("next-round-button").className = "active";
        computerWinCount++;
    }
    else if (userChoice === computerChoice) {
        document.querySelector("#timer").innerHTML = "It's a tie!";
        document.getElementById("next-round-button").className = "active";
    } else if (userChoice === "👊🏻" && computerChoice === "📄") {
        document.querySelector("#timer").innerHTML = "You lose!<br />📄 covers 👊🏻!";
        document.getElementById("next-round-button").className = "active";
        computerWinCount++;
    } else if (userChoice === "👊🏻" && computerChoice === "✂️") {
        document.querySelector("#timer").innerHTML = "You win! 👊🏻 crushes ✂️!";
        document.getElementById("next-round-button").className = "active";
        userWinCount++;
    } else if (userChoice === "📄" && computerChoice === "👊🏻") {
        document.querySelector("#timer").innerHTML = "You win!<br />📄 covers 👊🏻!";
        document.getElementById("next-round-button").className = "active";
        userWinCount++;
    } else if (userChoice === "📄" && computerChoice === "✂️") {
        document.querySelector("#timer").innerHTML = "You lose!<br />✂️ cut 📄!";
        document.getElementById("next-round-button").className = "active";
        computerWinCount++;
    } else if (userChoice === "✂️" && computerChoice === "👊🏻") {
        document.querySelector("#timer").innerHTML = "You lose!<br />👊🏻 crushes ✂️";
        document.getElementById("next-round-button").className = "active";
        computerWinCount++;
    } else if (userChoice === "✂️" && computerChoice === "📄") {
        document.querySelector("#timer").innerHTML = "You win!<br />📄 cuts ✂️!";
        document.getElementById("next-round-button").className = "active";
        userWinCount++;
    }
    document.querySelector("#computer-score").innerHTML = computerWinCount;
    document.querySelector("#user-score").innerHTML = userWinCount;
    checkGameState();
}

function checkGameState() {
    if (computerWinCount === 5) {
       document.querySelector("#timer").innerHTML = "You lose!<br />The computer made it to 5 points first!"
       document.getElementById("play-again-button").className = "active";
       document.getElementById("next-round-button").className = "hidden";
    } else if (userWinCount === 5) {
        document.querySelector("#timer").innerHTML = "You win!<br />You made it to 5 points first!"
        document.getElementById("play-again-button").className = "active";
        document.getElementById("next-round-button").className = "hidden";
    }
}

function playAgain() {
    location.reload();
    return false;
}

let hesitation;

let playButton = document.getElementById("play-game-button");
let rockButton = document.getElementById("Rock");
let paperButton = document.getElementById("Paper");
let scissorsButton = document.getElementById("Scissors");
let nextRoundButton = document.getElementById("next-round-button");
let playAgainButton = document.getElementById("play-again-button");
let userWinCount = 0;
let computerWinCount = 0;

playButton.onclick = displayGame;
rockButton.onclick = displayUserChoice;
paperButton.onclick = displayUserChoice;
scissorsButton.onclick = displayUserChoice;
nextRoundButton.onclick = displayGameNext;
playAgainButton.onclick = playAgain;

document.querySelector("#computer-score").innerHTML = computerWinCount;
document.querySelector("#user-score").innerHTML = userWinCount;