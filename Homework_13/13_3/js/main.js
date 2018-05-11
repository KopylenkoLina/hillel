(function () {
const clock = document.getElementById("clock");
const color = document.getElementById("color");

function clockTime () {
  var time = new Date();
  var hours = time.getHours().toString();
  var minutes = time.getMinutes().toString();
  var seconds = time.getSeconds().toString();

  if (hours.length < 2) {
    hours = "0" + hours;
  }
  if (minutes.length < 2) {
    minutes = "0" + minutes;
  }
  if (seconds.length < 2) {
    seconds = "0" + seconds;
  }

  var clockString = `${hours} : ${minutes} : ${seconds}`;
  var colorString = `#${hours}${minutes}${seconds}`;

  clock.textContent = clockString;
  color.textContent = colorString;

  document.body.style.background = colorString;
}

setInterval(clockTime, 1000);
})();
