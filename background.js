let intervalId; // Variable pour stocker l'identifiant de l'interval
let count; // Variable pour stocker le temps restant
let isPaused = false; // Variable pour stocker l'état de la pause

// Récupère la durée sélectionnée dans le formulaire HTML
const durationSelect = document.getElementById("duration");

// Récupère les boutons de démarrage, de pause/reprendre et de réinitialisation
const startButton = document.getElementById("start");
const pauseResumeButton = document.getElementById("pause-resume");
const resetButton = document.getElementById("reset");

// Update le timer toutes les secondes
function updateTimer() {
  count--;
  localStorage.setItem("count", count);
  let minutes = Math.floor(count / 60);
  let seconds = count % 60;
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;
  document.getElementById("timer").innerHTML = `${minutes}:${seconds}`;
  if (count === 0) {
    clearInterval(intervalId);
  }
}

// Ajoute les écouteurs d'événement pour les boutons
startButton.addEventListener("click", () => {
  if (!intervalId) {
    count = parseInt(durationSelect.value);
    intervalId = setInterval(updateTimer, 1000);
    localStorage.setItem("isPaused", false);
    localStorage.setItem("isReset", false);
  }
});

pauseResumeButton.addEventListener("click", () => {
  if (!isPaused) {
    clearInterval(intervalId);
    isPaused = true;
    localStorage.setItem("isPaused", true);
    pauseResumeButton.textContent = "Reprendre";
  } else {
    intervalId = setInterval(updateTimer, 1000);
    isPaused = false;
    localStorage.setItem("isPaused", false);
    pauseResumeButton.textContent = "Pause";
  }
});

resetButton.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
  localStorage.removeItem("count");
  localStorage.setItem("isReset", true);
  document.getElementById("timer").innerHTML = "00:00";
  startButton.textContent = "Start";
  pauseResumeButton.textContent = "Pause";
});

// Récupère la valeur de count, d'état de pause et de réinitialisation enregistrée dans le localStorage
// et démarre le timer si nécessaire
let savedCount = localStorage.getItem("count");
let savedIsPaused = localStorage.getItem("isPaused");
let savedIsReset = localStorage.getItem("isReset");

if (savedCount && !savedIsReset) {
  count = parseInt(savedCount);
  isPaused = savedIsPaused === "true";
  if (!isPaused) {
    intervalId = setInterval(updateTimer, 1000);
    pauseResumeButton.textContent = "Pause";
  } else {
    pauseResumeButton.textContent = "Reprendre";
  }
}

// écouter l'évenement de fermeture de l'onglet ou du navigateur
chrome.runtime.onSuspend.addListener(() => {
  clearInterval(intervalId);
});

// 
// POST-IT PART
// 

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
  console.log("hello !");
  if(changeInfo.status == 'complete'){
    chrome.scripting.executeScript({
      files: ['post-it.js'],
      target: {tabId: tab.id}
    })
    //on rajoute un clear du storage au lancement de l'extension
    chrome.storage.local.clear(function() {
      var error = chrome.runtime.lastError;
      if (error) {
          console.error(error);
      }
  });
  }
});