/*
    1)
    Напишите функцию lwTail(str), возвращающую строку str в нижнем регистры все буквы кроме первой. Например:
    lwTail("ВАСЯ") == "Вася";

    Делаем допущение, что на вход приходят только строки из одного слова

    function lwTail(s) {
      return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
    }

    console.log(lwTail("ВАСЯ") === "Вася");
    console.log(lwTail("вася") === "Вася");
    console.log(lwTail("") === "");


    */
/*
    2)
    Дана строка; нужно написать функцию, которая позволяет вернуть значение true,
    если строка является палиндромом, и false — если нет.
    При этом нужно учитывать пробелы и знаки препинания.
    palindrome('racecar') === true
    palindrome('Anna') === true
    palindrome('table') === false
    palindrome('John') === false

    function palindrome(s) {
    s = s.toLowerCase();
    return (
      s ===
      s
        .split("")
        .reverse()
        .join("")
      );
    }

    console.log(palindrome("racecar") === true);
    console.log(palindrome("Anna") === true);
    console.log(palindrome("table") === false);
    console.log(palindrome("John") === false);

    */

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

    4
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

    // Функция из первого задания
    function lwTail(s) {
      return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
    }

    function camelize(s) {
      s = s.split("-");
      return (
        s[0] +
        s
          .slice(1)
          .map(item => lwTail(item))
          .join("")
      );
    }

    console.log(camelize("background-color") == "backgroundColor");
    console.log(camelize("list-style-image") == "listStyleImage");
    console.log(camelize("-webkit-transition") == "WebkitTransition");
*/

/*
    5)
    У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.
    Создайте функцию copySorted(arr), которая будет возвращать такую копию.
    let arr = ["HTML", "JavaScript", "CSS"];
    let sorted = copySorted(arr);
    alert( sorted ); // CSS, HTML, JavaScript
    alert( arr ); // HTML, JavaScript, CSS (без изменений)


    function copySorted(arr) {
      return arr.slice().sort();
    }
*/

/*
    6)
    Написать функцию, которая считает сумму элементов массива кратных числу 2.
    Например:
    sum(1, 2, 3, 4, 5) // 6
    sum(3, 8, 1, 40, 6) // 54

    function sum() {
      let args = [...arguments];
      return args.filter(x => x % 2 === 0).reduce((s, c) => s + c, 0);
    }

    console.log(sum(1, 2, 3, 4, 5) === 6);
    console.log(sum(3, 8, 1, 40, 6) === 54);
*/

