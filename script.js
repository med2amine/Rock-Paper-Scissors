function getComputerChoice(){
    const r = Math.random()

    if (r < 1/3) return 0
    if (r < 2/3) return 0.5
    return 1
}

function getHumanChoice(){
    const c = prompt('enter your choice : 0 for rock , 0.5 for paper , 1 for scissors')
    return Number(c)
}

let humanScore = 0
let computerScore = 0

function playRound(){
    humanChoice = getHumanChoice()
    computerChoice = getComputerChoice()

    

    if (humanChoice === computerChoice){
        console.log("it's a tie")
        humanScore++
        computerScore++
        return
    }

    if ((humanChoice === 0 && computerChoice === 0.5) || (humanChoice === 0.5 && computerChoice === 1) || (humanChoice === 1 && computerChoice === 0)){
        console.log('sorry you lose')
        computerScore++
    }
    
    else if ((humanChoice === 0 && computerChoice === 1) || (humanChoice == 0.5 && computerChoice === 0) || (humanChoice === 1 && computerChoice === 0.5)){
        console.log('you win')
        humanScore++
    }
    
    console.log(`you : ${humanScore}`)
    console.log(`computer : ${computerScore}`)
}



playRound()
playRound()
playRound()
playRound()
playRound()