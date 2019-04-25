'use strict';

let num = 2;
nums:
	for(let i = 2; i <= 100; i++) {

		for (let a = 2; a < i; a++) {
			if (i % a == 0) continue nums;
		}
		console.log(i + " делители этого числа: 1 и " + i);
	}