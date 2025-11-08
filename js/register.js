const form = document.querySelector("form");

function cancelPopup(event) {
  event.preventDefault();
  form.querySelector(":user-invalid").focus();
}

form.addEventListener("invalid", cancelPopup, true);

const navnOutput = document.querySelector("#navn_output");
const alderOutput = document.querySelector("#alder_output");
const genderOutput = document.querySelector("#gender_output");
const aOutput = document.querySelector("#besked_output");

function cancelPopup(event) {
  event.preventDefault();
  form.querySelector(":user-invalid").focus();
}

function handleSubmit(event) {
  event.preventDefault();

  // 1. Saml værdierne fra formularen

  const formData = new FormData(form);
  const navn = formData.get("navn");
  const alder = formData.get("alder");
  const gender = formData.get("gender");
  const besked = formData.get("besked");
  // 2. Vis værdierne i de rigtige output-felter

  navnOutput.textContent = navn;
  alderOutput.textContent = alder;
  genderOutput.textContent = gender;
  aOutput.textContent = besked;

  form.reset();
}

form.addEventListener("invalid", cancelPopup, true);
form.addEventListener("submit", handleSubmit);
