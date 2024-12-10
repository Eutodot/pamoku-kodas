var rock = document.querySelector('#rock');
var paper = document.querySelector('#paper');
var scissors = document.querySelector('#scissors');
var ComputerOption;
(function (ComputerOption) {
    ComputerOption[ComputerOption["ROCK"] = 0] = "ROCK";
    ComputerOption[ComputerOption["PAPER"] = 1] = "PAPER";
    ComputerOption[ComputerOption["SCISSORS"] = 2] = "SCISSORS";
})(ComputerOption || (ComputerOption = {})); // Pakeisti i enum
var winnerParagraph = document.querySelector('p');
var winsParagraph = document.querySelector('#score');
var playerWins = 0;
var computerWins = 0;
var draws = 0;
function getComputerChoice(choices) {
    var max = choices.length;
    var randomIndex = Math.floor(Math.random() * max);
    var computerAnswer = randomIndex;
    return computerAnswer;
}
rock.addEventListener('click', function () {
    var computerChoice = getComputerChoice(ComputerOption);
    if (computerChoice == ComputerOption.ROCK) {
        winnerParagraph.textContent = 'Computer chose Rock. Draw.';
        draws++;
    }
    else if (computerChoice == ComputerOption.PAPER) {
        winnerParagraph.textContent = 'Computer chose Paper. You lose.';
        computerWins++;
    }
    else if (computerChoice == ComputerOption.SCISSORS) {
        winnerParagraph.textContent = 'Computer chose Scissors. You win.';
        playerWins++;
    }
    winsParagraph.textContent = "Computer won ".concat(computerWins, " times. You won ").concat(playerWins, " times. ").concat(draws, " draws");
});
paper.addEventListener('click', function () {
    var computerChoice = getComputerChoice(ComputerOption);
    if (computerChoice == ComputerOption.ROCK) {
        winnerParagraph.textContent = 'Computer chose Rock. You win.';
        playerWins++;
    }
    else if (computerChoice == ComputerOption.PAPER) {
        winnerParagraph.textContent = 'Computer chose Paper. Draw.';
        draws++;
    }
    else if (computerChoice == ComputerOption.SCISSORS) {
        winnerParagraph.textContent = 'Computer chose Scissors. You lose.';
        computerWins++;
    }
    winsParagraph.textContent = "Computer won ".concat(computerWins, " times. You won ").concat(playerWins, " times. ").concat(draws, " draws");
});
scissors.addEventListener('click', function () {
    var computerChoice = getComputerChoice(ComputerOption);
    if (computerChoice == ComputerOption.ROCK) {
        winnerParagraph.textContent = 'Computer chose Rock. You lose.';
        computerWins++;
    }
    else if (computerChoice == ComputerOption.PAPER) {
        winnerParagraph.textContent = 'Computer chose Paper. You win.';
        playerWins++;
    }
    else if (computerChoice == ComputerOption.SCISSORS) {
        winnerParagraph.textContent = 'Computer chose Scissors. Draw.';
        draws++;
    }
    winsParagraph.textContent = "Computer won ".concat(computerWins, " times. You won ").concat(playerWins, " times. ").concat(draws, " draws");
});
