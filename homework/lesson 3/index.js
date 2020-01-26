/*
    1)
    Напишите функцию lwTail(str), возвращающую строку str в нижнем регистры все буквы кроме первой. Например:

    lwTail("ВАСЯ") == "Вася";
*/
//---------------------------------------------------------------------------------------------------------------------

// function lwTail(str) {
//     return str[0].toUpperCase() + str.slice(1).toLowerCase();
// }
// console.log(lwTail('ВАСЯ'));

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
//---------------------------------------------------------------------------------------------------------------------
//--Вариант 1------------------
// function palindrome(str) {
//     let tempString = '';
//     for (let j = str.length - 1; j >= 0; j--) {
//         tempString += str[j];
//     }
//     return tempString.toLowerCase() === str.toLowerCase();
// }
// console.log(palindrome('Anna'));

//--Вариант 2------------------
// function palindrome(str) {
//     return str
//     .split('')
//     .reverse()
//     .join('')
//     .toLowerCase() === str.toLowerCase();
// }
// console.log(palindrome('Anna'));
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
//---------------------------------------------------------------------------------------------------------------------
// Ответ 4
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
//---------------------------------------------------------------------------------------------------------------------

// function camelize(str) {
//     return str
//     .split('-')
//     .map((item, index) => index == 0 ? item : item [0].toUpperCase() + item.slice(1)).join('');
// }
// console.log (camelize('my-short-string'));

/*
    5)
    У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.

    Создайте функцию copySorted(arr), которая будет возвращать такую копию.

    let arr = ["HTML", "JavaScript", "CSS"];

    let sorted = copySorted(arr);

    alert( sorted ); // CSS, HTML, JavaScript
    alert( arr ); // HTML, JavaScript, CSS (без изменений)
*/
//---------------------------------------------------------------------------------------------------------------------

// function copySorted(array) {
//     return array.slice().sort();
// }
// let arr = ["HTML", "JavaScript", "CSS"];
// console.log(copySorted(arr));

/*
    6)
    Написать функцию, которая считает сумму элементов массива кратных числу 2.

    Например:

    sum(1, 2, 3, 4, 5) // 6
    sum(3, 8, 1, 40, 6) // 54
*/
//---------------------------------------------------------------------------------------------------------------------
//--Вариант 1-----------------------------------
// function sum(array) {
//     let sum1 = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 === 0) {
//             sum1 = sum1 + array[i];
//         }
//     }
//     return sum1;
// }
// let arr = [1, 2, 3, 4, 5];
// console.log(sum(arr));

//--Вариант 2-----------------------------------
// function sum1(array) {
//     let result = arr.reduce((sum, current) => (current % 2 === 0) ? (sum + current) : sum, 0);
//     return result;
// }
// let arr = [1, 2, 3, 4, 5];
// console.log(sum1(arr));
