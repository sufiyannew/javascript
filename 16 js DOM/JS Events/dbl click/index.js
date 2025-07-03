let btn = document.querySelector('button');

function sayClick(){
    console.log("say button was Double clicked")
}

btn.addEventListener('dblclick', sayClick);
