const name = document.querySelector("#name");
const subject = document.querySelector("#subject");
const email = document.querySelector("#email");
const address = document.querySelector("#question");

const nameError = document.querySelector("#nameError");
const subjectError = document.querySelector("#subjectError");
const emailError = document.querySelector("#emailError");
const addressError = document.querySelector("#questionError");

const form = document.querySelector("form");

const submitted = document.querySelector(".submitted");


function validate() {
  event.preventDefault();

  if(name.value.trim().length > 0) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }

  if(subject.value.trim().length > 0) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }

  if(validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if(question.value.trim().length > 24) {
    questionError.style.display = "none";
  } else {
    questionError.style.display = "block";
  }

  if(name.value.trim().length > 0 && subject.value.trim().length > 0 && validateEmail(email.value) === true && question.value.trim().length > 24) {
    submitted.style.display = "block";
  }

}

form.addEventListener("submit", validate);

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
