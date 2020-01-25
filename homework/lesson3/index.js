/*
    1)
    Напишите функцию lwTail(str), возвращающую строку str 
    в нижнем регистры все буквы 
    кроме первой. Например: lwTail("ВАСЯ") === "Вася";

      Способ 1. 
    function lwTail(str) {
        return str[1].toLowerCase() + str[2].toLowerCase() + str[3].toLowerCase();
    }
    alert (lwTail("ВАСЯ")); // ася
 
      Способ 1.1 
    function lwTail(str) {
        return str[1] + str[2] + str[3];
    }
    alert (lwTail("ВАСЯ").toLowerCase()); // ася 
 
      Способ 2.   
    function lwTail(str) {
        if (!str) return str;
        return str.slice(1).toLowerCase();
        }
    alert (lwTail("ВАСЯ")); // ася 

      Способ 3. 
    function lwTail(str) {
        return str.substring(1, 4).toLowerCase();
    }
    alert (lwTail("ВАСЯ")); // ася 

      Способ 4. 
    function lwTail(str) {
        return str.substr(1, 4).toLowerCase();
    }
    alert (lwTail("ВАСЯ")); // ася
*/
/*
      Способ 5. (На случай если имелось ввиду вернуть все имя с заглавной буквы) 
    function lwTail(str) {
        return str[0] + str.slice(1).toLowerCase(); 
    }
    alert (lwTail("ВАСЯ"));  // Вася

      Способ 6. // (На случай если имелось ввиду вернуть все имя с заглавной буквы) 
    function lwTail(str) {
        return str[0] + str.substr(1, 4).toLowerCase(); 
    }
    alert (lwTail("ВАСЯ")); // Вася
 
      Способ 7. // (На случай если имелось ввиду вернуть все имя с заглавной буквы) 
    function lwTail(str) {
        return str[0] + str.substring(1, 4).toLowerCase(); 
    }
    alert (lwTail("ВАСЯ")); // Вася 
 
      Способ 8. // (На случай если имелось ввиду вернуть все имя с заглавной буквы) 
    function lwTail(str) {
        return str[0] + str[1].toLowerCase() + str[2].toLowerCase() + str[3].toLowerCase(); 
    }
    alert (lwTail("ВАСЯ")); // Вася
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

      Способ 1.
    function palindrome(str) {
        return str.toLowerCase() === str.toLowerCase().split('').reverse().join('');
    }
    alert(palindrome('racecar')); // true
    alert(palindrome('Anna')); // true
    alert(palindrome('table')); // false
    alert(palindrome('John')); // false


      Способ 2. 
    function palindrome(str) {
        str = str.toLowerCase();
        return str === str.split('').reverse().join('');
    }
    alert(palindrome('racecar')); // true
    alert(palindrome('Anna')); // true
    alert(palindrome('table')); // false
    alert(palindrome('John')); // false
*/ 
 
/* 
// 3) Что выведет следующий код?

    let fruits = ["Яблоки", "Груша", "Апельсин"]; //alert(fruits); Выведет все элементы массива: Яблоки,Груша,Апельсин
    
// добавляем новое значение в "копию"

    let shoppingCart = fruits;

    shoppingCart.push("Банан");

    shoppingCart.push("Манго");

// удаляем значения в старом массиве
    fruits.pop();

    // что в fruits?
    //console.log(fruits.length); // ?
     
     // получала значения через alert
     alert(fruits.length);// 4
     alert(fruits); // Яблоки,Груша,Апельсин,Банан

     //Так как массив fruits является объектом, то при его копировании в shoppingCart новый массив берет ссылку на старый (fruits), 
     //поэтому все добавления в новый массив (shoppingCart) отразились на источнике (fruits), таким образом, при удалении
     //последнего элемента из старого массива мы получили удаление последнего элемента из добавленных в новый (удалили Манго),
     //То есть, при работе с копией массива оригинал массива будет наследовать все изменения и наоборот.
/*

/*   4) 
    //Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

    //То есть дефисы удаляются, а все слова после них получают заглавную букву.

    //Примеры:
    camelize("background-color") == 'backgroundColor';
    camelize("list-style-image") == 'listStyleImage';
    camelize("-webkit-transition") == 'WebkitTransition';

    //P.S. Подсказка: используйте split, чтобы разбить строку на массив символов,
    //потом переделайте всё как нужно и методом join соедините обратно.


      Способ 1.
    function camelize(str) {
        const str1 = str.split('-');                                       //удаление дефисов
        const arr = str1.map((text, index) => 
            index === 0 ? text : text[0].toUpperCase() + text.slice(1));   //разбивка на части и перевод в верхний регистр символов после дефисов
        return arr.join('');                                               //объединение всех элементов в строку
    }
    alert(camelize("my-short-string")); // myShortString
    alert(camelize("background-color")); // backgroundColor 
    alert(camelize("list-style-image")); // listStyleImage
    alert(camelize("-webkit-transition")); // WebkitTransition 


      Способ 2.
    function camelize(str) {
        const str1 = str.split('-').map(
            function (text, index) {
                return index === 0 ? text : text[0].toUpperCase() + text.slice(1); 
            });
        return str1.join('');
    }
    alert(camelize("my-short-string")); // myShortString
    alert(camelize("background-color")); // backgroundColor 
    alert(camelize("list-style-image")); // listStyleImage
    alert(camelize("-webkit-transition")); // WebkitTransition    
*/

/*
    5)
    У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.

    Создайте функцию copySorted(arr), которая будет возвращать такую копию.

    let arr = ["HTML", "JavaScript", "CSS"];

    let sorted = copySorted(arr);

    alert( sorted ); // CSS, HTML, JavaScript
    alert( arr ); // HTML, JavaScript, CSS (без изменений)

      Решение.
    let arr = ["HTML", "JavaScript", "CSS"];
    let sorted = copySorted(arr);
    function copySorted(arr) {
        return arr.slice().sort();  // arr.slice() создает копию массива для дальнейших преобразований, которые не изменят исходный массив
    }
    alert(sorted);    // CSS, HTML, JavaScript
    alert(arr);       // HTML, JavaScript, CSS (без изменений)
*/ 

/*
    6)
    Написать функцию, которая считает сумму элементов массива кратных числу 2.

    Например:

    sum(1, 2, 3, 4, 5) // 6
    sum(3, 8, 1, 40, 6) // 54

      Решение.                          // arr.reduce 34 слайд Строки и массивы
    function sum (arr) {
       return arr.reduce ((number, current) => (current % 2 === 0) ? number + current : number , 0);
           }
    alert(sum([1, 2, 3, 4, 5])); 
    alert(sum([3, 8, 1, 40, 6]));
*/