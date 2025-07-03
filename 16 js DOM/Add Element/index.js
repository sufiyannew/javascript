// the process of create and add element in a body mean web page
let newPara = document.createElement('p');
newPara.innerText = "this para created by js."

document.body.appendChild(newPara)

// create newpara2 element
let newPara2 = document.createElement('p');
newPara2.innerText = "This para created by JS.";

// select body and h1
let h1 = document.querySelector('h1');

// new element newPara2 add after h1 
h1.after(newPara2);



// add new btn in para tag
let btn = document.createElement("button")
btn.innerHTML = "<button>click me!</button><br>"

// fetch para
let para = document.querySelector('p')

// add btn in para but before this para      
para.prepend(btn)

// add new text in para 
para.append('this is write using append method ')


//indesrtAdjesent
// A string representing the position relative to the element. Must be one of the following strings:

// "beforebegin"
// Before the element. Only valid if the element is in the DOM tree and has a parent element.

// "afterbegin"
// Just inside the element, before its first child.

// "beforeend"
// Just inside the element, after its last child.

// "afterend"
// After the element. Only valid if the element is in the DOM tree and has a parent element.



//remove child
//fetch element 
let secondPara = document.querySelector('.info');
secondPara.remove()



