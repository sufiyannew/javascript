let para = document.querySelector('.intro');
para.parentElement // body
para.children // empty

// how to check siblings privious or next 
para.previousElementSibling;
console.log(para.previousElementSibling)

console.log(para.nextElementSibling)

// add styling using siblings

para.previousElementSibling.style.color = 'red'
