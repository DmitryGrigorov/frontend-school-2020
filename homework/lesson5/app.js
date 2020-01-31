// Первые две задачи на понимание рекурсии.

/*
  1) Напишите функцию sumTo(n), которая вычисляет сумму чисел рекурсивно 1 + 2 + ... + n.

  sumTo(1) = 1
  sumTo(2) = 2 + 1 = 3
  sumTo(3) = 3 + 2 + 1 = 6
  sumTo(4) = 4 + 3 + 2 + 1 = 10
*/
// function sumTo(n) {
//     if (n == 1) return n;
//     return n + sumTo(n - 1);
// }
// console.log(sumTo(4));

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
*/

// function fib(n) {
//     return (n <=  1) ? n : fib(n-1) + fib(n-2);
// }
// console.log(fib(0));

/* 
  3) Следующая функция вычисляет сумму передаваемых ей аргументов,
     используя для этой цели объект arguments:
*/
  // function sum() {
  //   let sum = 0;
  //   for(let i = 0; i < arguments.length; i++) {
  //     sum += arguments[i];
  //   }
  //
  //   return sum;
  // }
  //
  // // Examples:
  //
  // console.log(sum(1, 2, 3));  // 6
  // console.log(sum(5, 5));  // 10
  // console.log(sum(10, 20, 3, 7)); // 40

/*
  Используя rest-операторы, перепишите эту функцию так, чтобы не использовать arguments.
*/
// function sum(...rests) {
//     return rests.reduce(((sum, current) => sum + current), 0);
// }
// console.log(sum(1, 2, 3, 7));

/*
  4) Напишите функцию add, которая работает, как на примере:

  add(2, 5) // 7
  add(2)(5) // 7
*/
// function curry(func) {
//
//     return function curried(...args) {
//         if (args.length >= func.length) {
//             return func.apply(this, args);
//         } else {
//             return function(...args2) {
//                 return curried.apply(this, args.concat(args2));
//             }
//         }
//     };
//
// }
// function curring(array) {
//     function carry(id1) {
//             return function (id2) {
//                 return id1, id2;
//             }
//         }
//
//     function sum(id1, id2) {
//         return id1 + id2;
//     }
//
//     if (array.length !== 1) {
//         return carry(sum);
//     } else {
//         return sum(array);
//     }
// }
// console.log(curring(2, 5));

/*
  5)
  Написать функцию sortOdd(), которая сортирует только четные числа в массиве:

  // Examples:
  sort([9, 8, 7, 6, 5, 4, 3, 2, 1]) // [9, 2, 7, 4, 5, 6, 3, 8, 1]
*/
// function sort0dd(array) {
//     let tempArray = [];
//     array
//         .filter((item, index) => item % 2 === 0 && tempArray.push(index))
//         .sort((a, b) => a - b)
//         .forEach((item, index) => array[tempArray[index]] = item);
//     return array;
// }
// console.log(sort0dd([9, 8, 7, 6, 5, 4, 3, 2, 1]))

/*
  6)
  Написать функцию findMax(), которая найдет максимальный элемент из аргументов:

  // Examples:
  findMax(9, 8, 7, 6, 5, 4, 3, 2, 1) // 9
  findMax(0, 2, 12, 4, 5) // 12
*/
// function findMax(...rest) {
//     rest.sort((a,b) => a - b);
//     return rest.pop();
// }
// console.log(findMax(9, 8, 7, 6, 5, 4, 3, 2, 1))


/*
  7)
  Написать функцию findMin(), которая найдет минимальный элемент из аргументов:

  // Examples:
  findMax(9, 8, 7, 6, 5, 4, 3, 2, 1) // 1
  findMax(0, 2, 12, 4, 5) // 0
*/
// function findMin(...rest) {
//     rest.sort((a,b) => a - b);
//     return rest.shift();
// }
// console.log(findMin(9, 8, 7, 6, 5, 4, 3, 2, 1))

/*
  8)
  Написать функцию pushZeros(), которая сдвигает все элементы со значением '0' в конец массива:

  // Examples:
  pushZeros([0, 9, 0, 8, 7, 0, 6, 5, 4, 3, 2, 1]) // [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 0, 0]
  pushZeros([0, 2, 12, 4, 5]) // [2, 12, 4, 5, 0]
*/
// function pushZeros(array) {
//     let tempArray = [];
//     array.filter((item) => item !== 0 && tempArray.push(item));
//     array.forEach((item) => item === 0 ? tempArray.push(item) : item);
//     return tempArray;
// }
// console.log( pushZeros([0, 9, 0, 8, 7, 0, 6, 5, 4, 3, 2, 1]))