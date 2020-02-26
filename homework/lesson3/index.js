/*
    1)
    Напишите функцию lwTail(str), возвращающую строку str в нижнем регистры все буквы кроме первой. Например:

    lwTail("ВАСЯ") == "Вася";
*/

function lwTail (str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
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

function palindrome (str) {
    return str.toLowerCase() === str.split('').reverse().join('').toLowerCase();
}

/*
    3)
    Что выведет следующий код?

    let fruits = ["Яблоки", "Груша", "Апельсин"];

    // добавляем новое значение в "копию" => создается ссылка на объект fruits
    let shoppingCart = fruits;

    shoppingCart.push("Банан"); //=> элемент добавляется в массив fruits по ссылке shoppingCart, +1 элемент

    shoppingCart.push("Манго"); //=> +2й элемент

    // удаляем значения в старом массиве
    fruits.pop() //=> удаляется последний элемент массива, "Манго"

    // что в fruits?
    console.log( fruits.length ); // ? => 4
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

function camelize (str) {
    const arr = str.split('-');
    return arr.concat(
        arr.splice(1).map(item => {
            return item.charAt(0).toUpperCase() + item.slice(1);        
        })
    )
    .join('');
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

function copySorted (arr) {
    return arr.slice().sort();
}

/*
    6)
    Написать функцию, которая считает сумму элементов массива кратных числу 2.

    Например:

    sum(1, 2, 3, 4, 5) // 6
    sum(3, 8, 1, 40, 6) // 54
*/

function sum (...args) { //в примере выеше передаются аргументы, не масси, поэтому используем распространение
    return args.reduce((prevValue, value) => (value % 2) === 0 ? prevValue + value : prevValue, 0);
}
