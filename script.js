let money = prompt('Ваш бюджет на месяц?', ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
console.log(money);
console.log(time);

let appData = {
  budjet: money,
  timeData: time,
  expenses: {},
  optinalExpenses: {},
  income: [],
  savings: false
};
console.log(appData);

//let a1 = prompt('Введите обязательную статью расходов в этом месяце', ''),
    a2 = prompt ('Во сколько обойдется?', ''),
    a3 = prompt('Введите обязательную статью расходов в этом месяце', ''),
    a4 = prompt ('Во сколько обойдется?', '');

appData.expenses = a3 + ' : ' + a4;

let budjetOneDay = appData.budjet / 30; 
console.log(budjetOneDay);
