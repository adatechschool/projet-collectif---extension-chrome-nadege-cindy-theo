let intervalId; // Variable pour stocker l'identifiant de l'interval
let count; // Variable pour stocker le temps restant
let isStarted = false; // Variable pour stocker l'état de démarrage
let isPaused = false; // Variable pour stocker l'état de pause

// Récupère la durée sélectionnée dans le formulaire HTML
const durationSelect = document.getElementById("duration");

// Récupère les boutons de démarrage, de pause/reprendre, de réinitialisation et de pause/reprendre
const startButton = document.getElementById("start");
const resetButton = document.getElementById("reset");
const pauseResumeButton = document.getElementById("pause-resume");

// Update le timer toutes les secondes
function updateTimer() {
  count--;
  let minutes = Math.floor(count / 60);
  let seconds = count % 60;
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;
  document.getElementById("timer").innerHTML = `${minutes}:${seconds}`;
  if (count === 0) {
    clearInterval(intervalId);
    isStarted = false;
    localStorage.setItem("isStarted", false);
    pauseResumeButton.textContent = "Pause";
  }
  localStorage.setItem("count", count);
}

// Ajoute les écouteurs d'événement pour les boutons
startButton.addEventListener("click", () => {
  if (!isStarted) {
    count = parseInt(durationSelect.value);
    intervalId = setInterval(updateTimer, 1000);
    isStarted = true;
    localStorage.setItem("isStarted", true);
  } else {
    clearInterval(intervalId);
    isStarted = false;
    localStorage.setItem("isStarted", false);
  }
});

resetButton.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
  localStorage.removeItem("count");
  document.getElementById("timer").innerHTML = "00:00";
  pauseResumeButton.textContent = "Pause";
  isStarted = false;
  localStorage.setItem("isStarted", false);
  localStorage.setItem("isPaused", false);
});

pauseResumeButton.addEventListener("click", () => {
  if (isStarted && !isPaused) {
    clearInterval(intervalId);
    isPaused = true;
    pauseResumeButton.textContent = "Resume";
    localStorage.setItem("isPaused", true);
  } else if (isStarted && isPaused) {
    intervalId = setInterval(updateTimer, 1000);
    isPaused = false;
    pauseResumeButton.textContent = "Pause";
    localStorage.setItem("isPaused", false);
  }
});

// Ajoute les écouteurs d'événement pour les boutons
durationSelect.addEventListener("change", () => {
  count = parseInt(durationSelect.value);
  minutes = Math.floor(count / 60);
  seconds = count % 60;
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;
  document.getElementById("timer").innerHTML = `${minutes}:${seconds}`;
});

// Récupère la valeur de count, d'état de pause et de réinitialisation enregistrée dans le localStorage
// et démarre le timer si nécessaire
let savedCount = localStorage.getItem("count");
let savedIsStarted = localStorage.getItem("isStarted");
let savedIsPaused = localStorage.getItem("isPaused");

if (savedCount) {
  count = parseInt(savedCount);
  isStarted = savedIsStarted === "true";
  isPaused = savedIsPaused === "true";
  if (isStarted && !isPaused) {
    intervalId = setInterval(updateTimer, 1000);
    pauseResumeButton.textContent = "Pause";
  } else if (isStarted && isPaused) {
    pauseResumeButton.textContent = "Resume";
  }
}

// Enregistre l'état de pause dans le localStorage lorsque la fenêtre est fermée
window.addEventListener("beforeunload", () => {
  localStorage.setItem("isPaused", isPaused);
});
