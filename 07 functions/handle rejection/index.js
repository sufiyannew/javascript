 let h1 = document.querySelector("h1");

  function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let num = Math.floor(Math.random() * 5) + 1;
        console.log(`Random num: ${num}`);

        if (num > 3) {
          h1.style.color = color;
          console.log(`Color changed to ${color}!`);
          resolve("color changed");
        } else {
          reject("promise rejected");
        }
      }, delay);
    });
  }

  async function demo2() {
    try {
      await changeColor("red", 1000);
      await changeColor("blue", 1000);
      await changeColor("green", 1000);
      await changeColor("yellow", 1000);
      await changeColor("gray", 1000);
    } catch (err) {
      console.log("Error caught:", err);
    }

    // This will run no matter what
    let num = 5;
    console.log(num, num + 3);
  }

  demo2();