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

saveDb("ansari salmna") // this is method like call back hell mean nested call back 
  .then((result) => {
    console.log("promise 1 resolved:", result);
    saveDb("ansari salmna")
      .then(() => {
        console.log("promise 2 resolved:");
        saveDb("ansari salmna")
          .then(() => {
            console.log("promise 3 resolved:");
            saveDb("ansari salmna")
              .then(() => {
                console.log("promise 4 resolved:");
              })
              .catch(() => {
                console.log("promise rejected:");
              });
          })
          .catch(() => {
            console.log("promise rejected:");
          });
      })
      .catch(() => {
        console.log("promise rejected:");
      });
  })
  .catch((error) => {
    console.log("promise rejected:", error);
  });
