const password = document.querySelector(".passwordinput");
const idDup = document.querySelector(".DuplicateID");
const passwordCheck = document.querySelector(".passwordcheckinput");
const passwordText = document.querySelector(".passwordDiff");
const idDupText = document.querySelector(".idDup");
const idInput = document.querySelector(".idinput");

idDup.addEventListener("click", () => {
  idDupText.style.display = "inline-block";
});

idInput.addEventListener("input", () => {
  idDupText.style.display = "none";
});

passwordCheck.addEventListener("input", CheckPasswordMatch);

function CheckPasswordMatch() {
  if (password.value !== passwordCheck.value) {
    passwordText.style.display = "inline-block";
  } else {
    passwordText.style.display = "none";
  }
}
