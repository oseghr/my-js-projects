
// variable to target the div with id=root
const app = document.querySelector('#root');

document.addEventListener('click', getMovies);

function getMovies() {
    let output ='';                
    console.log("Hello Test");          

    fetch('https://ghibliapi.herokuapp.com/films')
    .then((res)=>{return res.json()})
    .then((data)=>{
        data.forEach((movie) => {
            movie.description = movie.description.substring(0, 300);
            output += `
            <div class="container">
                <div class='card'>
                    <h1>${movie.title}</h1>
                    <p>${movie.description}...</p>
                </div>
            </div>
            `;
            app.innerHTML = output; 
        });

    });
}




    //DOM Manipulation

    // const app = document.getElementById('root');

    // const logo = document.createElement('img');
    // logo.src = 'logo.png';

    // const container = document.createElement('div');
    // container.setAttribute('class', 'container');

    // app.appendChild(logo);
    // app.appendChild(container);

    // var request = new XMLHttpRequest();
    // request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
    // request.onload = function () {

    //     // Begin accessing JSON data here
    //     var data = JSON.parse(this.response);
    //     if (request.status >= 200 && request.status < 400) {
    //         data.forEach(movie => {
    //             const card = document.createElement('div');
    //             card.setAttribute('class', 'card');

    //             const h1 = document.createElement('h1');
    //             h1.textContent = movie.title;

    //             const p = document.createElement('p');
    //             movie.description = movie.description.substring(0, 300);
    //             p.textContent = `${movie.description}...`;

    //             container.appendChild(card);
    //             card.appendChild(h1);
    //             card.appendChild(p);
    //         });
    //     } else {
    //         const errorMessage = document.createElement('marquee');
    //         errorMessage.textContent = `Gah, it's not working!`;
    //         app.appendChild(errorMessage);
    //     }
    // }

    // request.send();
