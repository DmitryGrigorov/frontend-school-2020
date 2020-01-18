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
    const singUp = () => {

    let login = prompt('Логин?', '');
    let password = '';
    if (login === 'Админ') {
        password = prompt('Пароль', '');
        if (password === null) {
            alert("Отменено");
        } else password === 'Я тут главный' ? alert('Здравствуйте!') : alert('Неверный пароль');
    } else if (login === null || login === '') {
        alert("Отменено");
    } else alert('Я вас не знаю');

}


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
let i = 0;
while (++i < 5) alert( i );
/* выведится 1,2,3,4 */

let i = 0;
while (i++ < 5) alert( i );
/*1,2,3,4,5 */

/*
    3)
    Перепишите код, заменив цикл for на while, без изменения поведения цикла.

    for (let i = 0; i < 3; i++) {
        alert( `number ${i}!` );
    }
*/

let i = 0;
while(i < 3) {
    alert( `number ${i}!`);
    i++;
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

const valueSelection = () => {

    let number = +prompt('Введите число между 0 и 3', '');

    switch(number) {
        case 0:
            alert('Вы ввели число 0');
            break;
        case 1:
            alert('Вы ввели число 1');
            break;
        case 2:
        case 3:
            alert('Вы ввели число 2, а может и 3');
            break;
        default:
            alert('Поздравляю! Вы гений');
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

const getBackgroundColor = (theme) => {
   return theme === 'light' ? '#FFF' : '#000';
}

/**
 * 6) Напишите функцию pow(x,n), которая возвращает x в степени n
 */

 //1
 const pow = (x, n) => {
    let val = 1;
 for (i = n; i > 0; i--) {
    val *= x;
 }
 return val;
} 

 //2
    const pow = (x, n) => {
        return x ** n;
}
