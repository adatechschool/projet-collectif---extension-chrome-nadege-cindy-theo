//Timer function

window.onload = () => {
  let savedCount = localStorage.getItem("count");
  let savedIsStarted = localStorage.getItem("isStarted");
  let savedIsPaused = localStorage.getItem("isPaused");
  if (savedCount) {
    count = parseInt(savedCount);
    isStarted = savedIsStarted === "true";
    isPaused = savedIsPaused === "true";
    if (isStarted && !isPaused) {
      pauseResumeButton.textContent = "Pause";
    } else if (isPaused) {
      pauseResumeButton.textContent = "Resume";
    } else if (count === 0) {
      pauseResumeButton.textContent = "Pause";
      resetButton.click();
    }
    let minutes = Math.floor(count / 60);
    let seconds = count % 60;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    document.getElementById("timer").innerHTML = `${minutes}:${seconds}`;
  }
};

//Social media blocker

window.onload = () => {
  let savedToggle = localStorage.getItem("toggle");
  if (savedToggle) {
    toggle.checked = savedToggle === "true";
  }
};