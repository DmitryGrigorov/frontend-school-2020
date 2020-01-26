/*
    1)
    Напишите функцию lwTail(str), возвращающую строку str в нижнем регистры все буквы кроме первой. Например:

    lwTail("ВАСЯ") == "Вася";
*/
    function lwTail(str) {
        let capitalize = str[0].toUpperCase() + str.slice(1).toLowerCase();
        return capitalize;
    }
    let newStr = lwTail("ВАСЯ");
    console.log(newStr);

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
        return word.toLowerCase() === word.toLowerCase().split('').reverse().join('');
    }
    console.log(palindrome('racecar'));
    console.log(palindrome('Anna'));
    console.log(palindrome('table'));
    console.log(palindrome('John'));


    // 3)
    //Что выведет следующий код?
    let fruits = ["Яблоки", "Груша", "Апельсин"];

    // добавляем новое значение в "копию"
    let shoppingCart = fruits;

    shoppingCart.push("Банан");

    shoppingCart.push("Манго");

    // удаляем значения в старом массиве
    fruits.pop()

    // что в fruits?
    console.log( fruits.length );  
    /*
    Выведет 4, так как к переменной shoppingCart мы присваеваем ссылку 
    на массив fruits, затем добавляем два эл-та "Банан" и "Манго", 
    после этого удаляем один эл-т из массива "Манго" и поэтому длина 
    массива становится 4, так как осталось 4 элемента
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
        return str.split('-').map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join(''); 
    }
    console.log(camelize("background-color"));

/*
    5)
    У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.

    Создайте функцию copySorted(arr), которая будет возвращать такую копию.

    let arr = ["HTML", "JavaScript", "CSS"];

    let sorted = copySorted(arr);

    alert( sorted ); // CSS, HTML, JavaScript
    alert( sorted ); // CSS, HTML, JavaScript
*/ 
    function copySorted(arr) {
        let sorted = arr.slice().sort();
        return sorted;
    }

    let arr = ["HTML", "JavaScript", "CSS"];
    let copyArr = copySorted(arr);
    console.log(arr);
    console.log(copyArr);

/*
    6)
    Написать функцию, которая считает сумму элементов массива кратных числу 2.

    Например:

    sum(1, 2, 3, 4, 5) // 6
    sum(3, 8, 1, 40, 6) // 54
*/
    function findSum(arr) {
        let newArr = arr.filter(function(x) {
            return x % 2 == 0;
        });
        let str = newArr.reduce(function(x, y) {
            return x + y;
        });
        return str;
    };
    let a = [3, 8, 1, 40, 6];
    console.log(findSum(a));
