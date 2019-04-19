'use strict';
let week = ['понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

for (let i = 0; i < week.length; i++) {
	
	if (week[i] === 'Суббота' || week[i] === 'Воскресенье') {
		document.write('<b>' + week[i] + '</b>' + '<br>');
		
	} else if (week[i] === 'Пятница') {
		document.write('<i>' + week[i] + '</i>' + '<br>');
	}  else {
		document.write(week[i] + '<br>');
	}
}