/*
    1)
    Напишите функцию lwTail(str), возвращающую строку str в нижнем регистры все буквы кроме первой. Например:

    lwTail("ВАСЯ") == "Вася";
*/
//Ответ:
/*function lwTail(str){
     return `${str[0]}${str.slice(1).toLowerCase()}`;
 }
 console.log(lwTail("ВАСЯ"));*/

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
//Ответ
//let str =  ('Racecar');
//let str2 = str.split("").reverse().join("").toLowerCase();
//let str3=(str2.includes(str2,0));
// console.log(str.toLowerCase()===str2);
function palindrome(str) {
  let str2 = str
    .split("")
    .reverse()
    .join("")
    .toLowerCase();
  let str3 = str2.includes(str2, 0);
  str.toLowerCase() === str2 ? true : false;
}

palindrome("Racecar");
// let str = 'Widget with id';

// console.log( str.indexOf(str) );

/*
   // 3)
   // Что выведет следующий код?
    
    let fruits = ["Яблоки", "Груша", "Апельсин"];

    // добавляем новое значение в "копию"
    let shoppingCart = fruits;

    shoppingCart.push("Банан");

    shoppingCart.push("Манго");

    // удаляем значения в старом массиве
    fruits.pop()

    // что в fruits?
    console.log( fruits.length ); 
    // ?
    
    //Ответ
    console.log( fruits.length ); 
    // ? Длинна массива fruits как и  shoppingCart будет ровна 4, после применения метода .pop
    console.log(shoppingCart===fruits); равно true
    Две переменные fruits и shoppingCart ссылаются на один и тот же массив.
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

/*
    5)
    У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.

    Создайте функцию copySorted(arr), которая будет возвращать такую копию.

    let arr = ["HTML", "JavaScript", "CSS"];

    let sorted = copySorted(arr);

    alert( sorted ); // CSS, HTML, JavaScript
    alert( arr ); // HTML, JavaScript, CSS (без изменений)
*/

/*
    6)
    Написать функцию, которая считает сумму элементов массива кратных числу 2.

    Например:

    sum(1, 2, 3, 4, 5) // 6
    sum(3, 8, 1, 40, 6) // 54
*/
