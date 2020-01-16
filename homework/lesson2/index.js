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

// let login = prompt('Введите логин', '');

// if  (login === "Админ") {
//     let password = prompt('Введите пароль', '');
    
//     if (password === 'Я главный') {
//         alert('Здравствуйте!');
//     } else if (password === null || password === '') {
//         alert('Отменено');
//     } else {
//         alert('Неверный пароль');
//     }

// } else if (login === null || login === '') {
//     alert('Отменено');
// } else {
//     alert('Я вас не знаю');
// }


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

// Ответ на задачу №2:
// Префиксный вариант ++i, цикл выводит: 1, 2, 3, 4.

// В префиксном варианте ++i сначало увеличивает i, затем производится сравнение, затем alert.
// Соответсвенно, когда i = 4 и затем увеличится на единицу, то выражение (5 < 5) будет неверным, 
// следовательно цикл прекратиться.

// i = 0;
// while (1 < 5) alert( 1 );
// while (2 < 5) alert( 2 );
// while (3 < 5) alert( 3 );
// while (4 < 5) alert( 4 );
// while (5 < 5) - окончание цикла.

// // Постфиксный вариант i++, цикл выводит: 1, 2, 3, 4, 5.

// В постфиксном варианте i++ сначало увеличивает i, возвращая прежнее значение
// и это значение учавствует в сравнении i++ < 5. 
// Вызов alert получит новое значение i, увеличенное на единицу.

// i = 0;
// while (0 < 5) alert( 1 );
// while (1 < 5) alert( 2 );
// while (2 < 5) alert( 3 );
// while (3 < 5) alert( 4 );
// while (4 < 5) alert( 5 );
// while (5 < 5) - окончание цикла.

/*
    3)
    Перепишите код, заменив цикл for на while, без изменения поведения цикла.

    for (let i = 0; i < 3; i++) {
        alert( `number ${i}!` );
    }
*/

// i = 0;

// while (i < 3) {
//     alert( `number ${i}!` );
//     i++;
// }


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

// const number = +prompt('Введите число между 0 и 3', '');
// switch (number) {
//     case 0: 
//         alert('Вы ввели число 0');
//         break;

//     case 1: 
//         alert('Вы ввели число 1');
//         break;

//     case 2: 
//     case 3: 
//         alert('Вы ввели число 2, а может и 3');
//         break;
// }

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

// function getBackgroundColor(theme){
//     return (theme === 'light') ? '#FFF' : '#000';
// }

/**
 * 6) Напишите функцию pow(x,n), которая возвращает x в степени n
 */

//  function pow(x,n) {
//     return x ** n;
//  }

// alert( pow(5,4) );