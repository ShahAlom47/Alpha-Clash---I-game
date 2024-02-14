// play button action 

function playBtn() {
    hideElementByID('homeScn')
    showElementByID('gameScn')


    document.addEventListener('keyup', function (event) { 
        if (event.key === 'Enter'){
            containuGame()
        }
        else{
            document.getElementById('alfaDisplay').innerText='Enter Enter Key For Start Game'
        }
    })
   

}


document.addEventListener('keyup', function (event) {

    hideElementByID('homeScn')
    showElementByID('gameScn')
 
    containuGame()
})


// game start 

function containuGame() {
    let alfaIs = randomAlfa()
    let xx = document.getElementById('alfaDisplay').innerText = alfaIs;
    setKeyBg(alfaIs);
    //  console.log('fff')+ xx;
}

let score = 0;
let life =10;
document.addEventListener('keyup', function (event) {

    let keyValue = event.key;

    let Alfa = document.getElementById('alfaDisplay')
    Alfa.style.fontSize = '70px';
    let currentAlfa = Alfa.innerText;
    let acceptedAlfaCase = currentAlfa.toLowerCase();

    if (keyValue === acceptedAlfaCase) {

        score++;
        let scoreDisplay = callElementByid('scoreDis').innerText = score;


        removeKeyBg(acceptedAlfaCase)
        containuGame()

    }
    else {
        life--;
        let scoreDisplay = callElementByid('lifeDis').innerText = life;
      
    }


});




// make random alfa use this function 
function randomAlfa() {

    // make alfa array 
    let alfa = "abcdefghijklmnopqrstuvwxyz"
    let alfaArr = alfa.split('')

    // make random number 
    let randomNumber = Math.random();
    let under25 = randomNumber * 25;
    let roundRendomNum = Math.round(under25);

    let randomAlfa = alfaArr[roundRendomNum];


    return randomAlfa;
}
console.log(randomAlfa());


//  set key BG

function setKeyBg(keyId) {

    let key = document.getElementById(keyId)
    key.classList.add('bg-orange-500')
}
// remove key bg 
function removeKeyBg(keyId) {

    let key = document.getElementById(keyId)
    return key.classList.remove('bg-orange-500')
}




// utilety fuction for show and hoide 

function hideElementByID(elementId) {
    let xx = document.getElementById(elementId);
    xx.classList.add('hidden');
}
function showElementByID(elementId) {
    let xx = document.getElementById(elementId);
    xx.classList.remove('hidden');

}

function callElementByid(eId) {

    return document.getElementById(eId);
}
