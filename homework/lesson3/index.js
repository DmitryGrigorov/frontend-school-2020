/*
    1)
    Напишите функцию lwTail(str), возвращающую строку str в нижнем регистры все буквы кроме первой. Например:

    lwTail("ВАСЯ") == "Вася";
*/

const lwTail = str => 
    str.trim()[0].toUpperCase() +
    str.trim().slice(1).toLowerCase();

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

const isPalindrome = str =>
  str.toLowerCase() === str.toLowerCase().split("").reverse().join("");

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

    В shoppingCart будет находится массив ["Яблоки", "Груша", "Апельсин", "Банан"]
    В fruits будет находится массив ["Яблоки", "Груша", "Апельсин", "Банан"]
    При добавлении или удалении из одного массива данные изменяются в обоих
    fruits.length = 4
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

const camelize = str =>
  str
    .split("-")
    .map((value, index) =>
      index === 0 ? value : value[0].toUpperCase() + value.slice(1)
    )
    .join("");

/*
    5)
    У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.

    Создайте функцию copySorted(arr), которая будет возвращать такую копию.

    let arr = ["HTML", "JavaScript", "CSS"];

    let sorted = copySorted(arr);

    alert( sorted ); // CSS, HTML, JavaScript
    alert( arr ); // HTML, JavaScript, CSS (без изменений)
*/

const copySorted = (arr = ["HTML", "JavaScript", "CSS"]) => {
  const sorted = [...arr].sort();
  alert("Отсортированный массив: " + sorted);
  alert("Первоначальный массив: " + arr);
};

/*
    6)
    Написать функцию, которая считает сумму элементов массива кратных числу 2.

    Например:

    sum(1, 2, 3, 4, 5) // 6
    sum(3, 8, 1, 40, 6) // 54
*/

function sum(...rest) {
  return rest.flat().reduce((previous, current) => {
    return current % 2 === 0 ? previous + current : previous;
  }, 0);
}
