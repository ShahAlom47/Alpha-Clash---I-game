function play(){
console.log('press');
removeElementById("homeScn")
removeElementById("scoreScr")
showElementById("gameScn")

setTextElementValueById('lifeDis', 5);
setTextElementValueById('scoreDis', 0);
continueGame()

}


// game continueGame

function continueGame() {
    const alpha= getARandomAlphabet();
    const alphabet= alpha.toUpperCase();
    const currentAlphabetElement = document.getElementById('alfaDisplay');
    currentAlphabetElement.innerText= alphabet;

    setBackgroundColorById(alpha)

}
document.addEventListener('keyup', 

function Keyboard(event){

    const keyValue = event.key;
    
    if(keyValue === 'Escape'){
        gameOver();
    }

    const currentAlphabetElement = document.getElementById('alfaDisplay').innerText;
    const currenAlphaLow = currentAlphabetElement.toLowerCase(); 

    if (keyValue === currenAlphaLow) {
        console.log('you got a point!');

        const currentScore = getTextElementValueById('scoreDis');
        const updatedScore = currentScore + 1;
        setTextElementValueById('scoreDis', updatedScore);

      
        removeBackgroundColorById(currenAlphaLow);
        continueGame();
    }
   else if (keyValue !== currenAlphaLow && keyValue !== 'Enter'){

        const currentLife = getTextElementValueById('lifeDis');
        const updatedLife = currentLife - 1;
        setTextElementValueById('lifeDis', updatedLife);

        if(currentLife===0){

            gameOver();
        }
    }
}
)

function gameOver(){
    removeElementById("homeScn")
    removeElementById("gameScn")
    showElementById("scoreScr")

    const lastScore = getTextElementValueById('scoreDis');
    console.log(lastScore);
    setTextElementValueById('finalScore', lastScore);
   
    const currentAlphabet =getElementTextById('alfaDisplay');
    const alfaLower = currentAlphabet.toLowerCase();
    console.log(alfaLower + '======');
    removeBackgroundColorById(alfaLower)


}

// utility fuctions


// show and hode by id 
function showElementById(elementId){

    let element= document.getElementById(elementId);
    let elementCls = element.classList.remove('hidden');
}
function removeElementById(elementId){

    let element= document.getElementById(elementId);
    let elementCls = element.classList.add('hidden');
}
// show and hode by id 


// randomalphabets 

function getARandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    return alphabet;
}
// get element value  by id 
 function getTextElementValueById(id){

    const element = document.getElementById(id);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}


// get element text by id 

function getElementTextById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}

// set element value 

function setTextElementValueById(Id,value){
        const element = document.getElementById(Id);
        element.innerText = value;
}


// set and remove bG 
function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

