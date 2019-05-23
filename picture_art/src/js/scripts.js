require('nodelist-foreach-polyfill');
require('formdata-polyfill');
window.addEventListener('DOMContentLoaded', () => {
	'use strict';

	let modal = require('./parts/modal.js'),
		gift = require('./parts/gift.js');

	modal();
	gift();
}); // -> end scripts