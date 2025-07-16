function saveDb(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      resolve("data was saved");
    } else {
      reject("weak connection");
    }
  });
}

let request = saveDb("ansari salmna");

request
  .then(() => {
    console.log("promise resolved:");
  })
  .catch(() => {
    console.log("promise rejected:");
  });
