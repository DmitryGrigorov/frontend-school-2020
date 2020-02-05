/*
    1)
    Напишите функцию lwTail(str), возвращающую строку str в нижнем регистры все буквы кроме первой. Например:

    lwTail("ВАСЯ") == "Вася";
*/

function lwTail(str){
    return str[0]+str.slice(1).toLowerCase();
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
function palindrome(word){
    return word.toLowerCase() === word.toLowerCase().split('').reverse().join('');
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

    shoppingCart.push("Банан"); //fruits = ["Яблоки", "Груша", "Апельсин", "Банан"]

    shoppingCart.push("Манго"); //fruits = ["Яблоки", "Груша", "Апельсин", "Банан", "Манго"]

    // удаляем значения в старом массиве
    fruits.pop()

    // что в fruits?
    console.log( fruits.length ); // fruits.length = 4, fruits = ["Яблоки", "Груша", "Апельсин", "Банан"]
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
function camelize(str){
    let words = str.split("-"); //если дефис в начале строки, words[0]=""
    let wordsUp = words.splice(1).map(item => item[0].toUpperCase() + item.slice(1));
    wordsUp.unshift(words[0]);

    return wordsUp.join("");
}
console.log(camelize("background-color"));

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
    return sortedArr = arr.slice().sort(); //работаем с клоном массива
}
let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);

//alert( sorted ); // CSS, HTML, JavaScript
//alert( arr ); // HTML, JavaScript, CSS (без изменений)
/*
    6)
    Написать функцию, которая считает сумму элементов массива кратных числу 2.

    Например:

    sum(1, 2, 3, 4, 5) // 6
    sum(3, 8, 1, 40, 6) // 54
*/
function sum(arr){
    let sum=0;
    let evenArr = arr.filter(function(number) {
        return number%2 === 0;
    });
    evenArr.forEach(function(item){
        sum=sum+item;
    });
}
let array = [3, 8, 1, 40, 6];
sum(array); // 54


