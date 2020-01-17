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

let accounts = new Map();
accounts.set("Админ","Я главный");

// Функция запроса пароля
function checkPassword(login){
    let password = prompt("Введите пароль:");
    if(password == "" || password == null){
        alert("Отменено");
        return false;
    }
    if(accounts.has(login) && accounts.get(login) == password)
        return true;

    alert("Неверный пароль");
    return false;
}

// Функция проверки прав
function checkCredentals(){
    let login = prompt("Введите логин:");
    switch(login){
        case "Админ":
            let result = checkPassword("Админ");
            if(result)
                alert("Здравствуйте!");
            break;
        case "":
        case null:
            alert("Отменено");
            break;
        default:
            alert("Я вас не знаю");
            break;
    }
}
checkCredentals();

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
    3)
    Перепишите код, заменив цикл for на while, без изменения поведения цикла.

    for (let i = 0; i < 3; i++) {
        alert( `number ${i}!` );
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

/**
 * 6) Напишите функцию pow(x,n), которая возвращает x в степени n
 */

 