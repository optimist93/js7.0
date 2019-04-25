'use strict';

let menu = document.querySelector('.menu'),
	menuList = document.querySelectorAll('.menu-item'),
	menuItem = document.createElement('li'),
	column = document.querySelectorAll('.column'),
	title = document.getElementById('title'),
	adv = document.querySelector('.adv');

	console.log(menu);

	menuItem.classList.add('menu-item');
	menuItem.innerHTML = 'Пятый пункт';
	menu.appendChild(menuItem);
	
	menu.insertBefore(menuList[2], menuList[1]);

	// Поменять заголовок, добавить слово "подлинную"
	title.innerHTML = 'Мы продаем только подлинную технику Apple';
		
	// аменить картинку заднего фона на другую из папки img
	document.body.style.background = 'url("img/apple_true.jpg")';

	// Удалить рекламу со страницы
	column[1].removeChild(adv);
		
	// Спросить у пользователя отношение к технике apple
	let feedback = document.getElementById('prompt'),
			question = prompt('Как вы относитесь к технике apple?', '');
	
	feedback.innerHTML = question; // Как вы относитесь к технике apple?