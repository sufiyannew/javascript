// Q: Create a <p> with red color that says "I am red"

// Select the body
let body = document.querySelector('body');

// Create a new <p> element
let newpara = document.createElement('p');

// Add text to the paragraph
newpara.textContent = "I am red";

// Make the text color red using style
newpara.style.color = "red";

// Add the new paragraph to the body
body.appendChild(newpara);

// Q: Create a <div> with black border and pink background,
// containing an <h1> and a <p>

// Create elements
let div = document.createElement('div');
let h1 = document.createElement('h1');
let p = document.createElement('p');

// Add text to them
h1.innerText = 'I am in a div';
p.innerText = 'Me too';

// Add styles to the div
div.style.border = "2px solid black";   
div.style.backgroundColor = "pink";
div.style.padding = "10px";
div.style.marginTop = "10px";

// Append h1 and p into the div
div.append(h1);
div.append(p);

// Finally, append the div into the body
body.appendChild(div);
