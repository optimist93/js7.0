'use strict';
let money = prompt('Ваш бюджет на месяц?'),
		time = prompt('Введите дату в формате YYYY-MM-DD'),
		mandatoryExpenses = prompt('Введите обязательную статью расходов в этом месяце'),
		mandatoryExpensesCost = prompt('Во сколько обойдется?'),
		budgetOneDay = money/30;

let appData = {
	budget: '',
	timeData: '',
	expenses: {},
	optionalExpenses: {},
	income: {},
	savings: true
};

appData.budget = money;
appData.timeData = time;
appData.expenses[mandatoryExpenses] = mandatoryExpensesCost;

// console.log(appData.budget);
// console.log(appData.timeData);
// console.log(appData.expenses);

alert('Бюджет на 1 день: ' + budgetOneDay);