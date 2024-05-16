const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const result = document.getElementById('result')
const myScore = document.getElementById('my-score');
const alexaScore = document.getElementById('alexa-score');

let myPontuation = 0;
let alexaPontuation = 0;


const humanChoices = (myChoice) => {
    
    theGame(myChoice, machineGame())
}

const machineGame = () => {
    const numeroAleatorio = Math.floor(Math.random() * 3);
    const choices = ['rock', 'paper', 'scissors']

    return choices[numeroAleatorio];
}

const theGame = (human, machine) => {

    if (human === machine) {
        result.innerHTML = 'O jogo empatou. 😯'
    } else if (human === 'rock' && machine === 'paper' || 
        human === 'paper' && machine === 'scissors' || 
        human === 'scissors' && machine === 'rock') {
        result.innerHTML = 'Você Perdeu! 😟'
        piscarBackgroud('red')
        alexaPontuation++
        alexaScore.innerHTML = alexaPontuation;
    } else{
        result.innerHTML = 'Você Ganhou! 😁'
        myPontuation++
        myScore.innerHTML = myPontuation;
        piscarBackgroud('green')
    }
}


const piscarBackgroud = (color) => {
    const container = document.querySelector('.container')
    let colorOriginal = container.style.backgroundColor;
    container.style.background = color;

   setTimeout(() => {
        container.style.backgroundColor = colorOriginal;
    }, 500)
}






