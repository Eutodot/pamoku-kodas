let rock = document.querySelector('#rock')
let paper = document.querySelector('#paper')
let scissors = document.querySelector('#scissors')
let playerOption = [rock, paper, scissors]
let computerOption = ['rock', 'paper', 'scissors']
let winnerParagraph = document.querySelector('p')
let winsParagraph = document.querySelector('#score')
let playerWins = 0
let computerWins = 0
let draws = 0


function getComputerChoice(choices) {
    let max =choices.length
    let randomIndex = Math.floor(Math.random() * max)
    let computerAnswer = choices[randomIndex]
    return computerAnswer
}

rock.addEventListener('click', function(){
    let computerChoice = getComputerChoice(computerOption)
    
    if (computerChoice == 'rock'){
        winnerParagraph.textContent = 'Computer chose Rock. Draw.'
        draws++
    } else if (computerChoice == 'paper'){
        winnerParagraph.textContent = 'Computer chose Paper. You lose.'
        computerWins++
    } else if (computerChoice == 'scissors'){
        winnerParagraph.textContent = 'Computer chose Scissors. You win.'
        playerWins++
    }
    
    winsParagraph.textContent = `Computer won ${computerWins} times. You won ${playerWins} times. ${draws} draws`
})

paper.addEventListener('click', function(){
    let computerChoice = getComputerChoice(computerOption)
    
    if (computerChoice == 'rock'){
        winnerParagraph.textContent = 'Computer chose Rock. You win.'
        playerWins++
    } else if (computerChoice == 'paper'){
        winnerParagraph.textContent = 'Computer chose Paper. Draw.'
        draws++
    } else if (computerChoice == 'scissors'){
        winnerParagraph.textContent = 'Computer chose Scissors. You lose.'
        computerWins++
    }
    
    winsParagraph.textContent = `Computer won ${computerWins} times. You won ${playerWins} times. ${draws} draws`
})

scissors.addEventListener('click', function(){
    let computerChoice = getComputerChoice(computerOption)
    
    if (computerChoice == 'rock'){
        winnerParagraph.textContent = 'Computer chose Rock. You lose.'
        computerWins++
    } else if (computerChoice == 'paper'){
        winnerParagraph.textContent = 'Computer chose Paper. You win.'
        playerWins++
    } else if (computerChoice == 'scissors'){
        winnerParagraph.textContent = 'Computer chose Scissors. Draw.'
        draws++
    }
    
    winsParagraph.textContent = `Computer won ${computerWins} times. You won ${playerWins} times. ${draws} draws`
})
        































