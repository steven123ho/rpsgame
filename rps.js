//JavaScript references
const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissor = document.querySelector('#scissor')
const buttons = document.querySelectorAll('button')
const playerImg = document.querySelector('.chosen1')
const computerImg = document.querySelector('.chosen2')
const p = document.querySelector('p')

//variables to play game
let computerSelection;
let playerSelection;
let playerScore = 0;
let computerScore = 0;
let rounds = 0;

function playRound(playerSelection, computerSelection) {

    if (playerSelection == "rock") {
        if (computerSelection == "Rock") {
            p.textContent = 'Its a tie. Rock equals Rock';
            return;
        }
        else if (computerSelection == "Paper") {
            p.textContent = 'You Lose! Paper beats Rock!';
            return ++computerScore
        }
        else if (computerSelection == "Scissors") {
            p.textContent = 'You win! Rock beats scissors!';
            return ++playerScore
        }
    }
    else if (playerSelection == "paper") {
        if (computerSelection == "Rock") {
            p.textContent = 'You win! Paper beats Rock!'
            return ++playerScore
        }
        else if (computerSelection == "Paper") {
            p.textContent = 'Its a tie! Paper equals Paper!';
            return;
        }
        else if (computerSelection == "Scissors") {
            p.textContent = 'You Lose! Scissors beats paper!';
            return ++computerScore
        }
    }
    else if (playerSelection == "scissors") {
        if (computerSelection == "Rock") {
            p.textContent = 'You Lose! Rock beats Scissors!';
            return ++computerScore
        }
        else if (computerSelection == "Paper") {
        p.textContent = 'You win! Scissors beats Paper!';
        return ++playerScore
    }
        else if (computerSelection == "Scissors") {
            p.textContent = 'It\'s a tie! Scissors equals Scissors!';
            return;
        }
    }
}

// generates random number for random computer selection
function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    let computerPic = ["./imgs/rock.jpg", "./imgs/paper.jpg", "./imgs/scissors.jpg"];
    let computerChoice = ['Rock', 'Paper', 'Scissors']
    computerImg.style = `background-image: url(${computerPic[num]})`
    return computerChoice[num]
}

// after 5 rounds the game will show a final score and reset the score and rounds to play again
function gameEnd (){
    if (rounds == 5) {
        p.textContent = `The Final Score Is ${playerScore} For Player And ${computerScore} For Computer!`
        playerScore = 0
        computerScore = 0
        rounds = 0
    }
}


rock.addEventListener('click', () => {
    playerSelection = 'rock'
    computerSelection = getComputerChoice()
    playerImg.style = 'background-image: url(./imgs/rock.jpg)'
    playRound(playerSelection, computerSelection)
    ++rounds
    gameEnd()
})

paper.addEventListener('click', () => {
    playerSelection = 'paper'
    computerSelection = getComputerChoice()
    playerImg.style = 'background-image: url(./imgs/paper.jpg)'
    playRound(playerSelection, computerSelection)
    ++rounds
    gameEnd()
})

scissor.addEventListener('click', () => {
    playerSelection = 'scissors'
    computerSelection = getComputerChoice()
    playerImg.style = 'background-image: url(./imgs/scissors.jpg)'
    playRound(playerSelection, computerSelection)
    ++rounds
    gameEnd()
})

