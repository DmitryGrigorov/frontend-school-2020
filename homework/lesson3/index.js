/*
    1)
    Напишите функцию lwTail(str), возвращающую строку str в нижнем регистры все буквы кроме первой. Например:

    lwTail("ВАСЯ") == "Вася";
*/

function lwTail(str) {
    const start = str.substring(0, 1).toUpperCase();
    const tail = str.substring(1, str.length).toLowerCase();

    return start + tail;
}

let str = 'iT IS WORKing!';
lwTail(str);


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

// учитывается регистр и знаки
function isStrictPalindrome(word) {
    return word.toLowerCase() === word.toLowerCase().split('').reverse().join('');
}

// учитываются только буквы и цифры, остальное игнорируется
function isPalindrome(str) {
    const cleanedStr = str.replace(/[^a-zA-ZА-Яа-я0-9Ёё]/g, '').toLowerCase();

    return cleanedStr === cleanedStr.split('').reverse().join('');
}


const test = 'А роза упала на лапу Азора!';
isStrictPalindrome(test); // false due to additional symbols
isPalindrome(test); // true





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



/* Поскольку инициализация shoppingCart реализуется за счет ссылок,
методы .push() изменяют в т.ч. и первоначальный массив. 
Метод .pop() удаляет последний элемент массива, потому в результате имеем 
fruits == shoppingCart (опять-таки, за счет ссылок изменился и новый массив),
оба хранят ["Яблоки", "Груша", "Апельсин", "Банан"]
 */


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
    const words = str.split('-')

    words.forEach((item, index) => {
        words[index] = (index === 0) ? item.toLowerCase() : lwTail(item);
    })
    
    return words.join('');
}

const color = "background-color"
camelize(color);

console.log(camelize(color) == 'backgroundColor');


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
    return arr.slice(0).sort();
}

let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);

console.log(arr, sorted);


/*
    6)
    Написать функцию, которая считает сумму элементов массива кратных числу 2.

    Например:

    sum(1, 2, 3, 4, 5) // 6
    sum(3, 8, 1, 40, 6) // 54
*/

function arrSum(arr) {
    let sum = 0;

    arr.map(item => {
        if (item % 2 === 0) {
            sum += item
        } 
    })

    return sum;
}


function numSum() {
    const numbers = Array.prototype.slice.call(arguments);
    let sum = 0;

    numbers.map(item => {
        if (item % 2 === 0) {
            sum += item
        } 
    })

    return sum;
}

arrSum( [3, 8, 1, 40, 6] ); // for array
numSum(3, 8, 1, 40, 6); // for sequence


