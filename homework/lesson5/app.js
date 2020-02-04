// Первые две задачи на понимание рекурсии.

/*
  1) Напишите функцию sumTo(n), которая вычисляет сумму чисел рекурсивно 1 + 2 + ... + n.

  sumTo(1) = 1
  sumTo(2) = 2 + 1 = 3
  sumTo(3) = 3 + 2 + 1 = 6
  sumTo(4) = 4 + 3 + 2 + 1 = 10

  //Решение:

  function sumTo(n) {
    return (n == 1) ? 1 : (n + sumTo(n - 1));
  }
*/

/*
  2)
  Последовательность чисел Фибоначчи определяется формулой Fn = Fn-1 + Fn-2. То есть, следующее число получается как сумма двух предыдущих.

  Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3) и так далее: 1, 1, 2, 3, 5, 8, 13, 21....

  Числа Фибоначчи тесно связаны с золотым сечением и множеством природных явлений вокруг нас.

  Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.

  Пример работы:
  function fib(n) {  ваш код }

  alert(fib(3)); // 2
  alert(fib(7)); // 13
  alert(fib(77)); // 5527939700884757

  //Решение:

  function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
  }
*/

/* 
  3) Следующая функция вычисляет сумму передаваемых ей аргументов,
     используя для этой цели объект arguments:
  
  function sum() {
    let sum = 0;
    for(let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }

    return sum;
  }

  // Examples:

  console.log(sum(1, 2, 3));  // 6
  console.log(sum(5, 5));  // 10
  console.log(sum(10, 20, 3, 7)); // 40


  Используя rest-операторы, перепишите эту функцию так, чтобы не использовать arguments.


  //Решение:

  function sum(...rest) {
    let sum = 0;
    for(let i = 0; i < rest.length; i++) {
      sum += rest[i];
    }

  return sum;
}
*/

/*
  4) Напишите функцию add, которая работает, как на примере:

  add(2, 5) // 7
  add(2)(5) // 7

  //Решение:

  function add(a, b){
    return a && b ? a + b : function(c) { return a + c; };
  }
*/

/*
  5)
  Написать функцию sortOdd(), которая сортирует только четные числа в массиве:

  // Examples:
  sort([9, 8, 7, 6, 5, 4, 3, 2, 1]) // [9, 2, 7, 4, 5, 6, 3, 8, 1]

  // Решение 

  let arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];

  function sortOdd(arr) {
    let sortArr = [];

    arr.forEach(function (i) {
      if (i % 2 === 0) {
        sortArr.push(i);
      }
    });

    sortArr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 0) {
        arr[i] = sortArr.shift();
      }
    }

    return arr;
  }
*/

/*
  6)
  Написать функцию findMax(), которая найдет максимальный элемент из аргументов:

  // Examples:
  findMax(9, 8, 7, 6, 5, 4, 3, 2, 1) // 9
  findMax(0, 2, 12, 4, 5) // 12

  //Решение:

  function findMax(...arg) {
    return Math.max(...arg);
  }

  alert(findMax(9, 8, 7, 6, 5, 4, 3, 2, 1));
*/

/*
  7)
  Написать функцию findMin(), которая найдет минимальный элемент из аргументов:

  // Examples:
  findMax(9, 8, 7, 6, 5, 4, 3, 2, 1) // 1
  findMax(0, 2, 12, 4, 5) // 0

  //Решение:

  function findMin(...arg) {
    return Math.min(...arg);
  }

  alert(findMin(0, 2, 12, 4, 5));
*/

/*
  8)
  Написать функцию pushZeros(), которая сдвигает все элементы со значением '0' в конец массива:

  // Examples:
  pushZeros([0, 9, 0, 8, 7, 0, 6, 5, 4, 3, 2, 1]) // [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 0, 0]
  pushZeros([0, 2, 12, 4, 5]) // [2, 12, 4, 5, 0]

  //Решение:

  function pushZeros (arr) {
    return arr.sort((a) => a > 0 ? -1 : 1);
  }
*/
