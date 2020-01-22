/*
    1)
    Напишите функцию lwTail(str), возвращающую строку str в нижнем регистры все буквы кроме первой. Например:

    lwTail("ВАСЯ") == "Вася";
*/
function lwTail(str){
    return str[0].toUpperCase()+str.slice(1).toLowerCase();
}
// alert(lwTail(prompt('Введите строку')));

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

function palindrome(str = ''){
    if(str.length < 3)
        return false;
    str = str.toUpperCase();
    
    return (str == str.split('').reverse().join(''));
}
// console.log('"racecar" is palindrome: ' + palindrome('racecar'));// === true
// console.log('"Anna" is palindrome: ' + palindrome('Anna'));// === true
// console.log('"table" is palindrome: ' + palindrome('table'));// === false
// console.log('"John" is palindrome: ' + palindrome('John'));// === false

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

    Код вернет: 4. shoppingCart не копия, а ссылка на массив fruits
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
    let arr = str.split('-');

    for (let i=1; i<arr.length; i++)
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);

    return arr.join(''); 
}
// console.log(camelize("background-color"));
// console.log(camelize("list-style-image"));
// console.log(camelize("-webkit-transition"));

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

// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (без изменений)

/*
    6)
    Написать функцию, которая считает сумму элементов массива кратных числу 2.

    Например:

    sum(1, 2, 3, 4, 5) // 6
    sum(3, 8, 1, 40, 6) // 54
*/

function sum(){
    return Object.values(arguments).reduce(function(summary, current){
            if(typeof(current) == 'number' && current % 2 == 0)
                    return summary = summary + current;
            return summary;    
        }, 0);

}

// console.log(sum(1, 2, 3, 4, 5)); // 6
// console.log(sum(3, 8, 1, 40, 6)); // 54