// The textContent property sets or returns the text content of the specified element. It replaces all text inside the element, including hidden elements, but does not parse HTML tags. It is mainly used to change visible display text quickly. 
let head = document.querySelector("h1");
head.textContent = "JS DOM";

// The innerText property sets or gets the text content of an element, similar to textContent, but it respects the element’s CSS styles (like display: none) and will not return hidden text. It also triggers reflow and is slightly slower than textContent 
let para = document.querySelector("p");
para.innerText = "This text write by js.";

// This line selects a <span> element and updates its visible text using innerText. It is useful for dynamically changing status messages or inline text on the page through JavaScript.
let span = document.querySelector("span");
para.innerText = "This text write by js.";



