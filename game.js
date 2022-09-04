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
            document.getElementById("timer").className = "hidden";
            clearInterval(timer);
            document.getElementById("Rock").className = "active";
            document.getElementById("Paper").className = "active";
            document.getElementById("Scissors").className = "active";
        }
        timeLeft = timeLeft - 1;
    }, 800);
    hesitation = setTimeout(function() {
        document.getElementById("Rock").className = "hidden";
        document.getElementById("Paper").className = "hidden";
        document.getElementById("Scissors").className = "hidden";
        document.getElementById("round-score").className = "active";
        document.querySelector("#human").innerHTML = "😑";
        document.getElementById("timer").style.fontSize = "18px";
        displayComputerChoice("...");
    }, "5000");
}

function displayGameNext() {
    document.getElementById("computer-choice").style.backgroundColor = "transparent";
    document.getElementById("user-choice").style.backgroundColor = "transparent";
    document.getElementById("next-round-button").className = "hidden";
    document.getElementById("timer").style.fontSize = "96px";
    document.querySelector("#computer").innerHTML = "⚙️";
    document.querySelector("#human").innerHTML = "🫀";
    document.getElementById("timer").innerHTML = "👊🏻";
    let timeLeft = 3;
    let timer = setInterval(function() {
        if (timeLeft === 3) {
            document.getElementById("timer").innerHTML = "✋🏻";
        } else if (timeLeft === 2) {
            document.getElementById("timer").innerHTML = "✌🏻";
        } else if (timeLeft === 1) {
            clearInterval(timer);
            document.getElementById("timer").className = "hidden";
            document.getElementById("Rock").className = "active";
            document.getElementById("Paper").className = "active";
            document.getElementById("Scissors").className = "active";
        }
        timeLeft = timeLeft - 1;
    }, 800);
    hesitation = setTimeout(function() {
        document.getElementById("Rock").className = "hidden";
        document.getElementById("Paper").className = "hidden";
        document.getElementById("Scissors").className = "hidden";
        document.getElementById("round-score").className = "active";
        document.querySelector("#human").innerHTML = "😑";
        document.getElementById("timer").style.fontSize = "24px";
        displayComputerChoice("...");
    }, "5000");
}

function displayUserChoice(event) {
    document.getElementById("timer").className = "active";
    event.preventDefault();
    document.getElementById("timer").style.fontSize = "24px";
    let choice = "";
    document.getElementById("Rock").className = "hidden";
    document.getElementById("Paper").className = "hidden";
    document.getElementById("Scissors").className = "hidden";
    clearTimeout(hesitation);
    if (this.id === "Rock") {
        choice = "👊🏻";
    } else if (this.id === "Paper") {
        choice = "📄";
    } else {
        choice = "✂️";
    }
    document.querySelector("#human").innerHTML = choice;
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
    document.querySelector("#computer").innerHTML = choice;
    decideWinner(userChoice, choice);
}

function decideWinner(userChoice, computerChoice) {
    if (userChoice === "...") {
        document.getElementById("timer").className = "active";
        document.querySelector("#timer").innerHTML = "You lose!<br />Hesitation is death!";
        document.getElementById("computer-choice").style.backgroundColor = "green";
        document.getElementById("user-choice").style.backgroundColor = "red";
        document.getElementById("next-round-button").className = "active";
        computerWinCount++;
    }
    else if (userChoice === computerChoice) {
        document.querySelector("#timer").innerHTML = "It's a tie!";
        document.getElementById("next-round-button").className = "active";
    } else if (userChoice === "👊🏻" && computerChoice === "📄") {
        document.querySelector("#timer").innerHTML = "You lose!<br />📄 covers 👊🏻!";
        document.getElementById("next-round-button").className = "active";
        document.getElementById("computer-choice").style.backgroundColor = "green";
        document.getElementById("user-choice").style.backgroundColor = "red";
        computerWinCount++;
    } else if (userChoice === "👊🏻" && computerChoice === "✂️") {
        document.querySelector("#timer").innerHTML = "You win! 👊🏻 crushes ✂️!";
        document.getElementById("next-round-button").className = "active";
        document.getElementById("computer-choice").style.backgroundColor = "red";
        document.getElementById("user-choice").style.backgroundColor = "green";
        userWinCount++;
    } else if (userChoice === "📄" && computerChoice === "👊🏻") {
        document.querySelector("#timer").innerHTML = "You win!<br />📄 covers 👊🏻!";
        document.getElementById("next-round-button").className = "active";
        document.getElementById("computer-choice").style.backgroundColor = "red";
        document.getElementById("user-choice").style.backgroundColor = "green";
        userWinCount++;
    } else if (userChoice === "📄" && computerChoice === "✂️") {
        document.querySelector("#timer").innerHTML = "You lose!<br />✂️ cut 📄!";
        document.getElementById("next-round-button").className = "active";
        document.getElementById("computer-choice").style.backgroundColor = "green";
        document.getElementById("user-choice").style.backgroundColor = "red";
        computerWinCount++;
    } else if (userChoice === "✂️" && computerChoice === "👊🏻") {
        document.querySelector("#timer").innerHTML = "You lose!<br />👊🏻 crushes ✂️";
        document.getElementById("next-round-button").className = "active";
        document.getElementById("computer-choice").style.backgroundColor = "green";
        document.getElementById("user-choice").style.backgroundColor = "red";
        computerWinCount++;
    } else if (userChoice === "✂️" && computerChoice === "📄") {
        document.querySelector("#timer").innerHTML = "You win!<br />📄 cuts ✂️!";
        document.getElementById("next-round-button").className = "active";
        document.getElementById("computer-choice").style.backgroundColor = "red";
        document.getElementById("user-choice").style.backgroundColor = "green";
        userWinCount++;
    }
    document.querySelector("#computer-score").innerHTML = computerWinCount;
    document.querySelector("#user-score").innerHTML = userWinCount;
    checkGameState();
}

function checkGameState() {
    if (computerWinCount === 5) {
        document.getElementById("timer").style.fontSize = "24px";
        document.querySelector("#timer").innerHTML = "You lose!"
        document.getElementById("play-again-button").className = "active";
        document.getElementById("next-round-button").className = "hidden";
    } else if (userWinCount === 5) {
        document.querySelector("#timer").innerHTML = "You win!"
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