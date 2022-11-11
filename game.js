const playerPointsSpan = document.querySelector('.player-points');
const compPointsSpan = document.querySelector('.comp-points');
const optionsButtons = document.querySelectorAll('.options button');
const playerChoiceSpan = document.querySelector('.player-choice');
const compChoiceSpan = document.querySelector('.comp-choice');
const resultText = document.querySelector('.result-text');
const resetGameButton = document.querySelector('.reset-game');

let playerPoints = 0;
let compPoints= 0;
let playerChoice = '';
let compChoice ='';

function setGame(){
    playerPointsSpan.innerHTML = playerPoints;
    compPointsSpan.innerHTML = compPoints;
    resultText.innerHTML = "choose your weapon ;))";
}

function playerSelect(event){
    optionsButtons.forEach((button) => button.classList.remove('active'));
    playerChoice = event.target.dataset.option;

    event.target.classList.add('active');

    compSelect();
}
availableCompChoices = ['ROCK', 'PAPER', 'SCISSORS'];
function compSelect(){
    const randomIndex = Math.floor(Math.random() * availableCompChoices.length);
    compChoice = availableCompChoices[randomIndex];

    checkResult();
}
function checkResult(){
    let winner = '';
    if(
        (playerChoice === 'ROCK' && compChoice === 'SCISSORS') ||
        (playerChoice === 'PAPER' && compChoice === 'ROCK') ||
        (playerChoice === 'SCISSORS' && compChoice === 'PAPER')
    ){
        winner = 'You won!';
        playerPoints++;
        playerPointsSpan.innerHTML = playerPoints;

    } else if( playerChoice === compChoice){
        winner = 'Draw!';

    } else{
        winner = "You lost!";
        compPoints++;
        compPointsSpan.innerHTML = compPoints;
    }
    playerChoiceSpan.innerHTML = playerChoice;
    compChoiceSpan.innerHTML = compChoice;
    resultText.innerHTML = winner;

}
function resetGame(){
    playerPoints = 0;
    compPoints = 0;
    
    setGame();
}

window.onload = setGame();

optionsButtons.forEach((button) => button.addEventListener('click', playerSelect));
resetGameButton.addEventListener('click', resetGame);