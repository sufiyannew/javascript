function getNum() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 10) + 1;
      console.log(num);
      resolve();
    }, 1000);
  });
}

async function demo() {
  await getNum();
  await getNum();
  await getNum();
}

// demo()

h1 = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 5) + 1;
      if (num > 3)
        reject("promise rejected")
    });
    setTimeout(() => {
      h1.style.color = color;
        console.log(`color change to ${color}!`);
      resolve("color changed");
    }, delay);
  });
}

async function demo2() {
  await changeColor("red", 1000);
  await changeColor("blue", 1000);
  await changeColor("green", 1000);
  await changeColor("yellow", 1000);
  await changeColor("gray", 1000);

  let num = 5;
  console.log(num, num+3)
}

demo2();


