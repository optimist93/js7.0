window.addEventListener('DOMContentLoaded', function() {
'use strict';

class Options {
	constructor(height, width, bg) {
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = 25;
		this.textAlign = 'center';
	}
	createDiv() {
		let div = document.createElement('DIV');
		div.style.cssText = "font-size: 42px; \
			color: green; \
		";
		div.textContent = 'тут может быть какой-то текст';
		
		console.log(div);
		document.body.appendChild(div);
		return a;
	}

}
const square = new Options(100, 200, '#ccc');

document.write(square.createDiv());
console.log(square);



}); // -> end scripts