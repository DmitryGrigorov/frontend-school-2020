// Первые две задачи на понимание рекурсии.

/*
  1) Напишите функцию sumTo(n), которая вычисляет сумму чисел рекурсивно 1 + 2 + ... + n.

  sumTo(1) = 1
  sumTo(2) = 2 + 1 = 3
  sumTo(3) = 3 + 2 + 1 = 6
  sumTo(4) = 4 + 3 + 2 + 1 = 10
*/
  function sumTo(n) {
    if (n === 1) {
      return n;
    } else {
      return sumTo(n - 1) + n;
    }
  };

  console.log('Exercise #1:');
  console.log(sumTo(1));
  console.log(sumTo(2));
  console.log(sumTo(3));
  console.log(sumTo(4));
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

  function fib(n) {
    if (n == 1 || n === 2) {
      return 1;
    } else {
      return fib(n-1) + fib(n-2);
    }
  }
  console.log('Exercise #2:');
  console.log(fib(3));
  console.log(fib(7));


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

  function sum(...args) {
    let sum = 0;
    
    for (let arg of args){
      sum += arg;
    }
    return sum;
  }

  console.log('Exercise #3:');
  console.log(sum(1, 2, 3));  // 6
  console.log(sum(5, 5));  // 10
  console.log(sum(10, 20, 3, 7)); // 40
/*
  4) Напишите функцию add, которая работает, как на примере:

  add(2, 5) // 7
  add(2)(5) // 7
*/
  function add(...args) {
    if (args.length > 1) {
      return args[0] + args[1];
    } else {
      return function (a, b)  {
        return a + b;
      };
    }

  }
  console.log('Exercise #4:');
  console.log(add(2, 5));
  console.log(add(2)(5));
/*
  5)
  Написать функцию sortOdd(), которая сортирует только четные числа в массиве:

  // Examples:
  sort([9, 8, 7, 6, 5, 4, 3, 2, 1]) // [9, 2, 7, 4, 5, 6, 3, 8, 1]
*/

  function sortOdd(arr) {
    let oddArr = [];
    for (let i = 0; i < arr.length-1; i++)  {
      
      if (arr[i] % 2 === 0) {
        oddArr.push[i];
      }
    }
    return oddArr;
  }
  console.log(sortOdd([9, 8, 7, 6, 5, 4, 3, 2, 1]));
/*
  6)
  Написать функцию findMax(), которая найдет максимальный элемент из аргументов:

  // Examples:
  findMax(9, 8, 7, 6, 5, 4, 3, 2, 1) // 9
  findMax(0, 2, 12, 4, 5) // 12
*/

  function findMax(...args) {
    return Math.max(...args);
  };
  console.log('Exercise #6:');
  console.log(findMax(9, 8, 7, 6, 5, 4, 3, 2, 1));
  console.log(findMax(0, 2, 12, 4, 5));


/*
  7)
  Написать функцию findMin(), которая найдет минимальный элемент из аргументов:

  // Examples:
  findMax(9, 8, 7, 6, 5, 4, 3, 2, 1) // 1
  findMax(0, 2, 12, 4, 5) // 0
*/

  function findMin(...args) {
    return Math.min(...args);
  };
  console.log('Exercise #7:');
  console.log(findMin(9, 8, 7, 6, 5, 4, 3, 2, 1));
  console.log(findMin(0, 2, 12, 4, 5));


/*
  8)
  Написать функцию pushZeros(), которая сдвигает все элементы со значением '0' в конец массива:

  // Examples:
  pushZeros([0, 9, 0, 8, 7, 0, 6, 5, 4, 3, 2, 1]) // [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 0, 0]
  pushZeros([0, 2, 12, 4, 5]) // [2, 12, 4, 5, 0]
*/

  function pushZeros(arr) {
    for (let i = 0; i < arr.length-1; i++) {
      if (arr[i] === 0) {
        arr.push(arr[i]);
        arr.splice(i, 1);
      }
    }
    return arr;
  };
  console.log('Exercise #8:');
  console.log(pushZeros([0, 9, 0, 8, 7, 0, 6, 5, 4, 3, 2, 1]));
  console.log(pushZeros([0, 2, 12, 4, 5]));