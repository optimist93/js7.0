'use strict';

let btn = document.querySelector('.btn'),
	car = document.querySelector('.car');

 function driving() {
	 let pos = 0;
	 requestAnimationFrame(function frame() {
		 if(pos == 1000) {
				cancelAnimationFrame(frame);
		 } else {
			pos += 4;
			car.style.left = pos + 'px';
			requestAnimationFrame(frame);
		 }

	 });
}

	btn.addEventListener('click', driving);