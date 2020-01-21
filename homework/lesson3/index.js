/*
    1)
    Напишите функцию lwTail(str), возвращающую строку str в нижнем регистры все буквы кроме первой. Например:

    lwTail("ВАСЯ") == "Вася";
*/

// ===================== Решение Задание 1 ======================= //

function lwTail(str) {
    let newStr = str[0] + str.substring(1).toLowerCase();
    console.log(newStr);    
}

lwTail("НАТАША");

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

// ===================== Решение Задание 2 ======================= //

function palindrome(str) {
    return str == str.split('').reverse().join('');
}

console.log(palindrome("АННА"));
console.log(palindrome("Анна"));

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

// ===================== Решение Задание 3 ======================= //

let fruits = ["Яблоки", "Груша", "Апельсин"];
let shoppingCart = fruits;
shoppingCart.push("Банан");
shoppingCart.push("Манго");
fruits.pop();
console.log(fruits); // Во fruits массив  ["Яблоки", "Груша", "Апельсин", "Банан"]
console.log(fruits.length); // Длина массива - 4.

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

// ===================== Решение Задание 4 ======================= //

function camelize(str) {
    
    let array = str.split('');
    array.forEach(element => {
       if (element === "-") {
           let index = array.indexOf(element);
           array.splice(index,2,array[index+1].toUpperCase());
       }
    }); 
    return array.join('');
}

//return str[findIndex+1].toUpperCase();
camelize("background-color");
camelize("list-style-image");
camelize("-webkit-transition");


/*
    5)
    У нас есть массив строк arr. Нужно получить отсортированную копию, 
    но оставить arr неизменённым.

    Создайте функцию copySorted(arr), которая будет возвращать такую копию.

    let arr = ["HTML", "JavaScript", "CSS"];

    let sorted = copySorted(arr);

    alert( sorted ); // CSS, HTML, JavaScript
    alert( arr ); // HTML, JavaScript, CSS (без изменений)
*/

// ===================== Решение Задание 5 ======================= //

let arr = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
    return arr.slice().sort();
}
let sorted = copySorted(arr);
//alert( sorted );
//alert( arr );



/*
    6)
    Написать функцию, которая считает сумму элементов массива кратных числу 2.

    Например:

    sum(1, 2, 3, 4, 5) // 6
    sum(3, 8, 1, 40, 6) // 54
*/

// ===================== Решение Задание 6 ======================= //

function sum(...arg) {
    return arg.reduce(function(sum, current) {
        
        if (current % 2 == 0) {
            sum = sum + current;
        }
        return sum;
    }, 0);    
}
sum(1, 2, 3, 4, 5);
sum(3, 8, 1, 40, 6);