require('nodelist-foreach-polyfill');
require('formdata-polyfill');
window.addEventListener('DOMContentLoaded', () => {
	'use strict';

	let modal = require('./parts/modal.js'),
		gift = require('./parts/gift.js'),
		hoverPicture = require('./parts/hoverPicture.js'),
		burgerMenu = require('./parts/burgerMenu.js'),
		more = require('./parts/more.js'),
		accordion = require('./parts/accordion.js'),
		filter = require('./parts/filter.js'),
		topSlider = require('./parts/topSlider.js'),
		bottomSlider = require('./parts/bottomSlider.js'),
		popupAfterMinute = require('./parts/popupAfterMinute.js');

	modal();
	gift();
	hoverPicture();
	burgerMenu();
	more();
	accordion();
	filter();
	topSlider();
	bottomSlider();
	popupAfterMinute();
}); // -> end scripts