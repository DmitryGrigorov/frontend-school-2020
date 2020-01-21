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
/*
if (prompt("введи логин", "login") == "Админ") {
  if (prompt("введите пароль", "password") == "Я главный") {
    alert("Здравствуйте!");
  } else {
    alert("Неверный пароль");
  }
} else {
  alert("Я Вас не знаю");
}
*/

/*
    2)
    Какие значения выведет цикл while?

    Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.
    Оба цикла выводят alert с одинаковыми значениями или нет?

    префиксный вариант ++i
    let i = 0;
    while (++i < 5) alert( i );

    постфиксный вариант i++
    let i = 0;
    while (i++ < 5) alert( i );
*/
/*
// Здесь , при ++i  : 1,2,3,4
// document.write(" ++i <br>");
let i = 0;
while (++i < 5) {
  alert("++i :" + i);
}

//document.write(" i++ <br>");

// Здесь , при i++  : 1,2,3,4,5
i = 0;
while (i++ < 5) {
  alert("i++ :" + i);
}
*/

/*
    3)
    Перепишите код, заменив цикл for на while, без изменения поведения цикла.

    for (let i = 0; i < 3; i++) {
        alert( `number ${i}!` );
    }
*/

/*
let i = 0;
while (i < 3) {
  alert( `number ${i}!` );
  i++;
  }

*/

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
/*
const number = +prompt("Введите число между 0 и 3", "");
switch (number) {
  case 0:
    alert("Вы ввели число 0");
    break;
  case 1:
    alert("Вы ввели число 1");
    break;
  case 2 || 3:
    alert("Вы ввели число 2, а может и 3");
    break;

  default:
    break;
}

*/

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

/*
let quest = "0";
getBackgroundColor(quest);

function getBackgroundColor(theme) {
  return theme === "ligth" ? "#FFF" : "#000";
}
console.log(getBackgroundColor(quest));
*/

let theme = "";
console.log(theme === "ligth" ? "#FFF" : "#000");

//let quest = (theme === "ligth") ? "#FFF" : "#000";
// console.log(quest);

/**
 * 6) Напишите функцию pow(x,n), которая возвращает x в степени n
 */
