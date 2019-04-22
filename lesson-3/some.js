'use strict';

let money, time, optionalExp;

function start() {
	
	money = +prompt('Ваш бюджет на месяц?');
	time = prompt('Введите дату в формате YYYY-MM-DD');

	while(isNaN(money) || money == "" || money == null ) {
		money = +prompt('Ваш бюджет на месяц?');
	}
}
start();

let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: true
};

function chooseExpenses() {
	for (let i = 0; i < 2; i++) {
		let	a = prompt('Введите обязательную статью расходов в этом месяце'),
				b = prompt('Во сколько обойдется?');

	if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
			&& a != '' && b != '' && a.length < 50) {
		console.log("done");
		appData.expenses[a] = b;
		} else if (a === null || b === null || a === '' || b === '') {
			alert ('Пожалуйст введите значение, не филоньте');
			i--;
		}
	}
}
chooseExpenses();


function detectDayBudget() {
	appData.moneyPerDay = (appData.budget/30).toFixed();
	alert('Бюджет на 1 день: ' + appData.moneyPerDay);
}
detectDayBudget();

function detectLevel() {
	if(appData.moneyPerDay < 100) {
		console.log("Минимальный уровень достатка");
	} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
		console.log("Средний уровень достатка");
	} else if (appData.moneyPerDay > 2000) {
		console.log("Высокий уровень достатка");
	} else {
		console.log("Произошла ошибка");
	}
}
detectLevel();

function checkSavings() {
	if (appData.savings == true) {
		let save = +prompt('какова сумма накоплений?'),
				percent = +prompt('под какой процент?');

		appData.monthIncome = save/100/12*percent;
		alert(" доход в месяц с вашего депозита: " + appData.monthIncome);
	}
}
checkSavings();

// function chooseOptExpenses() {
// 	for(let i = 1; i <= 3; i++) {
// 		optionalExp = prompt('Статья необязательных расходов?');
// 		if(optionalExp != "" && optionalExp != null ) {
// 			appData.optionalExpenses[i] = optionalExp;
// 		} else {
// 			i--;
// 		}
// 	}
// }
// chooseOptExpenses();