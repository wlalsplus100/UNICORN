const password = document.querySelector(".passwordinput");
const passwordCheck = document.querySelector(".passwordcheckinput");
const passwordText = document.querySelector(".passwordDiff");

// password.addEventListener("input", CheckPasswordMatch);
passwordCheck.addEventListener("input", CheckPasswordMatch);

function CheckPasswordMatch() {
  if (password.value !== passwordCheck.value) {
    passwordText.style.display = "inline";
  } else {
    passwordText.style.display = "none";
  }
}
