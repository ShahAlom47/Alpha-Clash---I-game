// play button action 

function playBtn(){
hideElementByID('homeScn')
showElementByID('gameScn')
containuGame()
}


// game start 

function containuGame(){
let alfaIs = randomAlfa()
document.getElementById('alfaDisplay').innerText=alfaIs;
document.cre


}

// make random alfa use this function 
function randomAlfa(){
  
        // make alfa array 
    let alfa= "abcdefghijklmnopqrstuvwxyz"
    let alfaArr = alfa.split('')
  
// make random number 
    let randomNumber = Math.random();
    let under25 =  randomNumber*25;
    let roundRendomNum= Math.round(under25);

    let randomAlfa = alfaArr[roundRendomNum];


    return randomAlfa;
    }
    
 




// utilety fuction for show and hoide 

function hideElementByID(elementId){
let xx=document.getElementById(elementId);
xx.classList.add('hidden');
}
function showElementByID(elementId){
    let xx=document.getElementById(elementId);
    xx.classList.remove('hidden');

}