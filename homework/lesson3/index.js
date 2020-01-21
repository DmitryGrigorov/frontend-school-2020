/*
    1)
    Напишите функцию lwTail(str), возвращающую строку str в нижнем регистры все буквы кроме первой. Например:

    lwTail("ВАСЯ") == "Вася";
*/

function lwTail(str){
    return str[0]+str.substr(1).toLowerCase();
}
//alert(lwTail("ПРИВЕТ"));
console.log("1) " + lwTail("ПРИВЕТ") );

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
    return text.toLowerCase() == text.toLowerCase().split("").reverse().join("");
}
//alert(palindrome('John'));
console.log("2) " + palindrome('John') );

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

console.log("3) fruits и shoppingCart ссылаются на один и тот же массив. Поэтому добавляя в любой из них элементы или удаляя - меняется один источник.");
console.log("На экран будет выведено число 4 - это длина массива fruits/shoppingCart [\"Яблоки\", \"Груша\", \"Апельсин\", \"Банан\"] ");

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
    return str.split("-").map( e => e[0].toUpperCase()+e.substr(1) ).join('');
}
//alert(camelize("background-color"));
console.log("4) camelize(\"background-color\") = " + camelize("background-color"));

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
    return arr.slice().sort();
}
let arr = ["HTML", "JavaScript", "CSS"];
console.log("5) sorted = " + copySorted(arr) );
console.log(" orig arr = " + arr);

/*
    6)
    Написать функцию, которая считает сумму элементов массива кратных числу 2.

    Например:

    sum(1, 2, 3, 4, 5) // 6
    sum(3, 8, 1, 40, 6) // 54
*/

function sum(arr){
    return arr.reduce( (sum, current) => current%2==0 ? sum+current : sum , 0);
}
//alert(sum([1,2,3,4,5]));
console.log("6) sum([1,2,3,4,5]) = " + sum([1,2,3,4,5]));