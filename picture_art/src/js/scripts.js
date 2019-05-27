require('nodelist-foreach-polyfill');
require('formdata-polyfill');
window.addEventListener('DOMContentLoaded', () => {
	'use strict';

	let modal = require('./parts/modal.js'),
		gift = require('./parts/gift.js'),
		hoverPicture = require('./parts/hoverPicture.js'),
		burgerMenu = require('./parts/burgerMenu.js'),
		more = require('./parts/more.js'),
		accordion = require('./parts/accordion.js');

	modal();
	gift();
	hoverPicture();
	burgerMenu();
	more();
	accordion();
}); // -> end scripts