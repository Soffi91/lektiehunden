const html = document.querySelector("html");
const btn = document.querySelector("#toggle");

function toggleTheme() {
  html.classList.toggle("dark");
}

btn.addEventListener("click", toggleTheme);

const toggle = document.getElementById("toggle");

toggle.addEventListener("change", () => {
  if (toggle.checked) {
    console.log("Switch ON");
  } else {
    console.log("Switch OFF");
  }
});
