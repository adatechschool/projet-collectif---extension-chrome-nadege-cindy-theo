const start15 = document.getElementById("start15");
const start30 = document.getElementById("start30");
const start1h = document.getElementById("start1h");
const start4h = document.getElementById("start4h");

const rangeButton = document.getElementById("range");



rangeButton.addEventListener("click", () => {
    // Convert seconds to hours, minutes and seconds
    let minutes = parseInt(rangeButton.value);
    let seconds = minutes * 60;

    let hours = Math.floor(seconds / 3600);
    seconds %= 3600;
    minutes = Math.floor(seconds / 60);
    seconds %= 60;

    // Add leading zeros
    if (seconds < 10) seconds = "0" + seconds;
    if (minutes < 10) minutes = "0" + minutes;
    if (hours < 10) hours = "0" + hours;

    // Put in html
    timer.textContent = `${hours}:${minutes}:${seconds}`;
});


// LAUNCH ALL PRE TIMER

start15.addEventListener("click", () => {
  if (statusClock.textContent == "false") {
    console.log("Timer is already running");
  } else {
    timer.textContent = "00:15:00";
  }
});

start30.addEventListener("click", () => {
  if (statusClock.textContent == "false") {
    console.log("Timer is already running");
  } else {
    timer.textContent = "00:30:00";
  }
});

start1h.addEventListener("click", () => {
  if (statusClock.textContent == "false") {
    console.log("Timer is already running");
  } else {
    timer.textContent = "01:00:00";
  }
});

start4h.addEventListener("click", () => {
  if (statusClock.textContent == "false") {
    console.log("Timer is already running");
  } else {
    timer.textContent = "04:00:00";
  }
});
