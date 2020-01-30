/*
    1)
    Напишите функцию lwTail(str), возвращающую строку str в нижнем регистры все буквы кроме первой. Например:

    lwTail("ВАСЯ") == "Вася";
*/

const lwTail = (str) => {
    debugger
    str = str[0] + str.slice(1, ).toLowerCase();
    return str;
}

lwTail('кАк ДЕла?');

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

let palindrome = (str) => {
    let str1 = str.replace(/[^A-Za-zА-Яа-яЁё]/g, "").toLowerCase();
    let newStr = ``;
    for (let i = str1.length; i > 0; i--){
        newStr += str1[i-1];
    }
    return newStr === str1;
};

palindrome('а роза, упала на лапу Азора');

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

//Так как массивы являются одним из видов Объекта в JS, то обе переменные ссыkаются на один и тот же массив, в fruits будет "Яблоки", "Груша", "Апельсин", "Банан", а fruits.length === 4;

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

const camelize = (str) => {
    let arr = str.split('-');
    for (let i = 1; arr.length > i; i++) {
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    }
    let newStr = arr.join('');
    return newStr;
}

camelize("background-color");

/*
    5)
    У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.

    Создайте функцию copySorted(arr), которая будет возвращать такую копию.

    let arr = ["HTML", "JavaScript", "CSS"];

    let sorted = copySorted(arr);

    alert( sorted ); // CSS, HTML, JavaScript
    alert( arr ); // HTML, JavaScript, CSS (без изменений)
*/

let arr = ["HTML", "JavaScript", "CSS"];

const copySorted = (arr) => {
    let arrSort = arr.slice(0).sort();
    return arrSort;
}

let sorted = copySorted(arr);

console.log(sorted);
console.log(arr);

/*
    6)
    Написать функцию, которая считает сумму элементов массива кратных числу 2.

    Например:

    sum(1, 2, 3, 4, 5) // 6
    sum(3, 8, 1, 40, 6) // 54
*/

const sum = (...args) => {
    debugger
    let num = 0;
    for (let i = 0; args.length > i; i++) {
        if(!(args[i]%2)) {
            num += +args[i]; 
        }
    }
    return num;
};

sum(3, 8, 1, 40, 6);