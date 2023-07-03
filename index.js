const startGameBtn = document.querySelector('.start-game-btn');
const gameInfoContainer = document.querySelector('.game-info-container');
const gameContainer = document.querySelector('.game-container');
const gameDetailsContainer = document.querySelector('.game-details-container');
const scoreCardContainer = document.querySelector('.scorecard-container');
const replayBtn = document.querySelector('.replay-btn');

let playerScore = 0;
let computerScore = 0;
let roundNumber = 0;

// initialize choices
const pumpkinBomb = document.querySelector('.pumpkin-bomb-choice');
const web = document.querySelector('.web-choice');
const tentacles = document.querySelector('.tentacles-choice');

startGameBtn.addEventListener('click', () => {
    gameInfoContainer.textContent = "";
    playGame();
})

pumpkinBomb.addEventListener('click', () => {
    const round_result = roundResult("PUMPKIN_BOMB", getComputerChoice());
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

    console.log(roundNumber);
    if(roundNumber === 5){
        console.log("Game Over");
        replayBtn.style.visibility = 'visible';
    }
});

web.addEventListener('click', () => {
    const round_result = roundResult("WEB", getComputerChoice());
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

    console.log(roundNumber);
    if(roundNumber === 5){
        console.log("Game Over");
        // replay btn
        replayBtn.style.visibility = 'visible';
    }
})

tentacles.addEventListener('click', () => {
    const round_result = roundResult("TENTACLES", getComputerChoice());
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

    console.log(roundNumber);
    if(roundNumber === 5){
        console.log("Game Over");
        replayBtn.style.visibility = 'visible';
    }
})

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

function playGame(){
    gameContainer.style.visibility = 'visible';
    gameDetailsContainer.style.visibility = 'visible';
    scoreCardContainer.style.visibility = 'visible';

    // initialize score and round number
    playerScore = 0;
    computerScore = 0;
    roundNumber = 0;

    // On click events
    
}

function gameOver(){
    pumpkinBomb.removeEventListener();
    
}

replayBtn.addEventListener('click', () => {
    replayBtn.style.visibility = 'hidden';
    console.clear();
    playGame();
})