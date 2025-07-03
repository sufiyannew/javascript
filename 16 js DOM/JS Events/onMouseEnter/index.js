let btn = document.querySelector('button');

function HandleMouseOver(){
    alert("in Button on mouse over")
}

btn.onmouseenter = HandleMouseOver;