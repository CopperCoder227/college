let userChoice;

function rockSelect() {
    let myElem = document.querySelector("#Rock");
    myElem.classList.add("selectedRock");
    let otherButton1 = document.querySelector("#Paper");
    let otherButton2 = document.querySelector("#Scissors");
    otherButton1.classList.remove("selectedPaper");
    otherButton2.classList.remove("selectedScissors");
    userChoice = "rock";
}

function paperSelect() {
    let myElem = document.querySelector("#Paper");
    myElem.classList.add("selectedPaper");
    let otherButton1 = document.querySelector("#Rock");
    let otherButton2 = document.querySelector("#Scissors");
    otherButton1.classList.remove("selectedRock");
    otherButton2.classList.remove("selectedScissors");
    userChoice = "paper";
}

function scissorsSelect() {
    let myElem = document.querySelector("#Scissors");
    myElem.classList.add("selectedScissors");
    let otherButton1 = document.querySelector("#Paper");
    let otherButton2 = document.querySelector("#Rock");
    otherButton1.classList.remove("selectedPaper");
    otherButton2.classList.remove("selectedRock");
    userChoice = "scissors";
}

let userName = "";

function submitForm() {
    userName = document.getElementById("fname").value;
    console.log(userName);
    return userName;
}

//code to make game run//

let [computerScore, userScore] = [0, 0];
let counter = 0;

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
};

const determineWinner = (userChoice, computerChoice) => {
    let fLetter = userChoice.charAt(0).toUpperCase();
    let lLetter = computerChoice.charAt(0).toUpperCase();
    let url = `imgs/Vs/${fLetter}v${lLetter}.png`;
    document.getElementById("chart").src = url;
    if (userChoice === computerChoice) {
        return "It's a draw!";
    } else if (userChoice === "rock") {
        if (computerChoice === "paper") {
            computerScore++;
            return "Handaconda attacked!";
        } else {
            userScore++;
            return "Mario attacked!";
        }
    } else if (userChoice === "paper") {
        if (computerChoice === "scissors") {
            computerScore++;
            return "Handaconda attacked!";
        } else {
            userScore++;
            return "Mario attacked!";
        }
    } else if (userChoice === "scissors") {
        if (computerChoice === "rock") {
            computerScore++;
            return "Handaconda attacked!";
        } else {
            userScore++;
            return "Mario attacked!";
        }
    }
};

function playGame() {
    if (counter <= 5) {
        counter++;
        if (userChoice) {
            document.getElementById("Name").textContent = "";
            const computerChoice = getComputerChoice();
            console.log(`You chose: ${userChoice}.`);
            console.log(`Computer chose: ${computerChoice}.`);
            document.getElementById("centerText").classList.add("d-none");
            let columns = document.querySelectorAll("#result .row .col-4");
            let col12 = document.getElementById("col12");
            columns[0].textContent = `Mario chose: ${userChoice}.`;
            col12.textContent = `${determineWinner(userChoice, computerChoice)}`;
            columns[2].textContent = `Handaconda chose: ${computerChoice}.`;
            let scoreColumns = document.getElementsByClassName("scores");
            scoreColumns[0].textContent = `Mario's attacked: ${userScore} times!`;
            scoreColumns[1].textContent = `Handaconda's attacked: ${computerScore} times!`;
        }
    } else if (counter == 5) {
        setTimeout(() => {
            resetGame();
        }, 500); // Delay to show lose message
    } else if (userScore > computerScore) {
        setTimeout(() => {
            col12.textContent = `Congratulations! ${userName} beat Handacoda!`;
            console.log(`Congratulations! ${userName} beat Handacoda!`);
            document.getElementById("hand").src = "imgs/confetti.png";
        }, 500); // Delay to show win message
    } else if (computerScore > userScore) {
        setTimeout(() => {
            col12.textContent = `Oh no! Handaconda Won! Try again!`;
            document.getElementById("mario").src = "imgs/Mario-Faint.png";
        }, 500); // Delay to show lose message
    } else if (userScore == computerScore) {
        setTimeout(() => {
            col12.textContent = `It's a draw! Try again!`;
        }, 500); // Delay to show lose message
    }
}

//find out where to bput the disapearin thing below