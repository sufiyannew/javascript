function saveDb(data, success, failure) {
  let internetSpeed = Math.floor(Math.random() * 10) + 1;
  if (internetSpeed > 4) {
    success();
  } else {
    failure();
  }
}
saveDb(
  "ansari salman",
  () => {
    console.log("success: your data was saved");
    saveDb(
      "ansari salman",
      () => {
        console.log("success2: your data2 was saved");
        saveDb(
          "ansari salman",
          () => {
            console.log("success3: your data3 was saved");
          },
          () => {
            console.log("failure3: weak connection data not saved");
          }
        );
      },
      () => {
        console.log("failure2: weak connection data not saved");
      }
    );
  },
  () => {
    console.log("failure: weak connection data not saved");
  }
);
