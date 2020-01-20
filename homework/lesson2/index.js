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

function authorization() {
    const login = prompt('Ввведите логин:');
    if (login === '' || login === null) {
        alert('Отменено')
    } else if (login === 'админ' || login === 'Админ') {
        const password = prompt('Введите пароль:');
        if (password === 'Я главный') {
            alert('Здравствуйте!');
        } else {
            alert('Неверный пароль');
        }
    } else {
        alert('Я Вас не знаю');
    }
}

authorization();


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

function counterOne() {
    let i = 0;
    while (++i < 5) {
        console.log(i);
    }
}

function counterTwo() {
    let i = 0;
    while (i++ < 5) {
        console.log(i);
    }
}

counterOne();
counterTwo();

/* Первый цикл выводит числа с 1 по 4 включительно,
   второй - с 1 по 5 включительно.
 */

/*
    3)
    Перепишите код, заменив цикл for на while, без изменения поведения цикла.

    for (let i = 0; i < 3; i++) {
        alert( `number ${i}!` );
    }
*/

function counterThree() {
    let i = 0;
    while (i < 3) {
        alert(`number ${i}!`);
        i++;
    }
}

counterThree();
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

function testSwitch() {
    const number = +prompt('Ввведите число между 0 и 3', '')
    if (number > 3 || number < 0 || isNaN(number)) {
        alert('Вы ввели неподходящее число');
        return;
    }
    switch (parseInt(number)) {
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
    }
}

testSwitch();

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

let getBackgroundColor = theme => (theme === 'light') ? '#FFF' : '#000';
console.log(getBackgroundColor('dark'));
/**
 * 6) Напишите функцию pow(x,n), которая возвращает x в степени n
 */

function pow(x, n) {
    return x ** n;
}

console.log(pow(2,4));

 