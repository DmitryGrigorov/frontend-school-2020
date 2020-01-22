/*
    1)
    Напишите функцию lwTail(str), возвращающую строку str в нижнем регистры все буквы кроме первой. Например:

    lwTail("ВАСЯ") == "Вася";
*/

// function lwTail(str) {
//     return str[0].toUpperCase() + str.slice(1).toLowerCase();
// };

// alert(lwTail("ВАСЯ"));

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

    // function palindrome(str) {
    //     const str2 = str.toLowerCase();
    //     return str2 === str2.split('').reverse().join('');
    // }

    // alert(palindrome('racecar')); 
    // alert(palindrome('Anna'));
    // alert(palindrome('table'));
    // alert(palindrome('John'));
    
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

// Массив является объектом и, следовательно, ведёт себя как объект.
// При копировании массива мы копируем ссылку на него.
// Значит fruits и shoppingCart имеют ссылки на один и тот же массив.

// Тогда:
// fruits = ["Яблоки", "Груша", "Апельсин", "Банан"];

// console.log( fruits.length ); //4

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

// function camelize(str) {
//     let arr = str.split('-');
//     let arrCase = arr.map(function(item, index) {
//         return index === 0 ? item : item[0].toUpperCase() + item.slice(1);
//     });
//     return arrCase.join('');
// }

// console.log(camelize("background-color")); //'backgroundColor'
// console.log(camelize("list-style-image")); // 'listStyleImage';
// console.log(camelize("-webkit-transition")); //'WebkitTransition';

/*
    5)
    У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.

    Создайте функцию copySorted(arr), которая будет возвращать такую копию.

    let arr = ["HTML", "JavaScript", "CSS"];

    let sorted = copySorted(arr);

    alert( sorted ); // CSS, HTML, JavaScript
    alert( arr ); // HTML, JavaScript, CSS (без изменений)
*/
    
    // function copySorted(arr) {
    //     return arr.slice().sort();
    // }

    // let arr = ["HTML", "JavaScript", "CSS"];

    // let sorted = copySorted(arr);

    // alert( sorted ); // CSS, HTML, JavaScript
    // alert( arr ); // HTML, JavaScript, CSS (без изменений)

/*
    6)
    Написать функцию, которая считает сумму элементов массива кратных числу 2.

    Например:

    sum(1, 2, 3, 4, 5) // 6
    sum(3, 8, 1, 40, 6) // 54
*/

// function sum(arr) {
//     return arr.reduce((summa, current) => (current % 2 === 0) ? summa + current : summa , 0);
// }

// alert(sum([1, 2, 3, 4, 5])); // 6

// alert(sum([3, 8, 1, 40, 6])); // 54
