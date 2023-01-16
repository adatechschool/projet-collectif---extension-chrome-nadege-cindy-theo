// Programm for make timer

const startButton = document.getElementById('btn');
const resetButton = document.getElementById('reset');
const statusB = document.getElementById('status');

const timer = document.getElementById('timer');

let startTime;

function countUp() {
    const date = new Date(Date.now() - startTime);

    const m = String(date.getMinutes()).padStart(2, '0');
    const s = String(date.getSeconds()).padStart(2, '0');
    const ms = String(date.getMilliseconds()).padStart(1, '0');

    timer.textContent = `${m}:${s}`;

    timeoutId = setTimeout(() => {
        countUp();
    }, 10);
}

startButton.addEventListener('click', () => {
    if (statusB.textContent === 'Stop') {
        statusB.textContent = 'Start';
        startButton.textContent = 'Start';
        clearTimeout(timeoutId);
    } else {
        if (startTime !== undefined) {
            statusB.textContent = 'Stop';
            startButton.textContent = 'Stop';
            countUp();
        } else {
            startTime = Date.now();
            statusB.textContent = 'Stop';
            startButton.textContent = 'Stop';
            countUp();
        }
    }
})

resetButton.addEventListener('click', () => {
    timer.textContent = '00:00.000';
})