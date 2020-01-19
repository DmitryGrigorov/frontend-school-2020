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
let login = prompt('Введите логин');
let result = '';
switch(login){
    case 'Админ':
        let password = prompt('Введите пароль');
        switch(password){
            case 'Я главный': 
                result = 'Здравствуйте!'; 
                break;
            default:
                if(typeof(password)=="string" && password.length > 0){
                    result = 'Неверный пароль';
                    break;
                }
                result = 'Отменено';
        }
        break;
    default:
        if (typeof(login)=="string" && login.length > 0){
            result = 'Я вас не знаю';
            break;
        }
        result = 'Отменено';
        break;
}
 
alert(result);
*/

/*
    2)
    Какие значения выведет цикл while?

    Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.
    Оба цикла выводят alert с одинаковыми значениями или нет?

    префиксный вариант ++i
    let i = 0;
    while (++i < 5) alert( i );

    1,2,3,4

    постфиксный вариант i++
    let i = 0;
    while (i++ < 5) alert( i );

    1,2,3,4,5
*/

/*
    3)
    Перепишите код, заменив цикл for на while, без изменения поведения цикла.

    for (let i = 0; i < 3; i++) {
        alert( `number ${i}!` );
    }
*/

// let i = 0; 
// while (++i<3) alert( `number ${i}!` );

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
const number = +prompt('Введите число между 0 и 3', '');
let is0 = (number === 0);
let is1 = (number === 1);
let is2_3 = ((number === 2) || (number === 3));
switch(true){
    case is0: 
        alert('Вы ввели число 0');
        break;
    case is1:
        alert('Вы ввели число 1');
        break;
    case is2_3:
        alert('Вы ввели число 2, а может и 3');
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
function getBackgroundColor(theme) {
    return (theme === 'light') ? '#FFF' : '#000';
}
*/
/**
 * 6) Напишите функцию pow(x,n), которая возвращает x в степени n
 */

/*
function pow(x,n){
    return x ** n;
} 

let x = prompt('Введите число');
let n = prompt('Введите степень');
alert(pow(x,n));
*/