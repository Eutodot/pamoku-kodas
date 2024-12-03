var rock = document.querySelector('#rock');
var paper = document.querySelector('#paper');
var scissors = document.querySelector('#scissors');
var playerOption = [rock, paper, scissors];
var computerOption = ['rock', 'paper', 'scissors'];
var winnerParagraph = document.querySelector('p');
var winsParagraph = document.querySelector('#score');
var playerWins = 0;
var computerWins = 0;
var draws = 0;
function getComputerChoice(choices) {
    var max = choices.length;
    var randomIndex = Math.floor(Math.random() * max);
    var computerAnswer = choices[randomIndex];
    return computerAnswer;
}
rock.addEventListener('click', function () {
    var computerChoice = getComputerChoice(computerOption);
    if (computerChoice == 'rock') {
        winnerParagraph.textContent = 'Computer chose Rock. Draw.';
        draws++;
    }
    else if (computerChoice == 'paper') {
        winnerParagraph.textContent = 'Computer chose Paper. You lose.';
        computerWins++;
    }
    else if (computerChoice == 'scissors') {
        winnerParagraph.textContent = 'Computer chose Scissors. You win.';
        playerWins++;
    }
    winsParagraph.textContent = "Computer won ".concat(computerWins, " times. You won ").concat(playerWins, " times. ").concat(draws, " draws");
});
paper.addEventListener('click', function () {
    var computerChoice = getComputerChoice(computerOption);
    if (computerChoice == 'rock') {
        winnerParagraph.textContent = 'Computer chose Rock. You win.';
        playerWins++;
    }
    else if (computerChoice == 'paper') {
        winnerParagraph.textContent = 'Computer chose Paper. Draw.';
        draws++;
    }
    else if (computerChoice == 'scissors') {
        winnerParagraph.textContent = 'Computer chose Scissors. You lose.';
        computerWins++;
    }
    winsParagraph.textContent = "Computer won ".concat(computerWins, " times. You won ").concat(playerWins, " times. ").concat(draws, " draws");
});
scissors.addEventListener('click', function () {
    var computerChoice = getComputerChoice(computerOption);
    if (computerChoice == 'rock') {
        winnerParagraph.textContent = 'Computer chose Rock. You lose.';
        computerWins++;
    }
    else if (computerChoice == 'paper') {
        winnerParagraph.textContent = 'Computer chose Paper. You win.';
        playerWins++;
    }
    else if (computerChoice == 'scissors') {
        winnerParagraph.textContent = 'Computer chose Scissors. Draw.';
        draws++;
    }
    winsParagraph.textContent = "Computer won ".concat(computerWins, " times. You won ").concat(playerWins, " times. ").concat(draws, " draws");
});
