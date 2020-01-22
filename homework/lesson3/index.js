/*
    1)
    Напишите функцию lwTail(str), возвращающую строку str в нижнем регистры все буквы кроме первой. Например:

    lwTail("ВАСЯ") == "Вася";
*/

function lwTail(str){
    return str.substr(0, 1) + str.substr(1).toLowerCase();
}

console.log('первая буква', lwTail('ВАСЯ'));

/*
    2)
    Дана строка; нужно написать функцию, которая позволяет вернуть значение true,
    если строка является палиндромом, и false — если нет. 
    При этом нужно учитывать пробелы и знаки препинания.

    palindrome('racecar') === true
    palindrome('Anna') === true
    palindrome('table') === false
    palindrome('John') === false
*/

function palindrom(str) {
    const reverse = str.toLowerCase().split('').reverse().join('');
    return (str.toLowerCase()) === reverse;
}

['racecar', 'Anna', 'table', 'John'].forEach((item) => console.log(item, palindrom(item)));

/*
    3)
    Что выведет следующий код?

    let fruits = ["Яблоки", "Груша", "Апельсин"];

    // добавляем новое значение в "копию"
    let shoppingCart = fruits;

    shoppingCart.push("Банан");

    shoppingCart.push("Манго");

    // удаляем значения в старом массиве
    fruits.pop()

    // что в fruits?
    console.log( fruits.length ); // ?
*/

/********************************************************************************************************/
// ОТВЕТ массивы - объекты, а значит передаются по ссылке, т.е. независимо от того, через какую переменную массив муотруется результат должне быть одинаковым т.е. ответ 4;
/********************************************************************************************************/

/*
    4)
    Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

    То есть дефисы удаляются, а все слова после них получают заглавную букву.

    Примеры:
    camelize("background-color") == 'backgroundColor';
    camelize("list-style-image") == 'listStyleImage';
    camelize("-webkit-transition") == 'WebkitTransition';

    P.S. Подсказка: используйте split, чтобы разбить строку на массив символов,
    потом переделайте всё как нужно и методом join соедините обратно.
*/

function camelize(str) {
    const parts = str.split('-');
    const modifiedParts = parts.map((item) => lwTail(item.toUpperCase()));
    return modifiedParts.join('');
}

["background-color", "list-style-image", "-webkit-transition"].forEach(item => console.log(item, camelize(item)));

/*
    5)
    У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.

    Создайте функцию copySorted(arr), которая будет возвращать такую копию.

    let arr = ["HTML", "JavaScript", "CSS"];

    let sorted = copySorted(arr);

    alert( sorted ); // CSS, HTML, JavaScript
    alert( arr ); // HTML, JavaScript, CSS (без изменений)
*/

function copySorted(arr) {
    let newArr = arr.slice();
    return newArr.sort();
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

console.log( sorted ); // CSS, HTML, JavaScript
console.log( arr ); // HTML, JavaScript, CSS (без изменений)

/*
    6)
    Написать функцию, которая считает сумму элементов массива кратных числу 2.

    Например:

    sum(1, 2, 3, 4, 5) // 6
    sum(3, 8, 1, 40, 6) // 54
*/

function sum() {
    let args = [];
    for (var i = 0; i < arguments.length; i++) {
        args[i] = arguments[i];
    }
    return args.reduce((acc, value) => {
        return value%2===0 ? acc + value : acc;
    }, 0);
}

console.log("сумма", sum(1, 2, 3, 4, 5));
console.log("сумма", sum(3, 8, 1, 40, 6));