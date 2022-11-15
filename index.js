const email = document.getElementById("email");
const form = document.getElementById("form");
const errorElement = document.querySelector(".valid");
const errorIcon = document.querySelector(".error-icon");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let str = email.value;
  let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.(a-zA-Z){2,7}$/;
  if (str === "" || !regex.test(str)) {
    errorElement.textContent = "please provide a valid email";
    errorIcon.classList.add("show-error-icon");
    errorIcon.classList.remove("error-icon");
    email.style.border = "2px solid hsl(0, 93%, 68%)";
  } else {
    errorElement.textContent = "";
    errorIcon.classList.remove("show-error-icon");
  }
});
