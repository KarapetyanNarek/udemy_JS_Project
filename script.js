'use strict';

var money = prompt("Ваш бюджет на месяц?", "");
var time = prompt("Введите дату в формате YYYY-MM-DD", "");

var firstQuestion = prompt("Введите обязательную статью расходов в этом месяце", "");
var secondQuestion = prompt("Во сколько обойдется?", "");

var appData = {
    budget: money,
    timeData: time,

    expenses: {},

    optionalExpnses: {},

    income: [],

    savings: false
}

appData.expenses.firstQuestion = secondQuestion;

alert(+money/30);