let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let user_name = this.elements[0]
  let password = this.elements[1]

//   let user_name = document.querySelector("#user");
//   let password = document.querySelector("#password");

  console.log(user_name.value);
  console.log(password.value)
  alert(`hi ${user_name.value} your password is set to ${password.value}`)
});
