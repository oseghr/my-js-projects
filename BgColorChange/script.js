const colorBtn = document.querySelector("button");
const bodyId = document.querySelector("body");

const colors = ['yellow', 'blue', 'red', 'green', 'pink', 'orange', 'purple', 'lightblue', 'gray', 'navy', 'brown', 'magenta', 'cyan'];
const maxi = colors.length;

colorBtn.addEventListener("click", changeColor);

function changeColor() {
    const axil = Math.floor(Math.random() * Math.floor(maxi));
    bodyId.style.backgroundColor = colors[axil];
}

