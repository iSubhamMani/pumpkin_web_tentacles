const startGameBtn = document.querySelector('.start-game-btn');
const gameInfoContainer = document.querySelector('.game-info-container');
const gameContainer = document.querySelector('.game-container');
const gameDetailsContainer = document.querySelector('.game-details-container');
const gameDetailsText = document.querySelector('.game-details-text');
const scoreCardContainer = document.querySelector('.scorecard-container');
const replayBtn = document.querySelector('.replay-btn');
const playerScoreText = document.querySelector('.playerScore');
const computerScoreText = document.querySelector('.computerScore');

let playerScore = 0;
let computerScore = 0;
let roundNumber = 0;

// initialize choices
const pumpkinBomb = document.querySelector('.pumpkin-bomb-choice');
const web = document.querySelector('.web-choice');
const tentacles = document.querySelector('.tentacles-choice');


pumpkinBomb.addEventListener('click', () => {
    playRound("PUMPKIN_BOMB");
})
web.addEventListener('click', () => {
    playRound("WEB");
})
tentacles.addEventListener('click', () => {
    playRound("TENTACLES");
})

startGameBtn.addEventListener('click', () => {
    gameInfoContainer.textContent = "";
    newGame();
})

function playRound(userChoice){
    const round_result = roundResult(userChoice, getComputerChoice());
    console.log(round_result);

    if(round_result === "WIN"){
        playerScore++;
        roundNumber++;
    }
    else if(round_result === "LOSE"){
        computerScore++;
        roundNumber++;
    }
    else{
        roundNumber++;
    }

    playerScoreText.textContent = `You: ${playerScore}`;
    computerScoreText.textContent = `Computer: ${computerScore}`;

    if(roundNumber === 5){
        gameOver();
        return;
    }

    gameInfoContainer.textContent = `Round: ${roundNumber+1}`;

    console.log(roundNumber);
    
}

function generateRandomNumber(){
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    return randomNumber;
}

function mapComputerChoice(){
    const mapChoice = generateRandomNumber();

    if(mapChoice === 1){
        return "PUMPKIN_BOMB";
    }
    else if(mapChoice === 2){
        return "WEB";
    }
    else{
        return "TENTACLES";
    }
}

function getComputerChoice(){
    return mapComputerChoice();
}

function roundResult(playerChoice, computerChoice){

    if(playerChoice === computerChoice){
        return "MATCH TIE";
    }
    else if(playerChoice === "PUMPKIN_BOMB" && computerChoice === "WEB"){
        return "LOSE";
    }
    else if(playerChoice === "WEB" && computerChoice === "PUMPKIN_BOMB"){
        return "WIN";
    }
    else if(playerChoice === "PUMPKIN_BOMB" && computerChoice === "TENTACLES"){
        return "WIN";
    }
    else if(playerChoice === "TENTACLES" && computerChoice === "PUMPKIN_BOMB"){
        return "LOSE";
    }
    else if(playerChoice === "WEB" && computerChoice === "TENTACLES"){
        return "LOSE"
    }
    else if(playerChoice === "TENTACLES" && computerChoice === "WEB"){
        return "WIN";
    }
}

function newGame(){
    gameContainer.style.visibility = 'visible';
    gameDetailsContainer.style.visibility = 'visible';
    scoreCardContainer.style.visibility = 'visible';

    // initialize score and round number
    playerScore = 0;
    computerScore = 0;
    roundNumber = 0;

    // set round number
    gameInfoContainer.style.fontSize = '32px';
    gameInfoContainer.textContent = `Round: ${roundNumber+1}`;

    //set scorecard
    playerScoreText.textContent = `You: ${playerScore}`;
    computerScoreText.textContent = `Computer: ${computerScore}`;
}

function doNothing(){
    return;
}

function gameOver(){
    pumpkinBomb.style.pointerEvents = 'none';
    web.style.pointerEvents = 'none';
    tentacles.style.pointerEvents = 'none';

    console.log("Game Over");
    replayBtn.style.visibility = 'visible';
}

function refreshGame(){
    pumpkinBomb.style.pointerEvents = 'visible';
    web.style.pointerEvents = 'visible';
    tentacles.style.pointerEvents = 'visible';
    console.clear();
    replayBtn.style.visibility = 'hidden';
}

replayBtn.addEventListener('click', () => {
    refreshGame();
    newGame();
})