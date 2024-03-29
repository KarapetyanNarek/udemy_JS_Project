'use strict';

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpnses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
                b = prompt("Во сколько обойдется?", "");
        
            if ((typeof(a)) === "string" && (typeof(a)) != null
            && (typeof(b)) === "string" && (typeof(b)) != null
            && a != "" && b != "" && a.length < 50 && b.length < 50) {
                appData.expenses[a] = b;
            } else {
                i = i - 1; //i--
            }
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert ("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log ("Это минимальный уровень достатка!");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log ("Это средний уровень достатка!");
        } else if (appData.moneyPerDay > 2000) {
            console.log ("Это высокий уровень достатка!");
        } else {
            console.log ("Ошибочка...!");
        }
    },
    checkSavings: function(){
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накопления?",""),
                percent = +prompt("Под какой процент","");
            
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i = 1; i <= 3; i++) {
            let questionOptExpenses = prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i] = questionOptExpenses;
            console.log(appData.optionalExpenses);
        }
    },
    chooseIncome: function() {
        // let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)","");
        // appData.income = items.split(', ');
        // appData.income.push(prompt("Может что-то еще?",""));
        // appData.income.sort();

        let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");

        if (typeof(items) != "string" || items == "" || typeof(items) == null) {
            console.log("Вы ввели некорректные данные или не ввели их вовсе");
        } else {
            appData.income = items.split(", ");
            appData.income.push(prompt("Может что-то еще?"));
            appData.income.sort();
        }

        appData.income.forEach (function (itemmassive, i) {
            alert("Способы доп. заработка: " + (i+1) + " - " + itemmassive);
        });

    }
};

for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
};

// chooseExpenses();

// detectDayBudget();

// let i = 0;

// while (i < 2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt("Во сколько обойдется?", "");

//     if ((typeof(a)) === "string" && (typeof(a)) != null
//     && (typeof(b)) === "string" && (typeof(b)) != null
//     && a != "" && b != "" && a.length < 50 && b.length < 50) {
//         appData.expenses[a] = b;
//     } else {
//         i = -1; //i--
//     }

//     i++;
// }

// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt("Во сколько обойдется?", "");

//     if ((typeof(a)) === "string" && (typeof(a)) != null
//     && (typeof(b)) === "string" && (typeof(b)) != null
//     && a != "" && b != "" && a.length < 50 && b.length < 50) {
//         appData.expenses[a] = b;
//     } else {
//         i = -1; //i--
//     }

//     i++;
// } while (i < 2);


// detectLevel();

// checkSavings();

// chooseOptExpenses();
