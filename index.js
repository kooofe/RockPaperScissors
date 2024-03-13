let scoreComputer = 0
let scorePlayer = 0
function playGame() {
    function playRound(playerSelection, computerSelection) {
        playerSelection = playerSelection.toLowerCase();
        computerSelection = computerSelection.toLowerCase();
        if (playerSelection === computerSelection) return "Tie!";
        else if (playerSelection === 'rock' && computerSelection === 'paper'){ scoreComputer++; return "You Lose! Paper beats Rock"; }
        else if (playerSelection === 'paper' && computerSelection === 'scissors'){ scoreComputer++; return "You Lose! Scissors beats Paper"; }
        else if (playerSelection === 'scissors' && computerSelection === 'rock'){ scoreComputer++; return "You Lose! Rock beats Scissors"; }
        else if (playerSelection === 'paper' && computerSelection === 'rock'){scorePlayer++; return "You Win! Paper beats Rock"; }
        else if (playerSelection === 'scissors' && computerSelection === 'paper'){scorePlayer++; return "You Win! Scissors beats Paper"; }
        else if (playerSelection === 'rock' && computerSelection === 'scissors'){scorePlayer++; return "You Win! Rock beats Scissors"; }
        else return "Please choose between Rock, Paper, Scissors";
    }
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Please enter the card u choose (Rock, Paper, Scissors):")
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
    scorePlayer > scoreComputer ? console.log("Player's Win!") : console.log("Computer's Win!")
}
function getComputerChoice() {
    let hand = ['Rock', 'Paper', 'Scissors']
    return hand[Math.floor(Math.random() * 3)]
}

playGame()