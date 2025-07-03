 const div = document.getElementById("myDiv");

  div.classList.add("highlight");           // Adds "highlight"
  div.classList.remove("box");              // Removes "box"
  div.classList.toggle("active");           // Toggles "active"
  console.log(div.classList.contains("box")); // false
  div.classList.replace("highlight", "new"); // Replaces "highlight" with "new"

  function checkClass() {
  const box = document.getElementById("myBox");

  if (box.classList.contains("highlight")) {
    alert("Class 'highlight' present hai.");
  } else {
    alert("Class 'highlight' nahi hai.");
  }
}
