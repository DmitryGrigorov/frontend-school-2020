/*
    1)
    Напишите функцию lwTail(str), возвращающую строку str в нижнем регистры все буквы кроме первой. Например:

    lwTail("ВАСЯ") == "Вася";
*/

function lwTail(str) {
    return str[0] + str.substr(1).toLowerCase();
}
console.log( '# 1)\n'+ lwTail('лЮБОВЬ') );


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

function palindrome(str){
    return str.toLowerCase() === str.toLowerCase().split('').reverse().join('');
}
console.log('\n# 2)\n' + 'palindrome("Коту хорош и шорох уток"): ' + palindrome('Коту хорош и шорох уток'));
console.log('palindrome("Коту хорош и шорох уток."): ' + palindrome('Коту хорош и шорох уток.'));


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

console.log('\n# 3) ' + 'Будет выведено число 4 - количество элементов в массиве fruits (["Яблоки", "Груша", "Апельсин", "Банан"])');
console.log('Переменные shoppingCart и fruits ссылаются на один и тот же объект (массив).');


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
    let arr = str.split('-');
    let index;
    for (index = 0; index < arr.length; ++index){
        arr[index] = index > 0 ?
            arr[index][0].toUpperCase() + arr[index].substr(1, arr[index].length - 1 ) :
            arr[index]
    }
    return arr.join('');
}

console.log('\n# 4) ' + 'camelize("background-color"): ' + camelize('background-color'));
console.log('camelize("list-style-image"): ' + camelize('list-style-image'));
console.log('camelize("-webkit-transition"): ' + camelize('-webkit-transition'));


/*
    5)
    У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.

    Создайте функцию copySorted(arr), которая будет возвращать такую копию.

    let arr = ["HTML", "JavaScript", "CSS"];

    let sorted = copySorted(arr);

    alert( sorted ); // CSS, HTML, JavaScript
    alert( arr ); // HTML, JavaScript, CSS (без изменений)
*/

function copySorted(arr){
    return arr.slice().sort();
}
let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);

console.log('\n# 5) ' + 'copySorted(arr): ' + copySorted(arr) );
console.log('                 arr: ' + arr);


/*
    6)
    Написать функцию, которая считает сумму элементов массива кратных числу 2.

    Например:

    sum(1, 2, 3, 4, 5) // 6
    sum(3, 8, 1, 40, 6) // 54
*/

function sum(arr) {
    return arr.reduce( (sum, current) =>
            current % 2 === 0 ?
                sum + current :
                sum,
        0);
}

console.log('\n# 6) ' + 'sum(1, 2, 3, 4, 5): ' + sum([1, 2, 3, 4, 5]) );
console.log('sum(3, 8, 1, 40, 6): ' + sum([3, 8, 1, 40, 6]) );