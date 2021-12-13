let playerWins = 0;
let computerWins = 0;

//Provides random output by the computer
function computerPlay() {
    let num = Math.floor(Math.random() * 3);
    let choice;

    switch(num) {
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = "paper";
            break;
        case 2:
            choice = "scissors";
            break;
        
    }
    return choice;
}

//Takes user input and computer input and decides outcome
function playRound() {

    let computerSelection = computerPlay();
    let playerSelection = window.prompt("Rock, paper, or scissors?");
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") {
        return "Invalid choice";
    }
    if (playerSelection == computerSelection) {
        return 2;
    }
    else if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            return 1;
        }
        else {
            return 0;
        }
    }
    else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return 0;
        }
        else {
            return 1;
        }
    }
    else {
        if (computerSelection == "rock") {
            return 1;
        }
        else {
            return 0;
        }
    }
}


function game() {
    
    for (let i = 0; i < 5; i++) {
        let winner = playRound();
        
        if (winner == 0) {
            playerWins++;
            console.log("Player wins!");
            console.log(`Player: ${playerWins} Computer: ${computerWins}`);
        }
        else if (winner == 1) {
            computerWins++;
            console.log("Computer wins!");
            console.log(`Player: ${playerWins} Computer: ${computerWins}`);
        }
        else {
            console.log("Tie!");
            console.log(`Player: ${playerWins} Computer: ${computerWins}`);
        }

    }
    if (playerWins > computerWins) {
        console.log("Player has won the BO5!");
    }
    else if (computerWins > playerWins) {
        console.log("Computer has won the BO5!");
    }
    else {
        console.log("Tie for the BO5!");
    }
    
    playerWins = 0;
    computerWins = 0;
  
}