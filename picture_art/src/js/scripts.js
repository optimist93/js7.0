require('nodelist-foreach-polyfill');
require('formdata-polyfill');
window.addEventListener('DOMContentLoaded', () => {
	'use strict';

	let modal = require('./parts/modal.js'),
		slider = require('./parts/slider.js');

	modal();
	slider();
}); // -> end scripts