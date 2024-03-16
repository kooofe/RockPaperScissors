let scoreComputer = 0
let scorePlayer = 0

function computerChoosesHandRandomly() {
    let hand = ['rock', 'paper', 'scissors']
    return hand[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection) {
    function game(playerSelection) {
        playerSelection = playerSelection.toLowerCase();
        let computerSelection = computerChoosesHandRandomly();
        if (playerSelection === computerSelection) return "Tie!";
        else if (playerSelection === 'rock' && computerSelection === 'paper') {
            scoreComputer++;
            return "You Lose! Paper beats Rock";
        } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
            scoreComputer++;
            return "You Lose! Scissors beats Paper";
        } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            scoreComputer++;
            return "You Lose! Rock beats Scissors";
        } else if (playerSelection === 'paper' && computerSelection === 'rock') {
            scorePlayer++;
            return "You Win! Paper beats Rock";
        } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            scorePlayer++;
            return "You Win! Scissors beats Paper";
        } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
            scorePlayer++;
            return "You Win! Rock beats Scissors";
        } else return "Please choose between Rock, Paper, Scissors";
    }

    document.querySelector('.winnerDisplay').textContent = game(playerSelection)
    let arr = document.querySelector(".scoreResults").textContent.split(" ")
    if (arr[0] >= 5 || arr[2] >= 5) {
        scorePlayer = 0, scoreComputer = 0;
        let result = "Draw"
        scorePlayer > scoreComputer ? result = "Player's Win!" : result = "Computer's Win!"
        document.querySelector(".scoreResults").textContent = result

    } else {
        arr[0] = scorePlayer
        arr[2] = scoreComputer
        document.querySelector(".scoreResults").textContent = arr.join(' ')
    }
}

// buttons for each hand
const btnRock = document.querySelector(".rock")
const btnPaper = document.querySelector(".paper")
const btnScissors = document.querySelector(".scissors")

btnRock.addEventListener("click", () => {
    playRound('rock')
});
btnPaper.addEventListener("click", () => {
    playRound('paper')
});
btnScissors.addEventListener("click", () => {
    playRound('scissors')
});