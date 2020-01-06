//target the body/button elemets
const bodyBcg = document.querySelector("body");
const quoteBtn = document.querySelector('.quoteBtn');
const hex = document.querySelector('.hex');
const hexNumbers = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

const quote = document.querySelector('.quote');
const author = document.querySelector('.author');

//array objects of quotes
const quoteObj = [
    {
        quotewords: '\“Never doubt that a small group of thoughtful, committed, citizens can change the world. Indeed, it is the only thing that ever has.\”',
        quoteauthor: '― Margaret Mead'
    },
    {
        quotewords: '\“Education is the most powerful weapon which you can use to change the world.\”',
        quoteauthor: '― Nelson Mandela'
    },
    {
        quotewords: '\“The world as we have created it is a process of our thinking. It cannot be changed without changing our thinking.\”',
        quoteauthor: '― Albert Einstein'
    },
    {
        quotewords: '\“Those who cannot change their minds cannot change anything.\”',
        quoteauthor: '― George Bernard Shaw'
    },
    {
        quotewords: '\“Change will not come if we wait for some other person, or if we wait for some other time. We are the ones we\'ve been waiting for. We are the change that we seek.\”',
        quoteauthor: '― Barack Obama'
    },
    {
        quotewords: '\“Life is a series of natural and spontaneous changes. Don\'t resist them; that only creates sorrow. Let reality be reality. Let things flow naturally forward in whatever way they like.\”',
        quoteauthor: '― Lao Tzu'
    },
    {
        quotewords: '\“It\’s only after you\’ve stepped outside your comfort zone that you begin to change, grow, and transform.\”',
        quoteauthor: '― Roy T. Bennett'
    },

    {
        quotewords: '\“Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself.\”',
        quoteauthor: '― Rumi'
    }
]


quoteBtn.addEventListener('click', getHex);

function getHex() {
    hexCol = '#';

    for (let i = 0; i < 6; i++) {
        
        let random = Math.floor(Math.random()*hexNumbers.length);
        hexCol += hexNumbers[random];       
    }
    
    bodyBcg.style.backgroundColor = hexCol;

}

quoteBtn.addEventListener('click', getQuote);

function getQuote(){

    let random = Math.floor(Math.random()*quoteObj.length);

    quote.innerHTML = quoteObj[random].quotewords;
    author.innerHTML = quoteObj[random].quoteauthor;

}