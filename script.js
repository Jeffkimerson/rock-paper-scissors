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
            return "Computer picked rock, you win!";
        }
        else {
            return 1;
        }
    }
    else {
        if (computerSelection == "rock") {
            return "Computer picked rock, you lose!";
        }
        else {
            return 0;
        }
    }
}



let playerWins = 0;
let computerWins = 0;

document.getElementById('playerWins').innerHTML = `Player: ${playerWins}`;
document.getElementById('computerWins').innerHTML = `Computer: ${computerWins}`;




const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let result = playRound(button.id, computerPlay());
        document.getElementById('result').innerHTML = result;
        

        
        let win = /win/;
        let lose = /lose/;
        if (win.test(result)) {
            playerWins++;
            document.getElementById('playerWins').innerHTML = `Player: ${playerWins}`;
            if (playerWins == 5) {

            }
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
