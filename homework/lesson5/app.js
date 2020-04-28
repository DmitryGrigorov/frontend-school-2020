// Первые две задачи на понимание рекурсии.

/*
  1) Напишите функцию sumTo(n), которая вычисляет сумму чисел рекурсивно 1 + 2 + ... + n.

  sumTo(1) = 1
  sumTo(2) = 2 + 1 = 3
  sumTo(3) = 3 + 2 + 1 = 6
  sumTo(4) = 4 + 3 + 2 + 1 = 10
*/
/*
  --------
  1)Ответ:

  function sumTo(n) {
      if(n >= 1) {
      return n + sumTo(n-1);
      } else {
        return n;
      }
      
  };

  console.log( sumTo(3) );
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
*/
/*

  ---------
  2)Ответ:

  function fib (n) {

   if(n===1) {
      return n;
   } else if (n==2) {
      return n-1;
   } else if (n > 2) {
      return fib(n-1) + fib(n-2);
   }
  }
  console.log( fib(7));
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
*/
/*
  -------
  3)Ответ:

  function sum (...arg) {

    let sum = 0;
    for (let i = 0; i < arg.length; i++) {
      sum += arg[i];
    }
    return sum;
  }

*/
/*
  4) Напишите функцию add, которая работает, как на примере:

  add(2, 5) // 7
  add(2)(5) // 7
*/
/*
  ---------
  4)Ответ:

  function add (a,b) {
    if (b === undefined) {
      return function(b) { return a+b; };
    }
    return a+b;
  };

  console.log (add(2,5));

*/

/*
  5)
  Написать функцию sortOdd(), которая сортирует только четные числа в массиве:

  // Examples:
  sort([9, 8, 7, 6, 5, 4, 3, 2, 1]) // [9, 2, 7, 4, 5, 6, 3, 8, 1]
*/

/*
  --------
  5)Ответ:

let mass2 = [9, 8, 7, 6, 5, 4, 3, 2, 1];


  function sort(mass) {
    for (let i = 0; i < mass.length -1; i++) {
      for (let j = i; j < mass.length; j++) {
        if((mass[i] % 2 === 0)&&(mass[j] % 2 === 0) && (mass[i]>mass[j])) {
          let k = mass[i];
          mass[i] = mass[j];
          mass[j] = k;
          console.log(k);
        }
      }
    }

    return mass;
  }

  console.log(sort(mass2));
*/

/*
  6)
  Написать функцию findMax(), которая найдет максимальный элемент из аргументов:

  // Examples:
  findMax(9, 8, 7, 6, 5, 4, 3, 2, 1) // 9
  findMax(0, 2, 12, 4, 5) // 12
*/
/*

  --------
  6)Ответ:


  function findMax (...arg) {
    let k = arg[0];
    for(let i = 1; i < arg.length; i++) {
      if(k < arg[i]) {
        k = arg[i];
      }
    }
    return k;
  }

  console.log(findMax(0, 2, 12, 4, 5));
*/

/*
  7)
  Написать функцию findMin(), которая найдет минимальный элемент из аргументов:

  // Examples:
  findMax(9, 8, 7, 6, 5, 4, 3, 2, 1) // 1
  findMax(0, 2, 12, 4, 5) // 0
*/
/*
  --------
  7)Ответ:

  function findMin (...arg) {
    let k = arg[0];
    for(let i = 1; i < arg.length; i++) {
      if(k > arg[i]) {
        k = arg[i];
      }
    }
    return k;
  }

console.log(findMin(9, 8, 7, 6, 5, 4, 3, 2, 1));
*/
/*
  8)
  Написать функцию pushZeros(), которая сдвигает все элементы со значением '0' в конец массива:

  // Examples:
  pushZeros([0, 9, 0, 8, 7, 0, 6, 5, 4, 3, 2, 1]) // [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 0, 0]
  pushZeros([0, 2, 12, 4, 5]) // [2, 12, 4, 5, 0]
*/

/*
  --------
  8)Ответ:
  
  function pushZeros (mass) {

    for (let i = 0; i < mass.length -1; i++) {
      for (let j = i; j < mass.length; j++) {
        if(mass[i] === 0) {
          let k = mass[i];
          mass[i] = mass[j];
          mass[j] = k;
        }
      }
    }

    return mass;
  }

  console.log(pushZeros([0, 2, 12, 4, 5]));

*/
