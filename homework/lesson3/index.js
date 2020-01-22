/*
    1)
    Напишите функцию lwTail(str), возвращающую строку str в нижнем регистры все буквы кроме первой. Например:

    lwTail("ВАСЯ") == "Вася";

    Решение:
    
    function lwTail(str) {
      return str[0] + str.slice(1).toLowerCase();
    }
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

    Решение:

    function wordСheck(word) {
      let wordReverse = word.toLowerCase().split('').reverse().join('');
  
      return word.toLowerCase() === wordReverse;
    }
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

    Решение:

    Консоль выведет 4. Массив - это объект, следовательно обе ссылки ведут на один массив. 

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

    Решение:

    function camelize(str) {
      return str.split('-').map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join('');
    }
*/

/*
    5)
    У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.

    Создайте функцию copySorted(arr), которая будет возвращать такую копию.

    let arr = ["HTML", "JavaScript", "CSS"];

    let sorted = copySorted(arr);

    //alert( sorted ); // CSS, HTML, JavaScript
    //alert( arr ); // HTML, JavaScript, CSS (без изменений)

    Решение:

    function copySorted(array) {
      return array.slice().reverse();
    }
*/

/*
    6)
    Написать функцию, которая считает сумму элементов массива кратных числу 2.

    Например:

    sum(1, 2, 3, 4, 5) // 6
    sum(3, 8, 1, 40, 6) // 54

    Решение:

    let arr1 = [1, 2, 3, 4, 5];
    let arr2 = [3, 8, 1, 40, 6];

    function sum(arr) {
      let evenArr = arr.filter(function(number) {
        return number % 2 === 0;
      })

      let sumArr = evenArr.reduce(function(sum, current) {
        return sum + current;
      }, 0);

      return sumArr;
    } 
*/
