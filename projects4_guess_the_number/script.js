let randomNUmber=(parseInt(Math.random()*100+1));

const submit=document.querySelector('#subt');

const userInput=document.querySelector('#guessField');

const guessslot=document.querySelector('.guesses');
const remaning=document.querySelector('.lastResult');
const loworHigh=document.querySelector('.loworhi');
const startOver=document.querySelector('.resultParas');

const p=document.createElement('p')

let prevGuess=[]
let numGuess=1
let playGame=true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess=parseInt(userInput.value)
        validateGuess(guess);
    })
}

let validateGuess= (guess)=>{
    if(isNaN(guess)){
        alert('please enter a vaild number')
    }
    else if(guess<1){
        alert('please enter a number more than 1')
    }
     else if(guess>100){
        alert('please enter a number less than 100')
    }
    else{
        prevGuess.push(guess)
    }
    if(numGuess===11){
        displayGuess(guess)
        displayMessage(`Game over.Random number was ${randomNUmber}`)
        endGame()
    }

    else{
        displayGuess(guess)
        checkGuess(guess)
    }

}

let checkGuess=(guess)=>{
    if(guess==randomNUmber){
        displayMessage('you guessed it right')
        endGame()
    }

    else if(guess<randomNUmber){
        displayMessage('number is too low')
    }
    else if(guess>randomNUmber){
        displayMessage('number is too high')
    }

}

function displayGuess(guess){
    userInput.value=''
    guessslot.innerHTML+=`${guess}  `
    numGuess++;
    remaning.innerHTML=`${11-numGuess}`

}

function displayMessage(message){
   loworHigh.innerHTML=`<h2>${message}</h2>`
}

function endGame(){
userInput.value=''
userInput.setAttribute('disabled','')
p.classList.add('button')
p.innerHTML=`<button id="newgame">start a new game</button>`;
startOver.appendChild(p)
playGame=false;
newGame()

}

function newGame(){
  const newbutton=  document.querySelector('#newgame')
  newbutton.addEventListener('click',function(e){
   randomNUmber=(parseInt(Math.random()*100+1));
   prevGuess=[]
   numGuess=1
   guessslot.innerHTML=''
   remaning.innerHTML=`${11-numGuess}`;
   userInput.removeAttribute('disabled');
   startOver.removeChild(p)
   loworHigh.innerHTML=''

    playGame=true;
  })

}