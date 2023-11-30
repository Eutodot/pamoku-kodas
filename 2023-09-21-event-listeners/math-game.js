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
let simpleLeaderboard = document.createElement('ol')
let fastLeaderboard = document.createElement('ol')
let OHKOLeaderboard = document.createElement('ol')
structureElement.append(headerElement, h3Element)

contentElement.append(structureElement, answersElement)

let answerElement = document.createElement('span')
let nextQuestionButton = document.createElement('button')
nextQuestionButton.classList.add('separate-button')
nextQuestionButton.textContent = 'Next question?'

let gameOverButton = document.createElement('button')
gameOverButton.classList.add('separate-button')
gameOverButton.textContent = 'Start new game'

let answerAnnouncement = document.createElement('p')
answerAnnouncement.classList.add('answer-announcement')

let answerInput = document.createElement('input')
answerInput.classList.add('input-button')
answerInput.type = 'number'

let checkAnswerInputButton = document.createElement('button')
checkAnswerInputButton.classList.add('input-button')
checkAnswerInputButton.textContent = 'Confirm'

let selectedGameText = document.createElement('h3')
selectedGameText.textContent = 'Select game mode:'
let selectGameClassic = document.createElement('button')
selectGameClassic.classList.add('separate-button')
selectGameClassic.textContent = 'Classic'
let selectGameSimple = document.createElement('button')
selectGameSimple.textContent = 'Simple'
selectGameSimple.classList.add('separate-button')
let selectGameFast = document.createElement('button')
selectGameFast.textContent = 'Any%'
selectGameFast.classList.add('separate-button')
let selectGameOHKO = document.createElement('button')
selectGameOHKO.textContent = 'OHKO'
selectGameOHKO.classList.add('separate-button')
let selectGameCustom = document.createElement('button')
selectGameCustom.textContent = 'Custom'
selectGameCustom.classList.add('separate-button')
let leaderboardButton = document.createElement('button')
leaderboardButton.textContent = 'Leaderboards'
leaderboardButton.classList.add('separate-button')
let startGameButton = document.createElement('button')
startGameButton.classList.add('separate-button')
startGameButton.textContent = 'Start'
startGameButton.classList.add('separate-button')
let chooseClassicGameButton = document.createElement('button')
chooseClassicGameButton.textContent = 'Classic'
let chooseFastGameButton = document.createElement('button')
chooseFastGameButton.textContent = 'Any%'
let chooseOHKOGameButton = document.createElement('button')
chooseOHKOGameButton.textContent = 'OHKO'
let chooseEndlessGameButton = document.createElement('button')
chooseEndlessGameButton.textContent = 'Endless'
let customDivElement = document.createElement('div')
let inputCustomConfig = document.createElement('input')
inputCustomConfig.classList.add('input-button')
inputCustomConfig.type = 'number'

answersElement.append(selectedGameText, selectGameClassic, selectGameSimple, selectGameFast, selectGameOHKO, selectGameCustom, leaderboardButton)

let endGameButton = document.createElement('button')
endGameButton.textContent = 'End the game'
endGameButton.classList.add('separate-button')
let endGameElement = document.createElement('div')
endGameElement.append(endGameButton)
let mainMenuButton = document.createElement('button')
mainMenuButton.textContent = 'Return to main menu'
mainMenuButton.classList.add('separate-button')

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

let customGameSelected = false
let addSelected = false
let subtractSelected = false
let multiplySelected = false
let divideSelected = false
let endlessGameSelected = false
let classicGameSelected = false
let customGameSymbols = []

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
    let randomCustomSymbol = symbol
    if (customGameSelected){
        randomCustomSymbol = customGameSymbols[(Math.floor(Math.random() * (customGameSymbols.length)))]
        
        if (randomCustomSymbol == '+'){
            correctAnswer = Number(rngNumber1) + Number(rngNumber2)

        } else if (randomCustomSymbol == '-'){
            correctAnswer = Number(rngNumber1) - Number(rngNumber2)

        } else if (randomCustomSymbol == '*'){
            correctAnswer = Number(rngNumber1) * Number(rngNumber2)

        } else if (randomCustomSymbol == '/'){
            correctAnswer = Number(rngNumber1) / Number(rngNumber2)
        }
        
    } else {
        if (decideRngSymbol == '+'){
            correctAnswer = Number(rngNumber1) + Number(rngNumber2)

        } else if (decideRngSymbol == '-'){
            correctAnswer = Number(rngNumber1) - Number(rngNumber2)

        } else if (decideRngSymbol == '*'){
            correctAnswer = Number(rngNumber1) * Number(rngNumber2)

        } else if (decideRngSymbol == '/'){
            correctAnswer = Number(rngNumber1) / Number(rngNumber2)
        }
    }

    if (rngNumber1 < 0){
        rngNumber1 = `(${rngNumber1})`
    }
    if (rngNumber2 < 0){
        rngNumber2 = `(${rngNumber2})`
    }
    
    answerElement.textContent = '?'
    h3Element.textContent = `${rngNumber1} ${randomCustomSymbol} ${rngNumber2} = `
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
        answersButton.classList.add('separate-button')
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
        answerAnnouncement.classList.remove('wrong-answer')
        answerAnnouncement.classList.add('correct-answer')
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
        answerAnnouncement.classList.remove('correct-answer')
        answerAnnouncement.classList.add('wrong-answer')
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
            gameOverAnnouncement.classList.add('end-screen-text')
            answersElement.append(gameOverAnnouncement, gameOverButton, mainMenuButton)

            if (!customGameSelected){
            createOHKOLeaderboard(problemsSolved)
            }
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
        
        gameOverAnnouncement.textContent = `${gameOverText} Problems solved: ${problemsSolved} Correct answers: ${correctGuesses}  Wrong answers: ${wrongGuesses}`
        gameOverAnnouncement.classList.add('end-screen-text')
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
    joinLeaderboard.classList.add('end-screen-text')
    let usernameInput = document.createElement('input')
    usernameInput.classList.add('input-button')
    usernameInput.maxLength = 6 
    let usernameConfirmButton = document.createElement('button')
    usernameConfirmButton.classList.add('input-button')
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
                score: finalTime,
                id: gameId,
            }
            classicLeaderboardArr.push(gameStats)

            if (classicLeaderboardArr.length > 100){
                classicLeaderboardArr.splice(-1, 1)
            }

            classicLeaderboardArr.sort((a, b) => a.score - b.score)
            localStorage.setItem('classicLeaderboard', JSON.stringify(classicLeaderboardArr))

            
            let gamePlace = createLeaderboard(classicLeaderboardArr, classicLeaderboard, 's', gameId)
            // classicLeaderboardArr.forEach((place, index) => {
            //     // console.log(place)
            //     // console.log(place.id)
            //     let liElement = document.createElement('li')
                
            //     liElement.textContent = `${place.name} ${place.score.toFixed(1)}s`
                
            //     classicLeaderboard.append(liElement)
            //     if (gameId == place.id){
            //         liElement.classList.add('current-game')
            //         gamePlace = index + 1
            //     }
            // })

            let leaderboardText = document.createElement('p')
            leaderboardText.textContent = `You're ${gamePlace} out of ${classicLeaderboardArr.length} in the leaderboard:`
            // console.log(classicLeaderboardArr)
            answersElement.append(leaderboardText, classicLeaderboard)
        }
    })
}

function createSimpleLeaderboard(finalTime){

    let joinLeaderboard = document.createElement('p')
    joinLeaderboard.textContent = 'Write your username to be in the leaderboards. Username must be more than 2 and less than 7 characters!'
    joinLeaderboard.classList.add('end-screen-text')
    let usernameInput = document.createElement('input')
    usernameInput.classList.add('input-button')
    usernameInput.maxLength = 6 
    let usernameConfirmButton = document.createElement('button')
    usernameConfirmButton.classList.add('input-button')
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
            let gameId = Math.random()
            let gameStats = {
                name: usernameInput.value,
                score: finalTime,
                id: gameId,
            }
            simpleLeaderboardArr.push(gameStats)

            simpleLeaderboardArr.sort((a, b) => a.score - b.score)

            if (simpleLeaderboardArr.length > 100){
                simpleLeaderboardArr = simpleLeaderboardArr.slice(0, 100)
            }

            localStorage.setItem('simpleLeaderboard', JSON.stringify(simpleLeaderboardArr))

            
            let gamePlace = createLeaderboard(simpleLeaderboardArr, simpleLeaderboard, 's', gameId)
            // simpleLeaderboardArr.forEach((place, index) => {
            // // console.log(place)
            // // console.log(place.id)
            // let liElement = document.createElement('li')
            
            // liElement.textContent = `${place.name} ${place.score.toFixed(1)}s`
            
            // simpleLeaderboard.append(liElement)
            // if (gameId == place.id){
            //     liElement.classList.add('current-game')
            //     gamePlace = index + 1
            // }
            // })
            
            let leaderboardText = document.createElement('p')
            leaderboardText.textContent = `You're ${gamePlace} out of ${simpleLeaderboardArr.length} in the leaderboard:`
            // console.log(simpleLeaderboardArr)
            answersElement.append(leaderboardText, simpleLeaderboard)
        }
    })
}

function createFastLeaderboard(problems){

    let joinLeaderboard = document.createElement('p')
    joinLeaderboard.textContent = 'Write your username to be in the leaderboards. Username must be more than 2 and less than 7 characters!'
    joinLeaderboard.classList.add('end-screen-text')
    let usernameInput = document.createElement('input')
    usernameInput.classList.add('input-button')
    usernameInput.maxLength = 6 
    let usernameConfirmButton = document.createElement('button')
    usernameConfirmButton.classList.add('input-button')
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
            let gameId = Math.random()
            let gameStats = {
                name: usernameInput.value,
                score: problems,
                id: gameId,
            }
            fastLeaderboardArr.push(gameStats)

            if (fastLeaderboardArr.length > 100){
                fastLeaderboardArr.splice(-1, 1)
            }

            fastLeaderboardArr.sort((a, b) => b.score - a.score)
            localStorage.setItem('fastLeaderboard', JSON.stringify(fastLeaderboardArr))

            
            let gamePlace = createLeaderboard(fastLeaderboardArr, fastLeaderboard, 'problems', gameId)
            // fastLeaderboardArr.forEach((place, index) => {
            // // console.log(place)
            // // console.log(place.id)
            // let liElement = document.createElement('li')
            
            // liElement.textContent = `${place.name} ${place.score} solved`
            
            // fastLeaderboard.append(liElement)
            // if (gameId == place.id){
            //     liElement.classList.add('current-game')
            //     gamePlace = index + 1
            // }
            // })
                    
            let leaderboardText = document.createElement('p')
            leaderboardText.textContent = `You're ${gamePlace} out of ${fastLeaderboardArr.length} in the leaderboard:`
            // console.log(fastLeaderboardArr)
            answersElement.append(leaderboardText, fastLeaderboard)
        }
    })
}

function createOHKOLeaderboard(problems){
    
    let joinLeaderboard = document.createElement('p')
    joinLeaderboard.textContent = 'Write your username to be in the leaderboards. Username must be more than 2 and less than 7 characters!'
    joinLeaderboard.classList.add('end-screen-text')
    let usernameInput = document.createElement('input')
    usernameInput.classList.add('input-button')
    usernameInput.maxLength = 6 
    let usernameConfirmButton = document.createElement('button')
    usernameConfirmButton.classList.add('input-button')
    usernameConfirmButton.textContent = 'Confirm'

    answersElement.append(joinLeaderboard, usernameInput, usernameConfirmButton)

    usernameConfirmButton.addEventListener('click', () => {
        if (String(usernameInput.value) < 3 || String(usernameInput.value) > 6){
            joinLeaderboard.textContent = 'Username must be more than 2 and less than 7 characters!'
            joinLeaderboard.style.color = 'red'
        } else {
            joinLeaderboard.remove()
            usernameInput.remove()
            usernameConfirmButton.remove()
            

            let OHKOLeaderboardLocalArr = localStorage.getItem('OHKOLeaderboard')
            let OHKOLeaderboardArr = OHKOLeaderboardLocalArr ? JSON.parse(OHKOLeaderboardLocalArr) : []
            let gameId = Math.random()
            let gameStats = {
                name: usernameInput.value,
                score: problems,
                id: gameId,
            }
            OHKOLeaderboardArr.push(gameStats)

            if (OHKOLeaderboardArr.length > 100){
                OHKOLeaderboardArr.splice(-1, 1)
            }

            OHKOLeaderboardArr.sort((a, b) => b.score - a.score)
            localStorage.setItem('OHKOLeaderboard', JSON.stringify(OHKOLeaderboardArr))

            
            let gamePlace = createLeaderboard(OHKOLeaderboardArr, OHKOLeaderboard, 'problems', gameId)
            // OHKOLeaderboardArr.forEach((place, index) => {
            // // console.log(place)
            // // console.log(place.id)
            // let liElement = document.createElement('li')
            
            // liElement.textContent = `${place.name} ${place.score} solved`
            
            // OHKOLeaderboard.append(liElement)
            // if (gameId == place.id){
            //     liElement.classList.add('current-game')
            //     gamePlace = index + 1
            // }
            // })
            
            // let leaderboardText = document.createElement('p')
            // leaderboardText.textContent = `You're ${gamePlace} out of ${OHKOLeaderboardArr.length} in the leaderboard:`
            // // console.log(OHKOLeaderboardArr)
            // answersElement.append(leaderboardText, OHKOLeaderboard)
        }
    })
}

function createLeaderboard(leaderboardArr, leaderboard, units, id){
    let gamePlace = ''
    leaderboardArr.forEach((place, index) => {
        // console.log(place)
        // console.log(place.id)
        let liElement = document.createElement('li')
        
        if (units == 'problems'){
            liElement.textContent = `${place.name} ${place.score} ${units}`
        } else {
            liElement.textContent = `${place.name} ${place.score.toFixed(1)}${units}`
        }
        
        leaderboard.append(liElement)
        if (id == place.id){
            liElement.classList.add('current-game')
            gamePlace = index + 1
        }
    })
    let leaderboardText = document.createElement('p')
    leaderboardText.textContent = `You're ${gamePlace} out of ${leaderboardArr.length} in the leaderboard:`
    answersElement.append(leaderboardText, leaderboard)
}

function clearLeaderboards(){
    classicLeaderboard.textContent = ''
    simpleLeaderboard.textContent = ''
    fastLeaderboard.textContent = ''
    OHKOLeaderboard.textContent = ''
}

function createLeaderBoardsForLeaderboard(title, units, text){
    let localArr = localStorage.getItem(title)
    let arr = localArr ? JSON.parse(localArr) : []
    
    let wrapper = document.createElement('div')
    wrapper.classList.add('leaderboard-element')
    let list = document.createElement('ol')
    arr.forEach((place) => {
        let liElement = document.createElement('li')
        
        if (units == 'problems'){
            liElement.textContent = `${place.name} ${place.score} ${units}`
        } else {
            liElement.textContent = `${place.name} ${place.score.toFixed(1)}${units}`
        }
        
        list.append(liElement)
    })

    let textElement = document.createElement('p')
    textElement.textContent = text
    wrapper.append(textElement, list)
    return wrapper
}

function unactiveAllOptions(){
    endlessGameSelected = false
    chooseEndlessGameButton.classList.remove('active')
    chooseEndlessGameButton.classList.add('unactive')

    classicGameSelected = false
    chooseClassicGameButton.classList.remove('active')
    chooseClassicGameButton.classList.add('unactive')

    fastGameSelected = false
    chooseFastGameButton.classList.remove('active')
    chooseFastGameButton.classList.add('unactive')

    OHKOGameSelected = false
    chooseOHKOGameButton.classList.remove('active')
    chooseOHKOGameButton.classList.add('unactive')
}

function customizeGameMode(){
    let customizeGameModeText = document.createElement('p')
    if (classicGameSelected){
        customizeGameModeText.textContent = 'Type in the number of questions:'
    } else if (fastGameSelected){
        customizeGameModeText.textContent = 'Type in the length of the game (in seconds):'
    }
    customDivElement.append(customizeGameModeText, inputCustomConfig)
}

function decideCustomSymbol(){
    if (addSelected){
        customGameSymbols.push('+')
    }
    if (subtractSelected){
        customGameSymbols.push('-')
    }
    if (multiplySelected){
        customGameSymbols.push('*')
    }
    if (divideSelected){
        customGameSymbols.push('/')
    }
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


    selectGameCustom.addEventListener('click', () => {
        clearAnswerElement()
        customGameSelected = true

        let chooseMathematicsText = document.createElement('p')
        chooseMathematicsText.textContent = 'Choose wanted mathematical operations:'

        let chooseAddButton = document.createElement('button')
        chooseAddButton.textContent = 'Adding'
        chooseAddButton.classList.add('unactive')
        chooseAddButton.addEventListener('click', () => {
            if (addSelected){
                addSelected = false
                chooseAddButton.classList.remove('active')
                chooseAddButton.classList.add('unactive')
            } else {
                addSelected = true
                chooseAddButton.classList.remove('unactive')
                chooseAddButton.classList.add('active')
            }
        })

        let chooseSubtractButton = document.createElement('button')
        chooseSubtractButton.textContent = 'Subtracting'
        chooseSubtractButton.classList.add('unactive')
        chooseSubtractButton.addEventListener('click', () => {
            if (subtractSelected){
                subtractSelected = false
                chooseSubtractButton.classList.remove('active')
                chooseSubtractButton.classList.add('unactive')
            } else {
                subtractSelected = true
                chooseSubtractButton.classList.remove('unactive')
                chooseSubtractButton.classList.add('active')
            }
        })

        let chooseMultiplyButton = document.createElement('button')
        chooseMultiplyButton.textContent = 'Multiplying'
        chooseMultiplyButton.classList.add('unactive')
        chooseMultiplyButton.addEventListener('click', () => {
            if (multiplySelected){
                multiplySelected = false
                chooseMultiplyButton.classList.remove('active')
                chooseMultiplyButton.classList.add('unactive')
            } else {
                multiplySelected = true
                chooseMultiplyButton.classList.remove('unactive')
                chooseMultiplyButton.classList.add('active')
            }
        })

        let chooseDivideButton = document.createElement('button')
        chooseDivideButton.textContent = 'Dividing'
        chooseDivideButton.classList.add('unactive')
        chooseDivideButton.addEventListener('click', () => {
            if (divideSelected){
                divideSelected = false
                chooseDivideButton.classList.remove('active')
                chooseDivideButton.classList.add('unactive')
            } else {
                divideSelected = true
                chooseDivideButton.classList.remove('unactive')
                chooseDivideButton.classList.add('active')
            }
        })

        let chooseTimePenaltyText = document.createElement('p')
        chooseTimePenaltyText.textContent = 'Time penalty(in seconds):'

        let chooseGameTypeText = document.createElement('p')
        chooseGameTypeText.textContent = 'Choose wanted game mode:'

        
        chooseClassicGameButton.classList.add('unactive')
        chooseClassicGameButton.addEventListener('click', () => {
            if (classicGameSelected){
                classicGameSelected = false
                chooseClassicGameButton.classList.remove('active')
                chooseClassicGameButton.classList.add('unactive')
                customDivElement.textContent = ''
            } else {
                unactiveAllOptions()
                classicGameSelected = true
                chooseClassicGameButton.classList.remove('unactive')
                chooseClassicGameButton.classList.add('active')
                customDivElement.textContent = ''
                customizeGameMode()
            }
        })

        
        chooseFastGameButton.classList.add('unactive')
        chooseFastGameButton.addEventListener('click', () => {
            if (fastGameSelected){
                fastGameSelected = false
                chooseFastGameButton.classList.remove('active')
                chooseFastGameButton.classList.add('unactive')
                customDivElement.textContent = ''
            } else {
                unactiveAllOptions()
                fastGameSelected = true
                chooseFastGameButton.classList.remove('unactive')
                chooseFastGameButton.classList.add('active')
                customDivElement.textContent = ''
                customizeGameMode()
            }
        })

        
        chooseOHKOGameButton.classList.add('unactive')
        chooseOHKOGameButton.addEventListener('click', () => {
            if (OHKOGameSelected){
                OHKOGameSelected = false
                chooseOHKOGameButton.classList.remove('active')
                chooseOHKOGameButton.classList.add('unactive')
            } else {
                unactiveAllOptions()
                OHKOGameSelected = true
                chooseOHKOGameButton.classList.remove('unactive')
                chooseOHKOGameButton.classList.add('active')
                customDivElement.textContent = ''
            }
        })

        
        chooseEndlessGameButton.classList.add('unactive')
        chooseEndlessGameButton.addEventListener('click', () => {
            if (endlessGameSelected){
                endlessGameSelected = false
                chooseEndlessGameButton.classList.remove('active')
                chooseEndlessGameButton.classList.add('unactive')
            } else {
                unactiveAllOptions()
                endlessGameSelected = true
                chooseEndlessGameButton.classList.remove('unactive')
                chooseEndlessGameButton.classList.add('active')
                customDivElement.textContent = ''
            }
        })
        
        

        let startGameDivElement = document.createElement('div')
        startGameDivElement.append(startGameButton, mainMenuButton)

        answersElement.append(chooseMathematicsText, chooseAddButton, chooseSubtractButton, chooseMultiplyButton, chooseDivideButton, chooseGameTypeText, chooseClassicGameButton, chooseFastGameButton, chooseOHKOGameButton, chooseEndlessGameButton, customDivElement, startGameDivElement)
    })

    leaderboardButton.addEventListener('click', () => {
        clearAnswerElement()

        let classicLeaderboardElement = createLeaderBoardsForLeaderboard('classicLeaderboard', 's', `Classic Mode leaderboard:`)
        
        let simpleLeaderboardElement = createLeaderBoardsForLeaderboard('simpleLeaderboard', 's', `Simple Mode leaderboard:`)
        
        let fastLeaderboardElement = createLeaderBoardsForLeaderboard('fastLeaderboard', 'problems', `Any% Mode leaderboard:`)
        
        let OHKOLeaderboardElement = createLeaderBoardsForLeaderboard('OHKOLeaderboard', 'problems', `OHKO Mode leaderboard:`)
        
        let leaderboardContainer = document.createElement('div')
        leaderboardContainer.classList.add('leaderboard-container')
        leaderboardContainer.append(classicLeaderboardElement, simpleLeaderboardElement, fastLeaderboardElement, OHKOLeaderboardElement)

        answersElement.append(mainMenuButton, leaderboardContainer)
    })
    

    startGameButton.addEventListener('click', () => {
        if (fastGameSelected && customGameSelected){
            time = inputCustomConfig.value
        }
        
        if (customGameSelected){
            decideCustomSymbol()
            startSelectedGame()
        } else {
            startSelectedGame()
        }

        if (endlessGameSelected && customGameSelected){
            contentElement.append(endGameElement)
        }
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

        if (OHKOGameSelected || fastGameSelected || endlessGameSelected){
            let randomProblemType = Math.floor(Math.random() * 3)
            if (randomProblemType == 0 || randomProblemType == 1){
                
                generateNewProblem()
                
            } else if (randomProblemType == 2){

                generateNewInputProblem()

            }
        } else if (customGameSelected){
            if (gamesLeft >= inputCustomConfig.value){
        
                clearAnswerElement()
                
                clearInterval(interval)
                problemCounter.textContent = ''
                h3Element.textContent = ''
                let gameOverAnnouncement = document.createElement('p')
                let gameOverText = 'Game over.'
        
                if (correctGuesses == inputCustomConfig.value){
                    gameOverText = 'Splendid!'
                } else if (wrongGuesses == inputCustomConfig.value){
                    gameOverText = 'Horrible!'
                }
                
                let timePenalty = wrongGuesses * TIME_PENALTY_MULTIPLIER
                let finalTime = time + timePenalty
                gameOverAnnouncement.textContent = `${gameOverText} Correct answers: ${correctGuesses}  Wrong answers: ${wrongGuesses} Time: ${time.toFixed(1)} Time penalty: ${timePenalty} Final time: ${finalTime.toFixed(1)}`
                gameOverAnnouncement.classList.add('end-screen-text')
                answersElement.append(gameOverAnnouncement, gameOverButton, mainMenuButton)

            } else if (gamesLeft >= INPUT_START){

                generateNewInputProblem()

            }
            else {

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
                gameOverAnnouncement.classList.add('end-screen-text')
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
    

    endGameButton.addEventListener('click', () => {
        clearAnswerElement()
        endGameElement.remove()
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
        gameOverAnnouncement.classList.add('end-screen-text')
        answersElement.append(gameOverAnnouncement, gameOverButton, mainMenuButton)
    })

    gameOverButton.addEventListener('click', () => {
        gamesLeft = 0
        correctGuesses = 0
        wrongGuesses = 0
        problemCounter.textContent = `Problem ${gamesLeft + 1}`
        
        clearLeaderboards()
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
        customGameSelected = false
        addSelected = false
        subtractSelected = false
        multiplySelected = false
        divideSelected = false
        endlessGameSelected = false
        classicGameSelected = false
        customGameSymbols = []
        problemCounter.textContent = `Problem ${gamesLeft + 1}`
        selectedGameText.textContent = 'Select game mode:'

        clearLeaderboards()
        clearAnswerElement()
        timerElement.remove()
        problemCounter.remove()
        // endGameElement.remove()
        answersElement.append(selectedGameText, selectGameClassic, selectGameSimple, selectGameFast, selectGameOHKO, selectGameCustom, leaderboardButton)
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








































