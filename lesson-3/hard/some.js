'use strict';

let str = 'урок-3-был слишком легким',
		str1 = str[0].toUpperCase() + str.substr(1).toLowerCase(),
		str2 = str1.replace(/-/g,' '),
		word = 'легким',
		positonWord = str2.search(/word/i),
		str3 = str2.substr(positonWord - word.length, word.length+1);
		console.log(str2);
		console.log(str3);

		for(let i = 1; i <= 2; i++) {
			let a = str3[str3.length - i];
			str3 = str3.replace(a, 'o');
		}
		console.log(str3);


let arr = [20, 33, 1, 'Человек', 2, 3],
		sum = 0;
const grade = 3;

for (let i = 0; i < arr.length-1; i++) {
	if( typeof(arr[i]) == 'string') {
		arr.splice(i, 1);
	}
}

let i = 0;
do {
	arr[i] = Math.pow(arr[i], grade);
	sum += arr[i]; 
	i++;
} while ( i < arr.length);
console.log(sum);

let answer = Math.sqrt(sum);
console.log(answer);


function check (enter) {
	if(typeof(enter) != 'string') {
		alert('введенные данные не являются строкой');
	} else if (enter.length > 50) {
		enter = enter.trim();
		enter = enter.substr(0, 50) + ' ... ';
	}
	console.log(enter);
}
check();


