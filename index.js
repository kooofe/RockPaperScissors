let scoreComputer = 0
let scorePlayer = 0
function playGame(playerSelection) {
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
    console.log(playRound(playerSelection,getComputerChoice()))
}
function getComputerChoice() {
    let hand = ['Rock', 'Paper', 'Scissors']
    return hand[Math.floor(Math.random() * 3)]
}

const btnRock = document.querySelector(".rock")
const btnPaper = document.querySelector(".paper")
const btnScissors = document.querySelector(".scissors")

btnRock.addEventListener("click", () => {
    playGame('rock')
});
btnPaper.addEventListener("click", () => {
    playGame('paper')
});
btnScissors.addEventListener("click", () => {
    playGame('scissors')
});