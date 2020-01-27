/*
    1)
    Напишите функцию lwTail(str), возвращающую строку str в нижнем регистры все буквы кроме первой. Например:

    lwTail("ВАСЯ") == "Вася";
*/

function lwTail(str) {
    let firstLetter = str.substring(0, 1).toUpperCase();
    let tailLetters = str.substring(1, str.length).toLowerCase();

    return firstLetter + tailLetters;
};

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

const isPalindrome = string => string.toLowerCase().split('').reverse().join('') === string.toLowerCase();
console.log(isPalindrome("Racecar"));

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

/*Переменная shoppingCart хранит ссылку на массив fruits.
Оба массива содержат ["Яблоки", "Груша", "Апельсин", "Банан"]*/

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

function lwTail(str) {
    let firstLetter = str.substring(0, 1).toUpperCase();
    let tailLetters = str.substring(1, str.length).toLowerCase();

    return firstLetter + tailLetters;
};

function camelize(str) {
    let array = str.split("-");
    array.forEach((elem, index) => {
        array[index] = (index < 1) ? elem.toLowerCase() : lwTail(elem);
    })

    return array.join("")
}

const word = "list-style-image"
console.log(camelize(word));

/*
    5)
    У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.

    Создайте функцию copySorted(arr), которая будет возвращать такую копию.

    let arr = ["HTML", "JavaScript", "CSS"];

    let sorted = copySorted(arr);

    alert( sorted ); // CSS, HTML, JavaScript
    alert( arr ); // HTML, JavaScript, CSS (без изменений)
*/

const copySorted = arr => arr.slice().sort();

let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (без изменений)

/*
    6)
    Написать функцию, которая считает сумму элементов массива кратных числу 2.

    Например:

    sum(1, 2, 3, 4, 5) // 6
    sum(3, 8, 1, 40, 6) // 54
*/

countSum = arr => arr.reduce((accumulator, currentValue) => currentValue % 2 === 0 ?
    accumulator + currentValue : accumulator, 0);

const arr = [3, 8, 1, 40, 6]
console.log(countSum(arr))
