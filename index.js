function getComputerChoice() {
    let choose = ['Rock','Paper','Scissors']
    return choose[Math.floor(Math.random()*3)]
}

console.log(getComputerChoice())