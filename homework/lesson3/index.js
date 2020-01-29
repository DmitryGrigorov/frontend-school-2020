/*
    1)
    Напишите функцию lwTail(str), возвращающую строку str в нижнем регистры все буквы кроме первой. Например:

    lwTail("ВАСЯ") == "Вася";
*/
function lwTail(str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}
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

function palindrome(text) {
    text = text.toLowerCase();
    let center = Math.floor(text.length / 2);
    let count = text.length;
    for (let i = 0; i < center; i++) {
        if (text[i] != text[count - 1 - i]) {
            return false;
        }
    }
    return true
}

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

alert(4);

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
    let arr = str.split('');
    let count = arr.length;
    for (let i = 0; i < count; i++) {
        if (arr[i] === '-') {
            let letter = arr[i + 1].toUpperCase();
            arr.splice(i, 2, letter);
        }
    }
    return arr.join('');
}

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
    let temp;
    let count = arr.length;
    let copyArr = arr.slice(0);
    for (let i = 0; i < count - 1; i++) {
        for (let j = i + 1; j < count; j++) {
            if (copyArr[j] < copyArr[i]) {
                temp = copyArr[i];
                copyArr[i] = copyArr[j];
                copyArr[j] = temp;
            }
        }
    }
    return copyArr;
}
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
function sum(arr) {
    let sum = 0;
    for (obj in arr) {
        if (arr[obj] % 2 === 0) {
            sum += arr[obj];
            console.log(sum);
        }
    }
    return sum;
}