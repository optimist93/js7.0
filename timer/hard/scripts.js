'use strict';

let btn = document.querySelector('.btn'),
	car = document.querySelector('.car');

 function driving() {
	 let pos = 0;
	requestAnimationFrame(driving);
	//let id = setInterval(frame, 1);
		if(pos == 1000) {
			cancelAnimationFrame(requestAnimationFrame(driving));
		} else {
			pos++;
			car.style.left = pos + 'px';
		}
}
	// setInterval(function() {
	// 	requestAnimationFrame(driving);
	// 	let pos = 0;
	// 		if(pos == 1000) {
	// 			clearInterval(driving);
	// 		} else {
	// 			pos++;
	// 			car.style.left = pos + 'px';
	// 		}
	// }, 100);

	// function driving() {
	// 	requestAnimationFrame(driving);
	// 	let pos = 0;
	// 		id = setInterval(frame, 15);
	// 	function frame(){
	// 		if(pos == 1000) {
	// 			clearInterval();
	// 		} else {
	// 			pos++;
	// 			car.style.left = pos + 'px';
	// 		}
	// 	}
	// }

	btn.addEventListener('click', driving);