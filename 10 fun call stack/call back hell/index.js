let h1 = document.querySelector("h1");

function changeColor(color, delay, nextColorChange) {
    setTimeout(() => {
        h1.style.color = color
        nextColorChange();
    },delay);
}

changeColor("red", 1000);
changeColor("orange", 1000);
changeColor("green", 1000);

// setTimeout(() => {
//     h1.style.color = "red"
// },1000);

// setTimeout(() => {
//     h1.style.color = "green"
// },2000);

// setTimeout(() => {
//     h1.style.color = "orange"
// },3000);