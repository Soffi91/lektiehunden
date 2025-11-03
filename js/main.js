document
  .querySelector("#Hunden")
  .addEventListener("click", updateInfoboxHunden);

document
  .querySelector("#Lektier")
  .addEventListener("click", updateInfoboxLektier);

document.querySelector("#Dreng").addEventListener("click", updateInfoboxDreng);

function updateInfoboxHunden() {
  console.log("updateInfoboxHunden");

  document.querySelector(".info-text .placeholder").textContent =
    "Du har valgt hunden!";
  document.querySelector("#efficiency").textContent =
    "Et forståeligt valg! - For den har jo faktisk spist dine lektier, og hvorfor lyve når det er sandheden? Men, hjælper det dig med at få lektierne igen?";
  document.querySelector("#requirement").textContent =
    "Effektivitet: Lav, da dine lærere nok ikke ville tage dig seriøst, og at du spilder din egen og deres tid.";
  document.querySelector("#efficiency").style.backgroundColor = "#fceb94";
  document.querySelector("#requirement").style.backgroundColor = "#ffa680";
}

function updateInfoboxLektier() {
  console.log("updateInfoboxLektier");

  document.querySelector(".info-text .placeholder").textContent =
    "Du har valgt at lave det igen!";
  document.querySelector("#efficiency").textContent =
    "Du gik med tredje løsning, som var at lave det igen. Selvom det er træls at man har brugt lang tid på at sidde og forberede sig…";
  document.querySelector("#requirement").textContent =
    "Effektivitet: Høj, da du på trods af en uheldig morgen har noget du kan afleverer/bruge i undervisningen. Det viser også du er mere seriøs omkring din skole og at du gør dit for at være aktiv. Også selv hvis du kun når i mål med noget af det. ";
  document.querySelector("#efficiency").style.backgroundColor = "#def5eb";
  document.querySelector("#requirement").style.backgroundColor = "#def5eb";
}

function updateInfoboxDreng() {
  console.log("updateInfoboxDreng");

  document.querySelector(".info-text .placeholder").textContent =
    "Du har valgt at lyve og sige at du slet ikke har lavet lektierne!";
  document.querySelector("#efficiency").textContent =
    "Hvis du overvejede hunden og tænkte den er der alligevel ikke nogen der tror på, så kan man jo lige så godt bare sige man ikke har lavet det. Dog risikerer man at tabe ansigt, og måske føle det er flovt at komme uforberedt i skole";

  document.querySelector("#requirement").textContent =
    "Effektivitet: Lav, da du virker som en der ikke tager din skole seriøst, og ikke laver dine ting.";
  document.querySelector("#efficiency").style.backgroundColor = "#ffa680";
  document.querySelector("#requirement").style.backgroundColor = "#ffa680";
}
