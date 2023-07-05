const buttonRock = document.querySelector(".rock")
const buttonPaper = document.querySelector(".paper")
const buttonScissors = document.querySelector(".scissors")
const buttonLagarto = document.querySelector(".lizard")
const buttonSpock = document.querySelector(".spock")
const result = document.querySelector(".result")
const humanScore = document.querySelector("#human-score")
const machineScore = document.querySelector("#machine-score")
const playerPick = document.querySelector('.player-pick')
const machinePick = document.querySelector('.machine-pick')
const winPic = document.querySelector('.win')

let humanScoreNumber = 0
let machineScoreNumber = 0


const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())
}


const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors', 'lagarto', 'spock']
    const randomNumber = Math.floor(Math.random() * 5)

    return choices[randomNumber]
}


const playTheGame = (humanChoice, playMachine) => {

    console.log('Humano: ' + humanChoice + 'Maquina: ' + playMachine)

    if (humanChoice === playMachine) {
        result.innerHTML = "Empate"

    } else if (humanChoice === 'paper' && playMachine === 'rock' ||
        humanChoice === 'scissors' && playMachine === 'paper' ||
        humanChoice === 'rock' && playMachine === 'scissors' ||
        humanChoice === 'lagarto' && playMachine === 'spock' ||
        humanChoice === 'spock' && playMachine === 'scissors' ||
        humanChoice === 'scissors' && playMachine === 'lagarto' ||
        humanChoice === 'paper' && playMachine === 'spock' ||
        humanChoice === 'lagarto' && playMachine === 'paper' ||
        humanChoice === 'spock' && playMachine === 'rock' ||
        humanChoice === 'rock' && playMachine === 'lagarto' 
      ) {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = "Vitória! <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN8MYcJNh7WCCIOn6o5UD2QBFZSHGfWwPN_w&usqp=CAU' height='275' width='183'>" 
    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "Derrota <img src='https://e0.pxfuel.com/wallpapers/1017/4/desktop-wallpaper-bazinga-uploaded-sheldon-cooper-bazinga-thumbnail.jpg' height='275' width='153'>"
    }
    
    playerPick.innerText = 'Sua escolha: ' + humanChoice 
    machinePick.innerText = 'Escolha da máquina: ' + playMachine
}






