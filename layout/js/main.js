(function () {

	const footer = document.getElementById('timer');


	class Timer {
		constructor() {
			this.time = 0;
			this.start();
		}

		tick() {
			this.time++;
			var hours = Math.floor(this.time/3600);
			var min = Math.floor((this.time % 3600)/60);
			var sec = this.time % 3600 % 60;

			if (hours < 10) {
		    hours = "0" + hours;
		  }
		  if (min < 10) {
		    min = "0" + min;
		  }
		  if (sec < 10) {
		    sec = "0" + sec;
		  }
			footer.innerText = `${hours}:${min}:${sec}`;
		}

		start() {
			this.ticking = setInterval(() => { this.tick(); }, 1000);
		}

		stop() {
			clearInterval(this.ticking);
		}

		restart() {
			this.time = 0;
		}

	}

	const timer = new Timer();

	document.addEventListener('keydown', e => {
		if (e.keyCode === 27) {
			timer.restart();
		}
	});

	footer.addEventListener('mouseover', e => {
		timer.stop();
	});

	footer.addEventListener('mouseleave', e => {
		timer.start();
	});


})();


