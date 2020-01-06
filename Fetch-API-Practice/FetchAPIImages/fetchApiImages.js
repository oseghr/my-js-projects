//variables to target desired element/id/class

const imgPost = document.querySelector('img');
const titlePost = document.querySelector('h3');
const fetchBtn = document.querySelector('#imgBtn');
const contImg = document.querySelector('.container');

fetchBtn.addEventListener('click', getImages);

//Using fetch and then
// function getImages() {
//     let output = '';
//     fetch('https://jsonplaceholder.typicode.com/photos')
//     .then((res)=>{return res.json()})
//     .then((data)=>{
//         data.forEach((user)=>{
//             output += 
//             `
//             <div class="card">
//                 <img src="${user.url}" alt="Images" width="100%" height="80%">
//                 <p>${user.title}</p>
//             </div>
//             `;
//         });
//         contImg.innerHTML = output;  
//     });
// }



// Using async await syntax for fetch
async function getImages() {
    let output = '';    
    let res = await fetch('https://jsonplaceholder.typicode.com/photos');
    let data = await res.json();
    data.forEach((user)=>{
        output += 
        `
        <div class="card">
            <img src="${user.url}" alt="Images" width="100%" height="80%" style="border-radius:7px 7px 0 0">
            <p>${user.title}</p>
        </div>
        `;
    });
    contImg.innerHTML = output;  
}

