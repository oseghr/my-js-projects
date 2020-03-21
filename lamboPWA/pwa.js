const container = document.querySelector(".container");
const lambo = [
    {name: "Badge", image: "./img/lamborghini-badge.jpg"},
    {name: "Asterion", image: "./img/lamborghini_asterion.jpg"},
    {name: "Aventador", image: "./img/lamborghini_aventador.jpg"},
    {name: "Diablo", image: "./img/lamborghini_diablo.jpg"},
    {name: "Jalpa", image: "./img/lamborghini_jalpa.jpg"},
    {name: "Gallardo", image: "./img/lamborghini_gallardo.jpg"},
    {name: "Urus", image: "./img/lamborghini_urus.jpg"},
    {name: "Huracan", image: "./img/lamborghini_huracan.jpg"},
    {name: "Veneno", image: "./img/lamborghini_veneno.jpg"},
    {name: "Countach", image: "./img/lamborghini_countach.jpg"},
    {name: "Jarama", image: "./img/lamborghini_jarama.jpg"},
];
const showCars = function() {
    let output ="";
    lambo.forEach(({name , image}) => {
        output += `
            <div class="card">
            <img class="card--avatar" src=${image} />
            <h1 class="card--title">${name}</h1>
            <a class="card--link" href="#">Select</a>
            </div>
        `;
    })
    container.innerHTML = output;
}
document.addEventListener("DOMContentLoaded", showCars);
