/*
    1)
    Напишите функцию lwTail(str), возвращающую строку str в нижнем регистры все буквы кроме первой. Например:

    lwTail("ВАСЯ") == "Вася";
*/
/*  ---------
    1) Ответ:

    const lwTail = str => {
        let str2,i=0;
        str2 =str[0];
        while (i<str.length) {
            if (i>0) {
                str2 += str[i].toLowerCase();
            }
            i++;
        }
        return str2;
    }
    
    console.log(lwTail("ВАСЯ HGFJGHDKGH kddkdk FJDKFJ"));
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
*/
/*  ---------
    2) Ответ:

    const palindrome = str => {
        return (str.toLowerCase() === str.toLowerCase().split('').reverse().join(''));
    };
    console.log(palindrome('1nna'));
*/
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
    console.log( fruits.length ); //  ["Яблоки", "Груша", "Апельсин", "Банан"]

 */
/*  ---------
    3) Ответ:

        ["Яблоки", "Груша", "Апельсин", "Банан"]
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
/*
    ---------
    4) Ответ:

    const camelize = str => {
        let str2 = '';
        let i = 0;
        str2 = str.split('');
        while(i < str2.length) {
            if (str2[i] === '-') {
                delete str2[i];
                str2[i+1] = str2[i+1].toUpperCase();
            }
            i++;
        }
        return str2.join('');
    }

        console.log(camelize('-webkit-transition'));

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

/* ---------
    5) Ответ:

    let arr = ["HTML", "JavaScript", "CSS"];

    let copySorted = arr => {
            let arr2 = [];
            let i =0;
            while (i < arr.length) {
                arr2[i] = arr[i];
                i++;
            }
            return arr2.sort();
        }
        let sorted = copySorted(arr);
        console.log(sorted);
        console.log(arr);
*/
/*
        6)
        Написать функцию, которая считает сумму элементов массива кратных числу 2.

        Например:
        
        sum(1, 2, 3, 4, 5) // 6
        sum(3, 8, 1, 40, 6) // 54
    */

/* ---------
   6) Ответ:
    
    let sum = [3, 8, 1, 40, 6]; 

    const sumFun = arr => {
        let i = 0;
        let sum = 0;
        while (i < arr.length) {
            if (arr[i] % 2 === 0) {
                sum += arr[i];
            }
            i++;
        }
        return sum;
    };
    let s = sumFun(sum);
    console.log(s);

    */
