// Первые две задачи на понимание рекурсии.

/*
  1) Напишите функцию sumTo(n), которая вычисляет сумму чисел рекурсивно 1 + 2 + ... + n.

  sumTo(1) = 1
  sumTo(2) = 2 + 1 = 3
  sumTo(3) = 3 + 2 + 1 = 6
  sumTo(4) = 4 + 3 + 2 + 1 = 10
*/

const sumTo = (num) => {
  if (num === 1) return num;
  return num = num + sumTo(num - 1);
}

sumTo(4);

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

const fib = (num) => {
  if(num <= 2) return 1;
  return num = fib(num - 1) + fib(num - 2);
}

fib(8);

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

const sum = (...args) => {
  let sum = args.reduce((sum, current) => sum + current, 0);
  return sum;
}

sum(10, 20, 3, 7);

/*
  4) Напишите функцию add, которая работает, как на примере:

  add(2, 5) // 7
  add(2)(5) // 7
*/

const add = (...args) => {
  let actualSum = 0;
  if(args.length > 1) {
   return actualSum = args.reduce((sum, current) => sum + current, 0);
  }
  actualSum = args.reduce((sum, current) => sum + current, 0);

  let total = (...arg) => {
    return actualSum += arg.reduce((sum, current) => sum + current, 0);
  }

  return total;

  }

/*
  5)
  Написать функцию sortOdd(), которая сортирует только четные числа в массиве:

  // Examples:
  sort([9, 8, 7, 6, 5, 4, 3, 2, 1]) // [9, 2, 7, 4, 5, 6, 3, 8, 1]
*/



/*
  6)
  Написать функцию findMax(), которая найдет максимальный элемент из аргументов:

  // Examples:
  findMax(9, 8, 7, 6, 5, 4, 3, 2, 1) // 9
  findMax(0, 2, 12, 4, 5) // 12
*/

const findMax = (...args) => {

    let arr = args.sort((a, b) => {
      return a - b;
    });
    return arr[arr.length - 1]; 
};

findMax(9, 8, 7, 6, 5, 4, 3, 2, 1);
findMax(0, 2, 12, 4, 5);
/*
  7)
  Написать функцию findMin(), которая найдет минимальный элемент из аргументов:

  // Examples:
  findMax(9, 8, 7, 6, 5, 4, 3, 2, 1) // 1
  findMax(0, 2, 12, 4, 5) // 0
*/

const findMin = (...args) => {

    let arr = args.sort((a, b) => {
      return a - b;
    });
    return arr[0]; 
};

findMin(9, 8, 7, 6, 5, 4, 3, 2, 1);
findMin(0, 2, 12, 4, 5);

/*
  8)
  Написать функцию pushZeros(), которая сдвигает все элементы со значением '0' в конец массива:

  // Examples:
  pushZeros([0, 9, 0, 8, 7, 0, 6, 5, 4, 3, 2, 1]) // [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 0, 0]
  pushZeros([0, 2, 12, 4, 5]) // [2, 12, 4, 5, 0]
*/

const pushZeros = (arr) => {
  let arrZero = [];
    for(let i = 0; arr.length > i; i++) {
      if(arr[i] === 0) {
       arr.splice(i, 1);
       arrZero.push(0);
      }
    }
    return arr.concat(arrZero);
}

pushZeros([0, 9, 0, 8, 7, 0, 6, 5, 4, 3, 2, 1]);