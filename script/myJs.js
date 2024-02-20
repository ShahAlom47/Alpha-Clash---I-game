let isPlay = false;

let wrong = document.getElementById("wrongS")
let right = document.getElementById("rightS")

function play() {
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
    const alpha = getARandomAlphabet();
    const alphabet = alpha.toUpperCase();
    const currentAlphabetElement = document.getElementById('alfaDisplay');
    currentAlphabetElement.innerText = alphabet;

    setBackgroundColorById(alpha)

    isPlay = true;

}
document.addEventListener('keyup',

    function Keyboard(event) {
        if (isPlay == false) {

            return
        }

        const keyValue = event.key;

        if (keyValue === 'Escape') {
            gameOver();
        }

        const currentAlphabetElement = document.getElementById('alfaDisplay').innerText;
        const currenAlphaLow = currentAlphabetElement.toLowerCase();

        let disColor = document.getElementById("disColor")

        if (keyValue === currenAlphaLow) {
            console.log('you got a point!');

            const currentScore = getTextElementValueById('scoreDis');
            const updatedScore = currentScore + 1;
            setTextElementValueById('scoreDis', updatedScore);

            right.play();


            removeBackgroundColorById(currenAlphaLow);
            continueGame();
        }
        else if (keyValue !== currenAlphaLow && keyValue !== 'Enter') {

            const currentLife = getTextElementValueById('lifeDis');
            const updatedLife = currentLife - 1;
            setTextElementValueById('lifeDis', updatedLife);
            wrong.play();

            removeLifeHert()


            let colorNumber = [600, 500, 400, 300, 200, 100]
            // let colorValue=currentLifeNumber*100;

            let num = colorNumber[updatedLife]

            disColor.classList.add(`bg-red-${num}`);


            if (currentLife === 0) {

                gameOver();


            }
        }
    }
)

function gameOver() {
    removeElementById("homeScn")
    removeElementById("gameScn")
    showElementById("scoreScr")

    const lastScore = getTextElementValueById('scoreDis');
    console.log(lastScore);
    setTextElementValueById('finalScore', lastScore);

    const currentAlphabet = getElementTextById('alfaDisplay');
    const alfaLower = currentAlphabet.toLowerCase();

    removeBackgroundColorById(alfaLower)


    // reset display color 
    // let disColor = document.getElementById("disColor")
    // disColor.classList.add(`bg-red-${100}`);




    // reset display color 

    let xx = document.getElementById("disColor")
    xx.classList.remove(`bg-red-600`)
    xx.classList.remove(`bg-red-500`)
    xx.classList.remove(`bg-red-400`)
    xx.classList.remove(`bg-red-300`)
    xx.classList.remove(`bg-red-200`)
    xx.classList.remove(`bg-red-100`)


    // reset life heart 

    let nulll = document.getElementById('null');
    let life1 = document.getElementById('life1');
    let life2 = document.getElementById('life2');
    let life3 = document.getElementById('life3');
    let life4 = document.getElementById('life4');
    let life5 = document.getElementById('life5');
    nulll.classList.add('step-primary');
    life1.classList.add('step-primary');
    life2.classList.add('step-primary');
    life3.classList.add('step-primary');
    life4.classList.add('step-primary');
    life5.classList.add('step-primary');

    isPlay = false;
}

// utility fuctions


// show and hode by id 
function showElementById(elementId) {

    let element = document.getElementById(elementId);
    let elementCls = element.classList.remove('hidden');
}
function removeElementById(elementId) {

    let element = document.getElementById(elementId);
    let elementCls = element.classList.add('hidden');
}
// show and hode by id 


// randomalphabets 

function getARandomAlphabet() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    return alphabet;
}
// get element value  by id 
function getTextElementValueById(id) {

    const element = document.getElementById(id);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}


// get element text by id 

function getElementTextById(elementId) {
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}

// set element value 

function setTextElementValueById(Id, value) {
    const element = document.getElementById(Id);
    element.innerText = value;
}


// set and remove bG 
function setBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

function removeBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}





// life ubdate 
function removeLifeHert() {


    let lifeArr = ["null", 'life1', 'life2', 'life3', 'life4', 'life5']


    const currentLife = document.getElementById('lifeDis');
    let currentLifeText = currentLife.innerText;
    let currentLifeNumber = parseInt(currentLifeText);

    let lifeLegnth = lifeArr[currentLifeNumber + 1];

    let life = document.getElementById(lifeLegnth);
    console.log(currentLifeNumber);

    if (currentLifeNumber >= 0) {


        life.classList.remove('step-primary');


        // life.removeAttribute('checked', false);





        return;
    }




}


// function volumeControl(){}
let volumeBtn = document.getElementById("volume")
let range = document.getElementById("vRange")
let offIcon = document.getElementById('vOff')
let onIcon = document.getElementById('vOn')


volumeBtn.addEventListener('click', function () {



    if (wrong.muted) {
        offIcon.classList.remove('hidden')
        onIcon.classList.add("hidden")
        
      range.classList.remove('hidden');

        wrong.muted = false;
        right.muted = false;

        return
    }
    else {
        offIcon.classList.add('hidden')
        onIcon.classList.remove("hidden")

       
        range.classList.add('hidden');

        wrong.muted = true;
        right.muted = true;

        return
    }

})


// volume range control 



range.addEventListener('input', function () {
    let xx = range.value;

    wrong.volume = xx;
    right.volume = xx;

    if (xx == 0) {

       

        wrong.muted = true;
        right.muted = true;
        range.classList.add('hidden');
        offIcon.classList.add('hidden')
        onIcon.classList.remove("hidden")

    }
    // else
    // {
    //     offIcon.classList.remove('hidden')
    //     onIcon.classList.add("hidden")

    //     wrong.muted = false;
    //     right.muted = false;

    // }


})


