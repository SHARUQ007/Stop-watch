const startStopBtn = document.getElementById("start-stop-btn");
const resetBtn = document.getElementById("reset-btn");
const timerDisplay = document.getElementById("timer");
const lapsContainer = document.getElementById("laps");

let timerRunning = false;
let timer = null;
let elapsedTime = 0;

startStopBtn.addEventListener("click", function() {
  if (!timerRunning) {
    startStopBtn.textContent = "Stop";
    timerRunning = true;
    timer = setInterval(updateTimer, 10);
  } else {
    startStopBtn.textContent = "Start";
    timerRunning = false;
    clearInterval(timer);
    addLap();
  }
});

resetBtn.addEventListener("click", function() {
  timerRunning = false;
  elapsedTime = 0;
  timerDisplay.textContent = "00:00:00";
  startStopBtn.textContent = "Start";
  clearInterval(timer);
  lapsContainer.innerHTML = "";
});

function updateTimer() {
  elapsedTime += 1;
  timerDisplay.textContent = formatTime(elapsedTime);
}

function addLap() {
  let lap = document.createElement("li");
  lap.textContent = timerDisplay.textContent;
  lapsContainer.appendChild(lap);
}

function formatTime(time) {
  let milliseconds = time % 100;
  let seconds = Math.floor(time / 100) % 60;
  let minutes = Math.floor(time / 6000);

  minutes = minutes.toString().padStart(2, "0");
  seconds = seconds.toString().padStart(2, "0");
  milliseconds = milliseconds.toString().padStart(2, "0");

  return `${minutes}:${seconds}:${milliseconds}`;
}