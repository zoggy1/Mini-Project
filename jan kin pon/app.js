let humanScore = 0, computerScore = 0; 
const rock = 1, paper = 2, scissors = 3;
const rules = {
        rock: {
            won: 'scissors',
            lose: 'paper'
        },
        paper: {
            won: 'rock',
            lose: 'scissors'
        },
        scissors: {
            won: 'paper',
            lose: 'rock'
        }
    };

// getting computer choice
function getComputerChoice() {
    let chosing = Math.floor(Math.random() * 3) + 1;
    if (chosing == rock) {
        console.log("Computer: rock")
        return "rock";
    } else if (chosing == paper) {
        console.log("Computer: paper")
        return "paper";
    } else if (chosing == scissors) {
        console.log("Computer: scissors")
        return "scissors";
    }
}

// getting human or player choice
function getHumanChoice() {
    let userChoice = prompt("Enter rock or paper or scissors");
    userChoice = userChoice.toLowerCase();
    
    if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors") {
        console.log(`You: ${userChoice}`);
        return userChoice;
    } else {
        alert("You are entering invalid choice! Please enter rock or paper or scissors");
        return getHumanChoice();
    }
}

//playing
function playRound(humanSelection, computerSelection) {
    //tie
    if (humanSelection === computerSelection) {
        console.log("Ties!");
        return playRound();
    }

    if (rules[humanSelection].won === computerSelection) {
        console.log(`You win! ${humanSelection} win against ${computerSelection}`);
        humanScore++;
        return (`Your score ${humanScore}`);
    } else {
        console.log(`You lose! ${computerSelection} win against ${humanSelection}`);
        computerScore++;
        return (`Computer's score ${computerScore}`);
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);