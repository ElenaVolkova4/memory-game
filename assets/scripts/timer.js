let counterTime = 0;
let timer;

const timerScreen = document.querySelector(".timer__screen");

//формат отображения времени
const displayTimer = () => {
  const hours = Math.floor(counterTime / 3600);
  const minutes = Math.floor((counterTime % 3600) / 60);
  const seconds = Math.floor(counterTime % 60);

  const displayHours = hours < 10 ? "0" + hours : hours;
  const displayMinutes = minutes < 10 ? "0" + minutes : minutes;
  const displaySeconds = seconds < 10 ? "0" + seconds : seconds;

  timerScreen.innerHTML =
    displayHours + ":" + displayMinutes + ":" + displaySeconds;
};

//прямой отсчет
const countUp = () => {
  counterTime++;
  displayTimer();
};

const countTimer = () => {
  timer = clearInterval(timer);
  timer = setInterval(countUp, 1000);
};

// startBtn.addEventListener("click", () => {
//   timer = clearInterval(timer);
//   timer = setInterval(countUp, 1000);
//   startBtn.disabled = true;
//   backBtn.disabled = false;
// });

document.addEventListener("DOMContentLoaded", countTimer);

displayTimer(); //чтобы на таймере всегда были цифры
