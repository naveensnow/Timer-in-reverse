const startTiming = 1;
let time = startTiming * 60;

const count = document.getElementById("countdownTimer");
setInterval(updateTimer, 1000);

function updateTimer() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  // when less than 10 add 0 before number
  seconds = seconds < 10 ? "0" + seconds : seconds;
  count.innerHTML = `${minutes}:${seconds}`;
  time--;

  if (minutes <= 0 && seconds <= 00) {
    clearInterval((time = 0));
  }
}
