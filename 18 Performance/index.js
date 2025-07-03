// corrected code 1
const t1 = performance.now();

for (let i = 1; i <= 101; i++) {
    let para = document.createElement('p');
    para.textContent = 'this is para ' + i;
    document.body.appendChild(para);
}

const t2 = performance.now();
console.log('performance time ' + (t2 - t1));

// code 2
const t3 = performance.now();
let mydiv = document.createElement('div');
for (let i = 1; i <= 101; i++) {
    let para = document.createElement('p');
    para.textContent = 'this is para ' + i;
    mydiv.appendChild(para);
}

document.body.appendChild(mydiv);
const t4 = performance.now();
console.log('performance time ' + (t4 - t3));

// the best code
const t5 = performance.now();
let fragment = document.createDocumentFragment();

for (let i = 1; i <= 100; i++) { // corrected loop condition
    let para = document.createElement('p');
    para.textContent = 'this is para ' + i;
    fragment.appendChild(para);
}

document.body.appendChild(fragment);
const t6 = performance.now();
console.log('performance time ' + (t6 - t5));
