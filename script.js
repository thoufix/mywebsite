let score = 0;
let timeLeft = 10;
const clickButton = document.getElementById("clickButton");
const timerElement = document.getElementById("timer");
const scoreElement = document.getElementById("score");

clickButton.addEventListener("click", () => {
  if (timeLeft > 0) {
    score++;
    scoreElement.textContent = "Score: " + score;
  }
});

const countdown = setInterval(() => {
  if (timeLeft > 0) {
    timeLeft--;
    timerElement.textContent = "Time left: " + timeLeft + " seconds";
  } else {
    clearInterval(countdown);
    clickButton.disabled = true;
    timerElement.textContent = "Time's up! Final score: " + score;
  }
}, 1000);
