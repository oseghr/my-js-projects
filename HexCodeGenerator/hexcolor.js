//target element/id/class
const bodyBcg = document.querySelector("body");
const hexBtn = document.querySelector('.hexBtn');
const hex = document.querySelector('.hex');
const hexNumbers = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

//add event listeners
hexBtn.addEventListener('click', getHex);

function getHex() {
    hexCol = '#';

    for (let i = 0; i < 6; i++) {
        
        let random = Math.floor(Math.random()*hexNumbers.length);
        

        hexCol += hexNumbers[random];
        
    }
    console.log(hexCol);
    bodyBcg.style.backgroundColor = hexCol;
    hex.innerHTML = hexCol;

}

