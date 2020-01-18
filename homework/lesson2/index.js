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

function authentication() {
  const userLogin = prompt("Введите ваш логин:");
  switch (userLogin) {
    case "Админ":
      const password = prompt("Введите ваш пароль:");
      if (!password) {
        alert("Отменено");
        break;
      }
      password === "Я главный"
        ? alert("Здравствуйте!")
        : alert("Неверный пароль");
      break;
    case null:
    case "":
      alert("Отменено");
      break;
    default:
      alert("Я вас не знаю");
  }
}

/*
    2)
    Какие значения выведет цикл while?

    Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.
    Оба цикла выводят alert с одинаковыми значениями или нет? - нет

    префиксный вариант ++i  - выведет 1 2 3 4
    let i = 0;
    while (++i < 5) alert( i );

    постфиксный вариант i++ выведет 1 2 3 4 5
    let i = 0;
    while (i++ < 5) alert( i );
*/

const prefixCycle = (callback = postfixCycle) => {
  let i = 0;
  alert("Префиксный вариант");
  while (++i < 5) alert(i);
  callback();
};

const postfixCycle = () => {
  let i = 0;
  alert("Постфиксный вариант");
  while (i++ < 5) alert(i);
};

/*
    3)
    Перепишите код, заменив цикл for на while, без изменения поведения цикла.

    for (let i = 0; i < 3; i++) {
        alert( `number ${i}!` );
    }
*/

const changeForToWhile = () => {
  let i = 0;
  while (i < 3) {
    alert(`number ${i++}!`);
  }
};

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

const useSwitch = () => {
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
  }
};

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
  return theme === "light" ? "#FFF" : "#000";
}

const testFifthTask = () => {
  const theme = prompt("Введите тип темы:");
  alert(getBackgroundColor(theme));
};

/**
 * 6) Напишите функцию pow(x,n), которая возвращает x в степени n
 */

const pow = (x, n) => x ** n;

const testSixthTask = () => {
  const x = prompt("Введите число для возведения в степень:", 2);
  const n = prompt("В какую степень необходимо возвести число?", 10);
  alert(pow(x, n));
};
