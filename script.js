let time = 60;
const display = document.getElementById("counter");

setInterval(() => {
  time--;
  if (time <= 0) time = 60;
  display.textContent = time;
}, 1000);
