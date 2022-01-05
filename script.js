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
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") {
        return "Invalid choice";
    }
    if (playerSelection == computerSelection) {
        return "Tie!";
    }
    else if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            return "Computer picked paper, you lose!";
        }
        else {
            return "Computer picked scissors, you win!";
        }
    }
    else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return "Computer picked rock, you win!";
        }
        else {
            return "Computer picked scissors, you lose!";
        }
    }
    else {
        if (computerSelection == "rock") {
            return "Computer picked rock, you lose!";
        }
        else {
            return "Computer picked paper, you win!";
        }
    }
}



let playerWins = 0;
let computerWins = 0;
//Create default wins for each
document.getElementById('playerWins').innerHTML = `Player: ${playerWins}`;
document.getElementById('computerWins').innerHTML = `Computer: ${computerWins}`;



//Generates an outcome when user makes a choice
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let result = playRound(button.id, computerPlay());
        document.getElementById('result').innerHTML = result;
        

        //Update the number of wins for each after each round
        let win = /win/;
        let lose = /lose/;
        if (win.test(result)) {
            playerWins++;
            document.getElementById('playerWins').innerHTML = `Player: ${playerWins}`;
            
        }  
        else if (lose.test(result)) {
            computerWins++;
            document.getElementById('computerWins').innerHTML = `Computer: ${computerWins}`;
        }

        if (playerWins == 5) {
            document.getElementById('final').innerHTML = 'Player wins!';
        }
        else if (computerWins == 5) {
            document.getElementById('final').innerHTML = 'Computer wins!';
        }
       
    });
});
