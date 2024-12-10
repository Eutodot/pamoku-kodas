let rock = document.querySelector('#rock')!
let paper = document.querySelector('#paper')!
let scissors = document.querySelector('#scissors')!
enum ComputerOption {ROCK, PAPER, SCISSORS}      // Pakeisti i enum
let winnerParagraph = document.querySelector('p')!
let winsParagraph = document.querySelector('#score')!
let playerWins = 0
let computerWins = 0
let draws = 0


function getComputerChoice() {
    // let max = ComputerOption.length
    let randomIndex = Math.floor(Math.random() * 3)
    let computerAnswer = ComputerOption[randomIndex]
    return computerAnswer
}

rock.addEventListener('click', function(){
    let computerChoice = getComputerChoice()
    
    if (computerChoice == ComputerOption.ROCK){
        winnerParagraph.textContent = 'Computer chose Rock. Draw.'
        draws++
    } else if (computerChoice == ComputerOption.PAPER){
        winnerParagraph.textContent = 'Computer chose Paper. You lose.'
        computerWins++
    } else if (computerChoice == ComputerOption.SCISSORS){
        winnerParagraph.textContent = 'Computer chose Scissors. You win.'
        playerWins++
    }
    
    winsParagraph.textContent = `Computer won ${computerWins} times. You won ${playerWins} times. ${draws} draws`
})

paper.addEventListener('click', function(){
    let computerChoice = getComputerChoice(ComputerOption)
    
    if (computerChoice == ComputerOption.ROCK){
        winnerParagraph.textContent = 'Computer chose Rock. You win.'
        playerWins++
    } else if (computerChoice == ComputerOption.PAPER){
        winnerParagraph.textContent = 'Computer chose Paper. Draw.'
        draws++
    } else if (computerChoice == ComputerOption.SCISSORS){
        winnerParagraph.textContent = 'Computer chose Scissors. You lose.'
        computerWins++
    }
    
    winsParagraph.textContent = `Computer won ${computerWins} times. You won ${playerWins} times. ${draws} draws`
})

scissors.addEventListener('click', function(){
    let computerChoice = getComputerChoice(ComputerOption)
    
    if (computerChoice == ComputerOption.ROCK){
        winnerParagraph.textContent = 'Computer chose Rock. You lose.'
        computerWins++
    } else if (computerChoice == ComputerOption.PAPER){
        winnerParagraph.textContent = 'Computer chose Paper. You win.'
        playerWins++
    } else if (computerChoice == ComputerOption.SCISSORS){
        winnerParagraph.textContent = 'Computer chose Scissors. Draw.'
        draws++
    }
    
    winsParagraph.textContent = `Computer won ${computerWins} times. You won ${playerWins} times. ${draws} draws`
})
        































