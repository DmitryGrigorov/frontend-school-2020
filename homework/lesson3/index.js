/*
    1)
    Напишите функцию lwTail(str), возвращающую строку str в нижнем регистры все буквы кроме первой. Например:

    lwTail("ВАСЯ") == "Вася";
*/

function lwTail (str) {
    str = str[0].toUpperCase() + str.slice(1).toLowerCase();
    return str;
}

console.log(lwTail("ВАСЯ"));

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

function palindrome(word) {
    return word.toLowerCase() === word.toLowerCase().split('').reverse().join('')
}

console.log( palindrome('Шалаш') );

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

// Ответ: 
// в fruits: Яблоки, Груша, Апельсин, Банан
// console.log( fruits.length ); равно 4
// shoppingCart и fruits являются ссылками на один и тот же массив


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
    str = str.split('-');

    str = str.map((item, index) => (index === 0) ?  item : item[0].toUpperCase() + item.slice(1));

    str = str.join('');
    return str;
}

console.log( camelize("list-style-image") );
console.log( camelize("background-color") );
console.log( camelize("-webkit-transition") );

/*
    5)
    У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.

    Создайте функцию copySorted(arr), которая будет возвращать такую копию.

    let arr = ["HTML", "JavaScript", "CSS"];

    let sorted = copySorted(arr);

    alert( sorted ); // CSS, HTML, JavaScript
    alert( arr ); // HTML, JavaScript, CSS (без изменений)
*/

//Развернутый вариант решения
/* 
function copySorted(arr) {
    let copyArray = []; 

    for (let i = 0; i < arr.length; i++) {
        copyArray[i]  = arr[i];
    };

    return copyArray.sort();

}
*/

function copySorted(arr) {
    return arr.slice().sort();
}

let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);

console.log( arr );
console.log( sorted );
console.log( arr === sorted ); // Получим false, т.к. sorted копия

/*
    6)
    Написать функцию, которая считает сумму элементов массива кратных числу 2.

    Например:

    sum(1, 2, 3, 4, 5) // 6
    sum(3, 8, 1, 40, 6) // 54
*/

function sum(arr) {
    let sumItem = 0;
    arr.forEach(item => {
        if (item % 2 === 0) {
            sumItem += item;
        }
    });
    return sumItem;
}


console.log( sum([1, 2, 3, 4, 5]) );
console.log( sum([3, 8, 1, 40, 6]) );


