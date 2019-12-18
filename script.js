'use strict';

let money = +prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpnses: {},
    income: [],
    savings: false
};

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?", "");

    if ((typeof(a)) === "string" && (typeof(a)) != null
    && (typeof(b)) === "string" && (typeof(b)) != null
    && a != "" && b != "" && a.length < 50 && b.length < 50) {
        appData.expenses[a] = b;
    } else {
        i = -1;
    }
};

appData.moneyPerDay = appData.budget / 30;


alert("Daily budget: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Minimum level of income");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Average income");
} else if (appData.moneyPerDay > 2000) {
    console.log("Maximum level of income");
} else {
    console.log("Error");
}
