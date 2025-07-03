// function changeText () {
//     let fpara = document.getElementById('fpara')
//     fpara.textContent = 'Hello babbar'
// }
// let fpara = document.getElementById('fpara')
// fpara.addEventListener('click', changeText)



// const fanchor = document.getElementById('fanchor');
// fanchor.addEventListener('click', function(event) {
//     event.preventDefault(); // Default behavior ko roke.
//     fanchor.textContent = 'done'; // Text content ko 'done' kare.
// });


let paras = document.querySelectorAll('p')
function alertPara(event){
    alert('you yhave clicked on para:' +  event.target.textContent);
} 
// for (let i = 0; i<paras.length; i++){
//     let para = paras[i];
//     para.addEventListener('click', alertPara);
// }

let mydiv = document.getElementById('fdiv')

mydiv.addEventListener('click', alertPara)