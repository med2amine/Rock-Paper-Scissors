const buttons = document.querySelectorAll("button")
const resultsdiv = document.querySelector("#results")
const score = document.querySelector("#score")

let playerScore = 0
let computerScore = 0

buttons.forEach(button => {
    button.addEventListener("click",()=>{

        if (playerScore >= 5 || computerScore >= 5) return;

        const playerSelection = button.dataset.choice
        const round = playRound(playerSelection)

        resultsdiv.textContent = round.message
    
        if (round.winner === "player") playerScore++
        else if (round.winner === "computer") computerScore++
    
        score.textContent = `player : ${playerScore} - computer : ${computerScore}`

        if (playerScore === 5 || computerScore === 5){
            if (playerScore === 5){
                resultsdiv.textContent = "🎉 YOU WIN THE GAME! First to 5!"
            } else{
                resultsdiv.textContent = "💀 YOU LOST THE GAME! Computer reached 5 first!"
            }

            buttons.forEach(button => button.disabled = true)
        }
    })
})


function playRound(playerSelection){    
    const choices = ["rock","paper","scissors"]
    const computerChoice = choices[Math.floor(Math.random()*3)]

    if (playerSelection === computerChoice){
        return {
            winner : "draw",
            message : `draw you both choose ${playerSelection}`
        }
    }

    const winningCase = {
        rock : "scissors",
        paper : "rock",
        scissors : "paper"
    }

    if (winningCase[playerSelection] == computerChoice){
        return{
            winner : "player",
            message : `you win `
        }
    }

    return{
        winner : "computer",
        message : "you lose"
    }
}