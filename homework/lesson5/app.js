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
    return n += sumTo(n-1);
  }
}

console.log( sumTo(5) );

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
  if ( n <= 1) {
    return n;
  } else {
    return fib(n-2) + fib(n-1);
  }
}

console.log( fib(7) );

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

function sum(...rest) {
  let sum = 0;
  for(let i = 0; i < rest.length; i++) {
    sum += rest[i];
  }

  return sum;
}


console.log(sum(1, 2, 3));  // 6
console.log(sum(5, 5));  // 10
console.log(sum(10, 20, 3, 7)); // 40

/*
  4) Напишите функцию add, которая работает, как на примере:

  add(2, 5) // 7
  add(2)(5) // 7
*/

function add(a, b) {

  if (b != undefined) {
    return a + b;
  } else {
    return function(b) {
      return a + b;
    }
  }
  
}


console.log( add(2, 5) );
console.log( add(2)(5) );

/*
  5)
  Написать функцию sortOdd(), которая сортирует только четные числа в массиве:

  // Examples:
  sort([9, 8, 7, 6, 5, 4, 3, 2, 1]) // [9, 2, 7, 4, 5, 6, 3, 8, 1]
*/

function sortOdd(arr) {

  let indexes = arr.filter(item => item % 2 == 0); // создаем новый массив с четными элементами из старого массива
  indexes.sort(function(a, b) {                   // сортируем новый массив по возрастанию
    return a - b; 
  });

  let j = 0;
  for (let i = 0; i < arr.length; i++) {          // в старый массив вместо четных элементов вставляем элементы 
    (arr[i] % 2 == 0) ? arr[i] = indexes[j++] : arr[i];  // из отсортированного массива по порядку
  }
  return arr;                                          // возвращаем массив с отсортированными четными числами
}

console.log(sortOdd([9, 8, 7, 6, 5, 4, 3, 2, 1]));
console.log(sortOdd([11, 24, 2, 4, 5, 7, 10]));

/*
  6)
  Написать функцию findMax(), которая найдет максимальный элемент из аргументов:

  // Examples:
  findMax(9, 8, 7, 6, 5, 4, 3, 2, 1) // 9
  findMax(0, 2, 12, 4, 5) // 12
*/

function findMax(...rest) {
  return Math.max.call(null, ...rest);
}

console.log( findMax(9, 8, 7, 6, 5, 4, 3, 2, 1) );
console.log( findMax(0, 2, 12, 4, 5) );

/*
  7)
  Написать функцию findMin(), которая найдет минимальный элемент из аргументов:

  // Examples:
  findMax(9, 8, 7, 6, 5, 4, 3, 2, 1) // 1
  findMax(0, 2, 12, 4, 5) // 0
*/

function  findMin() {
  
  return Math.min.apply(null, arguments)
}

console.log( findMin(9, 8, 7, 6, 5, 4, 3, 2, 1) );
console.log( findMin(0, 2, 12, -1, 4, 5) );

/*
  8)
  Написать функцию pushZeros(), которая сдвигает все элементы со значением '0' в конец массива:

  // Examples:
  pushZeros([0, 9, 0, 8, 7, 0, 6, 5, 4, 3, 2, 1]) // [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 0, 0]
  pushZeros([0, 2, 12, 4, 5]) // [2, 12, 4, 5, 0]
*/

function pushZeros(arr) {
  arr.map(function(item, index, array) {
    if (item === 0) {
      array.splice(index, 1);
      array.push(0);
    } 
  });

  return arr;
}


console.log(pushZeros([0, 9, 0, 8, 7, 0, 6, 5, 4, 3, 2, 1]));
console.log(pushZeros([0, 2, 12, 4, 5, 0]));