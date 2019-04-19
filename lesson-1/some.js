'use strict';
let money = prompt('Ваш бюджет на месяц?'),
		time = prompt('Введите дату в формате YYYY-MM-DD'),
		a1 = prompt('Введите обязательную статью расходов в этом месяце'),
		a2 = prompt('Во сколько обойдется?'),
		a3 = prompt('Введите обязательную статью расходов в этом месяце'),
		a4 = prompt('Во сколько обойдется?'),
		budgetOneDay = money/30;

let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false
};

appData.expenses[a1] = a2;
appData.expenses[a3] = a4;

alert('Бюджет на 1 день: ' + budgetOneDay);