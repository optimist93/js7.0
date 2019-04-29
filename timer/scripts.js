'use strict';

let step = function () {
	let time = new Date(),
		timer = document.querySelector('.timer'),
		hour = ('0' + time.getHours()).slice(-2),
		minets = ('0' + time.getMinutes()).slice(-2),
		seconds = ('0' + time.getSeconds()).slice(-2);

	timer.textContent = (hour + ' : ' + minets + ' : ' + seconds);
};

setInterval (step, 1000);