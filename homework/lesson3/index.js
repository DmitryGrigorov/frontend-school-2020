/*
    1)
    Напишите функцию lwTail(str), возвращающую строку str в нижнем регистры все буквы кроме первой. Например:

    lwTail("ВАСЯ") == "Вася";
*/

const lwTail = str =>  str[0] + str.slice(1).toLowerCase();
console.log(lwTail('ВАСЯ'));

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

function palindrome(str) {
    const arr = str.toLowerCase().split('');
    const arr2 = arr.reverse();
    if (str.toLowerCase() === arr2.join('')) {
        return true;
    }
    return false;

}

console.log(palindrome('racecar'));
console.log(palindrome('Anna'));
console.log(palindrome('table'));
console.log(palindrome('John'));

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
let fruits = ["Яблоки", "Груша", "Апельсин"];
let shoppingCart = fruits;
shoppingCart.push("Банан");
shoppingCart.push("Манго");
fruits.pop();
console.log(fruits); //["Яблоки", "Груша", "Апельсин", "Банан"],
console.log(fruits.length); //4
/*Происходит так потому, что в 58 строке кода не создается копия массива, а присваивается ссылка на массив fruits. В результате
этого все методы добавления и удаления элементов, применяемых к shoppingCart, применяются к fruits */


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
    const arr = str.split('-');
    const result = arr.map(item => {
        if (item.length <= 1 ) {
            return;
        }
        return item = item[0].toUpperCase() + item.slice(1);
    });
    return arr.slice(0, 1) + result.slice(1).join('');

}

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));


/*
    5)
    У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.

    Создайте функцию copySorted(arr), которая будет возвращать такую копию.

    let arr = ["HTML", "JavaScript", "CSS"];

    let sorted = copySorted(arr);

    alert( sorted ); // CSS, HTML, JavaScript
    alert( arr ); // HTML, JavaScript, CSS (без изменений)
*/
let arr = ["HTML", "JavaScript", "CSS"];
function copySorted(arr) {
    return arr.slice(0).sort();
}

let sorted = copySorted(arr);
console.log(sorted);
console.log(arr);


/*
    6)
    Написать функцию, которая считает сумму элементов массива кратных числу 2.

    Например:

    sum(1, 2, 3, 4, 5) // 6
    sum(3, 8, 1, 40, 6) // 54
*/
let a = [1, 2, 3, 4, 5];
let ab = [3, 8, 1, 40, 6]
function calc(arr) {
    return arr.reduce((summ, item) => {
        if (item % 2 === 0) {
            return summ = summ + item;
        }
        return summ;
    }, 0)
}

console.log(calc(a));
console.log(calc(ab));
