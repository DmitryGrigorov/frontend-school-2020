/*
    1)
    Напишите код, который будет спрашивать логин с помощью prompt.
    Если посетитель вводит «Админ», то prompt запрашивает пароль,
    если в поле "логин" ничего не введено или нажата клавиша Esc – показать «Отменено»,
    в противном случае отобразить «Я вас не знаю».

    Если введён пароль «Я главный», то выводить «Здравствуйте!»
    Иначе – «Неверный пароль»
    При отмене – «Отменено»
*/
function loginChecker() {
  let login = prompt("Введите Ваш логин:", "");
  if (login === "" || login === null) alert("Отменено");
  else if (login === "Админ") {
    let password = prompt("Введите пароль:");
    if (password === "Я главный") alert("Здравствуйте");
    else alert("Неверный пароль");
  } else alert("Я Вас не знаю");
}

/*
    2)
    Какие значения выведет цикл while?

    Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.
    Оба цикла выводят alert с одинаковыми значениями или нет?

    префиксный вариант ++i
    let i = 0;
    while (++i < 5) alert( i );
    Ответ: 1 2 3 4

    постфиксный вариант i++
    let i = 0;
    while (i++ < 5) alert( i );
    Ответ: 1 2 3 4 5
*/

function whileChecker() {
  let i = 0;
  while (++i < 5) alert(i);
  i = 0;
  while (i++ < 5) alert(i);
}

/*
    3)
    Перепишите код, заменив цикл for на while, без изменения поведения цикла.

    for (let i = 0; i < 3; i++) {
        alert( `number ${i}!` );
    }
*/

function forToWhile() {
  let i = 0;
  while (i < 3) {
    alert(`number ${i}!`);
    i++;
  }
}

/*
    4) Перепишите код с использованием одной конструкции switch:

    const number = +prompt('Введите число между 0 и 3', '');

    if (number === 0) {
        alert('Вы ввели число 0');
    }

    if (number === 1) {
        alert('Вы ввели число 1');
    }

    if (number === 2 || number === 3) {
        alert('Вы ввели число 2, а может и 3');
    }
*/

function ifToSwitch() {
  const number = +prompt("Введите число между 0 и 3", "");
  switch (number) {
    case 0:
      alert("Вы ввели число 0");
      break;
    case 1:
      alert("Вы ввели число 1");
      break;
    case 2:
    case 3:
      alert("Вы ввели число 2, а может и 3");
      break;
    default:
      alert("Введено неверное число.");
  }
}

/*
    5)
    Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.

    function getBackgroundColor(theme) {
        if (theme === 'light') {
            return '#FFF';
        } else {
            return '#000';
        }
    }
*/

function getBackgroundColor(theme) {
  theme === "light" ? "#FFF" : "#000";
}

/**
 * 6) Напишите функцию pow(x,n), которая возвращает x в степени n
 */

function pow(x, n) {
  if (n > 0) {
    return n != 1 ? x * pow(x, n - 1) : x;
  } else if (n < 0) {
    return n != -1 ? 1/x * pow(x, n + 1) : 1/x;
  } else return 1;
}

console.log(pow(2, 0));
