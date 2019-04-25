'use strict';

let money, time, optionalExp;

function start() {
	
	money = +prompt('Ваш бюджет на месяц?', '');
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

	while(isNaN(money) || money == "" || money == null ) {
		money = +prompt('Ваш бюджет на месяц?', '');
	}
}
start();

let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: true,
	chooseExpenses: function() { // обязательная статья расходов
		for (let i = 0; i < 2; i++) {
			let	a = prompt('Введите обязательную статью расходов в этом месяце', ''),
					b = prompt('Во сколько обойдется?', '');
	
			if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
					&& a != '' && b != '' && a.length < 50) {
				console.log("done");
				appData.expenses[a] = b;
				} else if (a === null || b === null || a === '' || b === '') {
					alert ('Пожалуйст введите значение, не филоньте');
					i--;
				}
		}
	},
	detectDayBudget: function() { // бюджет на 1 день
		appData.moneyPerDay = (appData.budget/30).toFixed();
		alert('Бюджет на 1 день: ' + appData.moneyPerDay);
	},
	detectLevel: function() { // Уровень достатка
		if(appData.moneyPerDay < 100) {
			console.log("Минимальный уровень достатка");
		} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
			console.log("Средний уровень достатка");
		} else if (appData.moneyPerDay > 2000) {
			console.log("Высокий уровень достатка");
		} else {
			console.log("Произошла ошибка");
		}
	},
	checkSavings: function() { // есть ли сбережения и какие
		if (appData.savings == true) {
			let save = +prompt('какова сумма накоплений?', ''),
					percent = +prompt('под какой процент?', '');
	
			appData.monthIncome = save/100/12*percent;
			alert(" доход в месяц с вашего депозита: " + appData.monthIncome);
		}
	},
	chooseOptExpenses: function() { // необязательные расходы
		for(let i = 1; i <= 3; i++) {
			optionalExp = prompt('Статья необязательных расходов?', '');
			if(optionalExp != "" && optionalExp != null ) {
				appData.optionalExpenses[i] = optionalExp;
			} else {
				i--;
			}
		}
	},
	chooseIncome: function() { // дополнительный доход
		for(let i = 0; i < 1; i++) {
			let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', ''),
			itemsOpt = prompt('Может что-то еще?', '');
			if( items != null && items != '' && typeof(items) == 'string' && itemsOpt != null && itemsOpt != '' && typeof(itemsOpt) == 'string') {
				appData.income = items.split(', ');
				appData.income.push(itemsOpt);
				appData.income.sort();
				appData.income.forEach(function(item, i) { // вывод всех элемнтов массива
				console.log(i+1 + ': ' + item);
				
				
			});
		} else {
			alert('Произошла ошибка, попробуйте заново');
			i--;
		}
	}
		for (let key in appData) {
			console.log('Наша программа включает в себя данные: ' + key + appData);
		}
	}
};
appData.chooseIncome();