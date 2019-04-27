'use strict';

let startBtn = document.getElementById('start'),
	budget = document.querySelector('.budget-value'),
	daybudget = document.querySelector('.daybudget-value'),
	level = document.querySelector('.level-value'),
	expenses = document.querySelector('.expenses-value'),
	optionalExpenses = document.querySelector('.optionalexpenses-value'),
	income = document.querySelector('.income-value'),
	monthSavings = document.querySelector('.monthsavings-value'),
	yearSavings = document.querySelector('.yearsavings-value'),
	expensesItem = document.querySelectorAll('.expenses-item'),
	expensesBtn = document.getElementsByTagName('button')[0],
	optionalExpensesBtn = document.getElementsByTagName('button')[1],
	countBtn = document.getElementsByTagName('button')[2],
	optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item'),
	chooseIncome = document.querySelector('.choose-income'),
	checkSavings = document.querySelector('.checksavings'),
	chooseSum = document.querySelector('.choose-sum'),
	choosePercent = document.querySelector('.choose-percent'),
	year = document.querySelector('.year-value'),
	month = document.querySelector('.month-value'),
	day = document.querySelector('.day-value');


	
	let money, time, optionalExp, sum;

	expensesBtn.disabled = true;
	optionalExpensesBtn.disabled = true;
	countBtn.disabled = true;

// начало расчета
startBtn.addEventListener('click', function() {
	expensesBtn.disabled = false;
	optionalExpensesBtn.disabled = false;
	countBtn.disabled = false;
	time = prompt('Введите дату в формате YYYY-MM-DD', '');
	money = +prompt('Ваш бюджет на месяц?', '');

	while(isNaN(money) || money == "" || money == null ) {
		money = +prompt('Ваш бюджет на месяц?', '');
	}
	appData.budget = money;
	appData.timeData = time;
	budget.textContent = money.toFixed();
	year.value = new Date(Date.parse(time)).getFullYear();
	month.value = new Date(Date.parse(time)).getMonth() + 1;
	day.value = new Date(Date.parse(time)).getDate();
});
// обязательные расходы
let expensesItemCost;
expensesItem.forEach(function(item, i) {
	i = 0;
	let test = item[i];
	expensesItemCost = item[i++];
	
		//  for(let i = 0; i <= expensesItem.length; i++) {
		// 	let b = expensesItem[++i].value;
		// 	item[b].value = item[b].value.replace(/[^0-9]/g, '');
		//  }
});
expensesBtn.addEventListener('click', function() {
	sum = 0;

	for (let i = 0; i < expensesItem.length; i++) {
		let a = expensesItem[i].value,
				b = expensesItem[++i].value;
				if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
				&& a != '' && b != '' && a.length < 50) {
			appData.expenses[a] = b;
			sum += +b;
			} else if (a === null || b === null || a === '' || b === '') {
				i--;
			}
	}
	expenses.textContent = sum;
	return sum;
});
// необязательные расходы
optionalexpensesItem.forEach(function(item) {
	item.addEventListener('input', function() {
		item.value = item.value.replace(/[^а-яА-Я]/, '');
	});
});

optionalExpensesBtn.addEventListener('click', function() {
	optionalExpenses.textContent = "";
	for(let i = 0; i <= optionalexpensesItem.length; i++) {
		let opt = optionalexpensesItem[i].value;
		if(opt != "" && opt != null) {
			appData.optionalExpenses[i] = opt;
			optionalExpenses.textContent += appData.optionalExpenses[i] + ' ';
			optionalexpensesItem[i].value = '';
		}
	}
});

// расчет дневного бюджета
countBtn.addEventListener('click', function() {
	if (appData.budget != undefined) {

		appData.moneyPerDay = ((appData.budget - sum)/30).toFixed();
		daybudget.textContent = appData.moneyPerDay;
		// уровень достатка
		if(appData.moneyPerDay < 100) {
			level.textContent = "Минимальный уровень достатка";
		} else if (appData.moneyPerDay > 100 && appData.moneyPerDay <= 2000) {
			level.textContent = "Средний уровень достатка";
		} else if (appData.moneyPerDay > 2000) {
			level.textContent = "Высокий уровень достатка";
		} else {
			level.textContent = "Произошла ошибка";
		}

	} else {
		daybudget.textContent = "Произошла ошибка";
	}

});
// статьи возможного дохода
chooseIncome.addEventListener('input', function() {
	let items = chooseIncome.value;
	appData.income = items.split(', ');
	income.textContent = appData.income;
});
// чекбокс - есть ли сбережения
checkSavings.addEventListener('click', function() {
	if (appData.savings == true) {
			appData.savings = false;
	} else {
		appData.savings = true;
	}
});
// просчет заработанных денег со сбережений
chooseSum.addEventListener('input', function() {
	if (appData.savings == true) {
		let sum = +chooseSum.value,
			percent = +choosePercent.value;
		
		appData.monthIncome = sum/100/12*percent;
		appData.yearIncome = sum/100*percent;

		monthSavings.textContent = appData.monthIncome.toFixed(1);
		yearSavings.textContent = appData.yearIncome.toFixed(1);
	}
});
choosePercent.addEventListener('input', function() {
	if (appData.savings == true) {
		let sum = +chooseSum.value,
			percent = +choosePercent.value;
		
		appData.monthIncome = sum/100/12*percent;
		appData.yearIncome = sum/100*percent;

		monthSavings.textContent = appData.monthIncome.toFixed(1);
		yearSavings.textContent = appData.yearIncome.toFixed(1);
	}
});

let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false
};
