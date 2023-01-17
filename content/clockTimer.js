// Countdown timer program
// Button START/STOP/PAUSE/RESET
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");

// SELECT TIMER PART AND SPLIT
const timer = document.getElementById("timer");
const splited = timer.textContent.split(":");

// STATUS OF TIMER
const statusClock = document.getElementById("status");


// FUNCTION FOR MAKE DE COUNTDOWN
function updateTimer() {
    let seconds = parseInt(timer.textContent.split(":")[2]);
    let minutes = parseInt(timer.textContent.split(":")[1]);
    let hours = parseInt(timer.textContent.split(":")[0]);

    if (seconds == 0) {
        if (minutes == 0) {
            if (hours == 0) {
                clearInterval(interval);
                return;
            }
            hours--;
            minutes = 59;
            seconds = 59;
        } else {
            minutes--;
            seconds = 59;
        }
    } else {
        seconds--;
    }
    if (seconds < 10) seconds = "0" + seconds;
    if (minutes < 10) minutes = "0" + minutes;
    if (hours < 10) hours = "0" + hours;
    
    timer.textContent = `${hours}:${minutes}:${seconds}`;
}

// FUNCTION FOR START THE TIMER
function startTimer() {
    if (startButton.textContent == "START" 
        && statusClock.textContent == "true" 
        && timer.textContent != "00:00:00") {
            interval = setInterval(updateTimer, 1000);
            statusClock.textContent = "false";
            startButton.textContent = "STOP";
    } else if (startButton.textContent == "STOP") {
        clearInterval(interval);
        statusClock.textContent = "true";
        startButton.textContent = "START";
    } else {
        console.log("Timer is already running");
    }
}

// FUNCTION FOR PAUSE THE TIMER
function pauseTimer() {
    clearInterval(interval);
}

// FUNCTION FOR RESET THE TIMER
function resetTimer() {
    console.log("Reset");
    timer.textContent = "00:00:00";
    statusClock.textContent = "true";
    startButton.textContent = "START";
}

// EVENT LISTENER FOR BUTTONS
startButton.addEventListener("click", startTimer);
resetButton.addEventListener("click", resetTimer);