import gameHeader from "./game-header.js"
import { PROBLEMS_COUNT, INPUT_START, TIME_PENALTY_MULTIPLIER, FAST_MODE_TIME } from "./math-game-config.js"

let contentElement = document.querySelector('#content')

let structureElement = document.createElement('div')
structureElement.id = 'structure'
let answersElement = document.createElement('div')
answersElement.id = 'answers'
let problemCounter = document.createElement('p')
problemCounter.id = 'problem'
let headerElement = gameHeader(PROBLEMS_COUNT)
let h3Element = document.createElement('h3')
let classicLeaderboard = document.createElement('ol')

let fastLeaderboard = document.createElement('ol')
let OHKOLeaderboard = document.createElement('ol')
structureElement.append(headerElement, h3Element)

contentElement.append(structureElement, answersElement)

let answerElement = document.createElement('span')
let nextQuestionButton = document.createElement('button')
nextQuestionButton.textContent = 'Next question?'

let gameOverButton = document.createElement('button')
gameOverButton.textContent = 'Start new game'

let answerAnnouncement = document.createElement('p')

let answerInput = document.createElement('input')
answerInput.type = 'number'

let checkAnswerInputButton = document.createElement('button')
checkAnswerInputButton.textContent = 'Confirm'

let selectedGameText = document.createElement('h3')
selectedGameText.textContent = 'Select game mode:'
let selectGameClassic = document.createElement('button')
selectGameClassic.textContent = 'Classic'
let selectGameSimple = document.createElement('button')
selectGameSimple.textContent = 'Simple'
let selectGameFast = document.createElement('button')
selectGameFast.textContent = 'Any%'
let selectGameOHKO = document.createElement('button')
selectGameOHKO.textContent = 'OHKO'
let leaderboardButton = document.createElement('button')
leaderboardButton.textContent = 'Leaderboards'
let startGameButton = document.createElement('button')
startGameButton.textContent = 'Start'

answersElement.append(selectedGameText, selectGameClassic, selectGameSimple, selectGameFast, selectGameOHKO, leaderboardButton)

// let endGameButton = document.createElement('button')
// endGameButton.textContent = 'End the game'
// let endGameElement = document.createElement('div')
// endGameElement.append(endGameButton)
let mainMenuButton = document.createElement('button')
mainMenuButton.textContent = 'Return to main menu'

let timerElement = document.createElement('p')
let time = 0
timerElement.textContent = time


let gamesLeft = 0
problemCounter.textContent = `Problem ${gamesLeft + 1}`
let correctGuesses = 0
let wrongGuesses = 0
let symbol = ''
let  correctAnswer = ''
let guessIsCorrect = false
let alreadyExists = false
let simpleGameSelected = false
let fastGameSelected = false
let OHKOGameSelected = false
let interval
let countdown


function generateRngNumber(){
    return Math.floor(Math.random() * (100 + 99) - 99)
}

function generateRngNumberOf4(){
    if (simpleGameSelected){
        return Math.floor(Math.random() * 2)
    } else {
        return Math.floor(Math.random() * 4)
    }
}

function generateRngSymbol(decideRngSymbol){
    if (decideRngSymbol == 0){
        symbol = '+'
    } else if (decideRngSymbol == 1){
        symbol = '-'
    } else if (decideRngSymbol == 2){
        symbol = '*'
    } else if (decideRngSymbol == 3){
        symbol = '/'
    }
}

function generateRngProblem(rngNumber1, rngNumber2, decideRngSymbol){

    if (decideRngSymbol == '+'){
        correctAnswer = Number(rngNumber1) + Number(rngNumber2)

    } else if (decideRngSymbol == '-'){
        correctAnswer = Number(rngNumber1) - Number(rngNumber2)

    } else if (decideRngSymbol == '*'){
        correctAnswer = Number(rngNumber1) * Number(rngNumber2)

    } else if (decideRngSymbol == '/'){
        correctAnswer = Number(rngNumber1) / Number(rngNumber2)
    }


    if (rngNumber1 < 0){
        rngNumber1 = `(${rngNumber1})`
    }
    if (rngNumber2 < 0){
        rngNumber2 = `(${rngNumber2})`
    }
    
    answerElement.textContent = '?'
    h3Element.textContent = `${rngNumber1} ${symbol} ${rngNumber2} = `
    h3Element.append(answerElement)

    generateAnswers(correctAnswer, generateWrongAnswers(correctAnswer))
}

function generateWrongAnswers(correctAnswer, wrongAnswerNumbers = 3){
    let wrongAnswersArr = []

    for (let i = 0; i < wrongAnswerNumbers; i++){
        let wrongAnswer = correctAnswer + generateRngNumber()

        wrongAnswersArr.push(wrongAnswer)
    }

    return wrongAnswersArr
}

function generateAnswers(correctAnswer, wrongAnswers){
    let correctAnswerIndex = generateRngNumberOf4()
    let allAnswers = wrongAnswers.toSpliced(correctAnswerIndex, 0, correctAnswer)
    allAnswers.forEach((answer, index) => {
        let answersButton = document.createElement('button')

        answersButton.textContent = answer
        
        if (index == correctAnswerIndex){
            answersButton.style.color = 'green'
            answersButton.addEventListener('click', correctAnswerHandler)
        } else {
            answersButton.addEventListener('click', (event) => wrongAnswerHandler(event.target.textContent))
        }
        
        answersElement.append(answersButton)
    })
}

function correctAnswerHandler(){
    answerElement.textContent = correctAnswer
    
    if (!alreadyExists){
        clearAnswerElement()

        answerAnnouncement.textContent = 'Correct!'
        answerAnnouncement.style.color = 'green'
        answersElement.append(answerAnnouncement, nextQuestionButton)
        alreadyExists = true
        guessIsCorrect = true
    }
}

function wrongAnswerHandler(selectedAnswer){
    answerElement.textContent = correctAnswer
    
    if (!alreadyExists){
        clearAnswerElement()

        answerAnnouncement.textContent = `Your answer (${selectedAnswer}) was wrong!`
        answerAnnouncement.style.color = 'red'
        answersElement.append(answerAnnouncement, nextQuestionButton)
        alreadyExists = true
    

        if (OHKOGameSelected){
            clearAnswerElement()
                
            clearInterval(interval)

            // answerAnnouncement.textContent = `Your answer (${selectedAnswer}) was wrong! Correct answer was ${correctAnswer}`
            // answerAnnouncement.style.color = 'red'

            let problemsSolved = gamesLeft
            problemCounter.textContent = ''
            h3Element.textContent = ''
            let gameOverAnnouncement = document.createElement('p')
            let gameOverText = 'Game over.'
            
            gameOverAnnouncement.textContent = `${gameOverText} Your answer (${selectedAnswer}) was wrong! Correct answer was ${correctAnswer} Problems solved: ${problemsSolved} Time: ${time.toFixed(1)}`
            answersElement.append(gameOverAnnouncement, gameOverButton, mainMenuButton)


            createOHKOLeaderboard(problemsSolved)
        }
    }
}

function startTimer(){
    // time += 0.1
    timerElement.textContent = (time += 0.1).toFixed(1)
}

function startCountdown(){
    timerElement.textContent = Math.round(time--)
    if (time < 0){
        clearAnswerElement()
            
        clearInterval(countdown)

        if (correctGuesses == problemCounter.textContent){
            gameOverText = 'Splendid!'
        } else if (wrongGuesses == problemCounter.textContent){
            gameOverText = 'Horrible!'
        }

        let problemsSolved = gamesLeft
        problemCounter.textContent = ''
        h3Element.textContent = ''
        let gameOverAnnouncement = document.createElement('p')
        let gameOverText = 'Game over.'
        
        gameOverAnnouncement.textContent = `${gameOverText} Problems solved: ${problemsSolved}`
        answersElement.append(gameOverAnnouncement, gameOverButton, mainMenuButton)


        createFastLeaderboard(problemsSolved)
    }
}

function clearAnswerElement(){
    // answersElement.childNodes.forEach(item => {
    //     console.log(item)
    //     item.remove()
    // })
    answersElement.textContent = ''
}

function generateNewProblem(){
    alreadyExists = false
    guessIsCorrect = false
    clearAnswerElement()
    generateRngSymbol(generateRngNumberOf4())
    generateRngProblem(generateRngNumber(), generateRngNumber(), symbol)
}

function generateNewInputProblem(){
    generateNewProblem()

    clearAnswerElement()

    checkAnswerInputButton.setAttribute('disabled', true)
    answerInput.addEventListener('input', (event) => {
        if (event.target.value){
            checkAnswerInputButton.removeAttribute('disabled')
        } else {
            checkAnswerInputButton.setAttribute('disabled', true)
        }
    })
    answersElement.append(answerInput, checkAnswerInputButton)
}

function startSelectedGame(){
    generateNewProblem()
    timerElement.textContent = time
    if (fastGameSelected){
        countdown = setInterval(startCountdown, 1000)
    } else {
        interval = setInterval(startTimer, 100)
    }
    headerElement.after(timerElement, problemCounter)
}

function createClassicLeaderboard(finalTime){

    let joinLeaderboard = document.createElement('p')
    joinLeaderboard.textContent = 'Write your username to be in the leaderboards. Username must be more than 2 and less than 7 characters!'
    let usernameInput = document.createElement('input')
    usernameInput.maxLength = 6 
    let usernameConfirmButton = document.createElement('button')
    usernameConfirmButton.textContent = 'Confirm'

    answersElement.append(joinLeaderboard, usernameInput, usernameConfirmButton)

    usernameConfirmButton.addEventListener('click', () => {
        if (usernameInput.value < 3 || usernameInput.value > 6){
            joinLeaderboard.textContent = 'Username must be more than 2 and less than 7 characters!'
            joinLeaderboard.style.color = 'red'
        } else {
            joinLeaderboard.remove()
            usernameInput.remove()
            usernameConfirmButton.remove()
            

            let classicLeaderboardLocalArr = localStorage.getItem('classicLeaderboard')
            let classicLeaderboardArr = classicLeaderboardLocalArr ? JSON.parse(classicLeaderboardLocalArr) : []
            let gameId = Math.random()
            let gameStats = {
                name: usernameInput.value,
                time: finalTime,
                id: gameId,
            }
            classicLeaderboardArr.push(gameStats)

            if (classicLeaderboardArr.length > 100){
                classicLeaderboardArr.splice(-1, 1)
            }

            classicLeaderboardArr.sort((a, b) => a.time - b.time)
            localStorage.setItem('classicLeaderboard', JSON.stringify(classicLeaderboardArr))

            let gamePlace = ''
            classicLeaderboardArr.forEach((place, index) => {
                console.log(place)
                console.log(place.id)
                let liElement = document.createElement('li')
                
                liElement.textContent = `${place.name} ${place.time.toFixed(1)}s`
                
                classicLeaderboard.append(liElement)
                if (gameId == place.id){
                    liElement.classList.add('current-game')
                    gamePlace = index + 1
                }
            })

            let leaderboardText = document.createElement('p')
            leaderboardText.textContent = `You're ${gamePlace} out of ${classicLeaderboardArr.length} in the leaderboard`
            // console.log(classicLeaderboardArr)
            answersElement.append(leaderboardText, classicLeaderboard)
        }
    })
}

function createSimpleLeaderboard(finalTime){

    let joinLeaderboard = document.createElement('p')
    joinLeaderboard.textContent = 'Write your username to be in the leaderboards. Username must be more than 2 and less than 7 characters!'
    let usernameInput = document.createElement('input')
    usernameInput.maxLength = 6 
    let usernameConfirmButton = document.createElement('button')
    usernameConfirmButton.textContent = 'Confirm'

    answersElement.append(joinLeaderboard, usernameInput, usernameConfirmButton)

    usernameConfirmButton.addEventListener('click', () => {
        if (usernameInput.value < 3 || usernameInput.value > 6){
            joinLeaderboard.textContent = 'Username must be more than 2 and less than 7 characters!'
            joinLeaderboard.style.color = 'red'
        } else {
            joinLeaderboard.remove()
            usernameInput.remove()
            usernameConfirmButton.remove()
            

            let simpleLeaderboardLocalArr = localStorage.getItem('simpleLeaderboard')
            let simpleLeaderboardArr = simpleLeaderboardLocalArr ? JSON.parse(simpleLeaderboardLocalArr) : []
            let gameStats = {
                name: usernameInput.value,
                time: finalTime,
            }
            simpleLeaderboardArr.push(gameStats)

            simpleLeaderboardArr.sort((a, b) => a.time - b.time)

            if (simpleLeaderboardArr.length > 100){
                simpleLeaderboardArr = simpleLeaderboardArr.slice(0, 100)
            }

            localStorage.setItem('simpleLeaderboard', JSON.stringify(simpleLeaderboardArr))

            let simpleLeaderboard = document.createElement('ol')
            simpleLeaderboardArr.forEach((place) => {
                let liElement = document.createElement('li')
                
                liElement.textContent = `${place.name} ${place.time.toFixed(1)}s`
                
                simpleLeaderboard.append(liElement)
            })
            
            let leaderboardText = document.createElement('p')
            leaderboardText.textContent = `Top ${simpleLeaderboardArr.length} leaderboard:`
            // console.log(simpleLeaderboardArr)
            answersElement.append(leaderboardText, simpleLeaderboard)
        }
    })
}

function createFastLeaderboard(problems){

    let joinLeaderboard = document.createElement('p')
    joinLeaderboard.textContent = 'Write your username to be in the leaderboards. Username must be more than 2 and less than 7 characters!'
    let usernameInput = document.createElement('input')
    usernameInput.maxLength = 6 
    let usernameConfirmButton = document.createElement('button')
    usernameConfirmButton.textContent = 'Confirm'

    answersElement.append(joinLeaderboard, usernameInput, usernameConfirmButton)

    usernameConfirmButton.addEventListener('click', () => {
        if (usernameInput.value < 3 || usernameInput.value > 6){
            joinLeaderboard.textContent = 'Username must be more than 2 and less than 7 characters!'
            joinLeaderboard.style.color = 'red'
        } else {
            joinLeaderboard.remove()
            usernameInput.remove()
            usernameConfirmButton.remove()
            

            let fastLeaderboardLocalArr = localStorage.getItem('fastLeaderboard')
            let fastLeaderboardArr = fastLeaderboardLocalArr ? JSON.parse(fastLeaderboardLocalArr) : []
            let gameStats = {
                name: usernameInput.value,
                solved: problems,
            }
            fastLeaderboardArr.push(gameStats)

            if (fastLeaderboardArr.length > 100){
                fastLeaderboardArr.splice(-1, 1)
            }

            fastLeaderboardArr.sort((a, b) => b.solved - a.solved)
            localStorage.setItem('fastLeaderboard', JSON.stringify(fastLeaderboardArr))

            fastLeaderboardArr.forEach((place) => {
                let liElement = document.createElement('li')
                
                liElement.textContent = `${place.name} ${place.solved}`
                
                fastLeaderboard.append(liElement)
            })
            
            let leaderboardText = document.createElement('p')
            leaderboardText.textContent = `Top ${fastLeaderboardArr.length} leaderboard:`
            // console.log(fastLeaderboardArr)
            answersElement.append(leaderboardText, fastLeaderboard)
        }
    })
}

function createOHKOLeaderboard(problems){

    let joinLeaderboard = document.createElement('p')
    joinLeaderboard.textContent = 'Write your username to be in the leaderboards. Username must be more than 2 and less than 7 characters!'
    let usernameInput = document.createElement('input')
    usernameInput.maxLength = 6 
    let usernameConfirmButton = document.createElement('button')
    usernameConfirmButton.textContent = 'Confirm'

    answersElement.append(joinLeaderboard, usernameInput, usernameConfirmButton)

    usernameConfirmButton.addEventListener('click', () => {
        if (usernameInput.value < 3 || usernameInput.value > 6){
            joinLeaderboard.textContent = 'Username must be more than 2 and less than 7 characters!'
            joinLeaderboard.style.color = 'red'
        } else {
            joinLeaderboard.remove()
            usernameInput.remove()
            usernameConfirmButton.remove()
            

            let OHKOLeaderboardLocalArr = localStorage.getItem('OHKOLeaderboard')
            let OHKOLeaderboardArr = OHKOLeaderboardLocalArr ? JSON.parse(OHKOLeaderboardLocalArr) : []
            let gameStats = {
                name: usernameInput.value,
                solved: problems,
            }
            OHKOLeaderboardArr.push(gameStats)

            if (OHKOLeaderboardArr.length > 100){
                OHKOLeaderboardArr.splice(-1, 1)
            }

            OHKOLeaderboardArr.sort((a, b) => b.solved - a.solved)
            localStorage.setItem('OHKOLeaderboard', JSON.stringify(OHKOLeaderboardArr))

            OHKOLeaderboardArr.forEach((place) => {
                let liElement = document.createElement('li')
                
                liElement.textContent = `${place.name} ${place.solved}`
                
                OHKOLeaderboard.append(liElement)
            })
            
            let leaderboardText = document.createElement('p')
            leaderboardText.textContent = `Top ${OHKOLeaderboardArr.length} leaderboard:`
            // console.log(OHKOLeaderboardArr)
            answersElement.append(leaderboardText, OHKOLeaderboard)
        }
    })
}

function createLeaderboard(){

}

function init(){
    // renderQuiz()

    selectGameClassic.addEventListener('click', () => {

        clearAnswerElement()
        selectedGameText.textContent = `CLASSIC MODE: Solve ${PROBLEMS_COUNT} problems correctly as fast as possible by adding, subtracting, dividing and multiplying. Wrong answers add ${TIME_PENALTY_MULTIPLIER} seconds to your time.`
        answersElement.append(selectedGameText, startGameButton, mainMenuButton)

    })

    selectGameSimple.addEventListener('click', () => {

        simpleGameSelected = true
        clearAnswerElement()
        selectedGameText.textContent = `SIMPLE MODE: Solve ${PROBLEMS_COUNT} problems correctly as fast as possible by adding and subtracting. Wrong answers add ${TIME_PENALTY_MULTIPLIER} seconds to your time.`
        answersElement.append(selectedGameText, startGameButton, mainMenuButton)

    })

    selectGameFast.addEventListener('click', () => {

        time = FAST_MODE_TIME
        fastGameSelected = true
        clearAnswerElement()
        selectedGameText.textContent = `FAST MODE: Solve as many problems as you can correctly in ${FAST_MODE_TIME} seconds. There is no time penalty for wrong answers.`
        answersElement.append(selectedGameText, startGameButton, mainMenuButton)

    })

    selectGameOHKO.addEventListener('click', () => {

        OHKOGameSelected = true
        clearAnswerElement()
        selectedGameText.textContent = `ONE HIT KO MODE: Solve as many problems correctly. Answering wrong will end the game.`
        answersElement.append(selectedGameText, startGameButton, mainMenuButton)

    })


    startGameButton.addEventListener('click', () => {

        startSelectedGame()

    })


    nextQuestionButton.addEventListener('click', () => {
        gamesLeft++
        problemCounter.textContent = `Problem ${gamesLeft + 1}`
        answerInput.value = ''

        if (guessIsCorrect){
            correctGuesses++
        } else {
            wrongGuesses++
        }

        if (OHKOGameSelected || fastGameSelected){
            let randomProblemType = Math.floor(Math.random() * 3)
            if (randomProblemType == 0 || randomProblemType == 1){
                
                generateNewInputProblem()
                
            } else if (randomProblemType == 2){

                generateNewProblem()

            }
        } else {
            if (gamesLeft >= PROBLEMS_COUNT){
        
                clearAnswerElement()
                
                clearInterval(interval)
                problemCounter.textContent = ''
                h3Element.textContent = ''
                let gameOverAnnouncement = document.createElement('p')
                let gameOverText = 'Game over.'
        
                if (correctGuesses == PROBLEMS_COUNT){
                    gameOverText = 'Splendid!'
                } else if (wrongGuesses == PROBLEMS_COUNT){
                    gameOverText = 'Horrible!'
                }
                
                let timePenalty = wrongGuesses * TIME_PENALTY_MULTIPLIER
                let finalTime = time + timePenalty
                gameOverAnnouncement.textContent = `${gameOverText} Correct answers: ${correctGuesses}  Wrong answers: ${wrongGuesses} Time: ${time.toFixed(1)} Time penalty: ${timePenalty} Final time: ${finalTime.toFixed(1)}`
                answersElement.append(gameOverAnnouncement, gameOverButton, mainMenuButton)

                if (simpleGameSelected){
                    
                    createSimpleLeaderboard(finalTime)

                } else {

                    createClassicLeaderboard(finalTime)

                }
            } else if (gamesLeft >= INPUT_START){

                generateNewInputProblem()

            }
            else {

                generateNewProblem()

            }
        }
    })
    

    gameOverButton.addEventListener('click', () => {
        gamesLeft = 0
        correctGuesses = 0
        wrongGuesses = 0
        problemCounter.textContent = `Problem ${gamesLeft + 1}`
        
        
        generateNewProblem()

        if (endlessGameSelected){
            contentElement.append(endGameElement)
        }

        if (fastGameSelected){
            time = FAST_MODE_TIME
            countdown = setInterval(startCountdown, 1000)
        } else {
            time = 0
            interval = setInterval(startTimer, 100)
        }
    })

    mainMenuButton.addEventListener('click', () => {
        gamesLeft = 0
        correctGuesses = 0
        wrongGuesses = 0
        time = 0
        simpleGameSelected = false
        fastGameSelected = false
        OHKOGameSelected = false
        problemCounter.textContent = `Problem ${gamesLeft + 1}`
        selectedGameText.textContent = 'Select game mode:'

        clearAnswerElement()
        timerElement.remove()
        problemCounter.remove()
        // endGameElement.remove()
        answersElement.append(selectedGameText, selectGameClassic, selectGameSimple, selectGameFast, selectGameOHKO, leaderboardButton)
    })

    checkAnswerInputButton.addEventListener('click', (event) => {
        if (answerInput.value == correctAnswer){
            correctAnswerHandler()
        } else {
            wrongAnswerHandler(answerInput.value)
        }
    })
}   

init()

function renderQuiz(){
    let contentElement = document.querySelector('#content')
    let structureElement = document.createElement('div')
    structureElement.id = 'structure'
    let answersElement = document.createElement('div')
    answersElement.id = 'answers'
    let titleElement = document.createElement('h1')
    titleElement.textContent = 'Math game'
    let descriptionElement = document.createElement('h2')
    descriptionElement.textContent = 'Solve 10 problems by clicking the button with the correct answer.'
    let problemsSolvedElement = document.createElement('p')
    problemsSolvedElement.id = 'problem'
    let problemElement = document.createElement('h3')
    structureElement.append(titleElement, descriptionElement, problemsSolvedElement, problemElement)

    contentElement.append(structureElement, answersElement)

    let answerElement = document.createElement('span')
    let nextQuestionButton = document.createElement('button')
    nextQuestionButton.textContent = 'Next question?'

    let gameOverButton = document.createElement('button')
    gameOverButton.textContent = 'Start new game'

    let answerAnnouncement = document.createElement('p')
}























































