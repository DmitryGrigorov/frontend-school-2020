/*
    1)
    Напишите функцию lwTail(str), возвращающую строку str в нижнем регистры все буквы кроме первой. Например:

    lwTail("ВАСЯ") == "Вася";
*/
    function lwTail(str)
    {
        if (!str) return str;
        return str[0].toUpperCase() + str.slice(1).toLowerCase();
    }
    console.log(lwTail("TEST"));
/*
    2)
    Дана строка; нужно написать функцию, которая позволяет вернуть значение true,
    если строка является палиндромом, и false — если нет. 
    При этом нужно учитывать пробелы и знаки препинания.
///////////////////////////////////////
    palindrome('racecar') === true
    palindrome('Anna') === true
    palindrome('table') === false
    palindrome('John') === false
*/
    function palindrome(str)
    {
        let strReverse = str.split('').reverse().join('').toLowerCase();
        if(strReverse === str.toLowerCase())
        {
            return true;
        }
        else 
        {
            return false;
        }
    }
    console.log(palindrome('racecar racecar'));
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
    console.log("Длина масива 4, так это не копия, а ссылка на массив");
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

    function camelize(str)
    {
        return str.split('-').map((word, ind)=> ind==0?word:(word[0].toUpperCase()+word.slice(1).toLowerCase())).join('');
    }
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
    function copySorted(arr)
    {
        return arr.slice().sort();
    }
     let arr = ["HTML", "JavaScript", "CSS"];

    let sorted = copySorted(arr);

    console.log( sorted ); // CSS, HTML, JavaScript
    console.log( arr ); // HTML, JavaScript, CSS (без изменений)
/*
    6)
    Написать функцию, которая считает сумму элементов массива кратных числу 2.

    Например:

    sum(1, 2, 3, 4, 5) // 6
    sum(3, 8, 1, 40, 6) // 54
*/
    function sum(...args)
    {
        let result=0;
        let arr = args;
        for (let val of arr)
        {
            if(val%2==0)
                result+=val;
        }
        return result;
    }
console.log(sum(1, 2, 3, 4, 5));