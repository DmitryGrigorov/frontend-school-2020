// Первые две задачи на понимание рекурсии.

/*
  1) Напишите функцию sumTo(n), которая вычисляет сумму чисел рекурсивно 1 + 2 + ... + n.

  sumTo(1) = 1
  sumTo(2) = 2 + 1 = 3
  sumTo(3) = 3 + 2 + 1 = 6
  sumTo(4) = 4 + 3 + 2 + 1 = 10
*/
function sumTo(d) {
    if(d===1) return d;
    return d + sumTo(d-1)
}

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
    if(n===1 || n===2) return 1;
    return fib(n-1) + fib (n-2);
}

function fib2(n) {
    if(n===1 || n===2) return 1;
    let now = 2;
    let prev = 1;
    let prePrev = 1;
    for(let i = 3; i<n; i++) {
        prePrev = prev;
        prev = now;
        now = prev+prePrev;
    }
    return now;
}

console.log(fib(3), fib2(3));
console.log(fib(7), fib2(7));
console.log(fib(17), fib2(17));

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
    return args.reduce((prev, cur) => prev+cur, 0);
}

console.log(sum(1, 2, 3));  // 6
console.log(sum(5, 5));  // 10
console.log(sum(10, 20, 3, 7)); // 40

/*
  4) Напишите функцию add, которая работает, как на примере:

  add(2, 5) // 7
  add(2)(5) // 7
*/
function add(...args) {
    if(args.length===1) return (i) => i+args[0];
    return (args[0] + args[1]);
}

console.log(add(2, 5), add(2)(5));

/*
  5)
  Написать функцию sortOdd(), которая сортирует только четные числа в массиве:

  // Examples:
  sort([9, 8, 7, 6, 5, 4, 3, 2, 1]) // [9, 2, 7, 4, 5, 6, 3, 8, 1]
*/

function sortOdd(arr) {
    const oddArr = [];
    arr.forEach((i) => {if(i%2===0) oddArr.push(i)});
    oddArr.sort((i, j) => i-j);
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]%2===0) arr[i] = oddArr.shift();
    }
    return arr;
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
    return args.sort((i, j) => j-i)[0];
}

function findMax2(...args) {
    return args.reduce((prev, cur) => cur > prev ? cur : prev, args[0]);
}

console.log(findMax(9, 8, 7, 6, 5, 4, 3, 2, 1), findMax2(9, 8, 7, 6, 5, 4, 3, 2, 1)); // 9
console.log(findMax(0, 2, 12, 4, 5), findMax2(0, 2, 12, 4, 5)); // 12
/*
  7)
  Написать функцию findMin(), которая найдет минимальный элемент из аргументов:

  // Examples:
  findMax(9, 8, 7, 6, 5, 4, 3, 2, 1) // 1
  findMax(0, 2, 12, 4, 5) // 0
*/

function findMin(...args) {
    return args.sort((i, j) => i-j)[0];
}

function findMin2(...args) {
    return args.reduce((prev, cur) => cur < prev ? cur : prev, args[0]);
}

console.log(findMin(9, 8, 7, 6, 5, 4, 3, 2, 1), findMin2(9, 8, 7, 6, 5, 4, 3, 2, 1)); // 1
console.log(findMin(0, 2, 12, 4, 5), findMin2(0, 2, 12, 4, 5)); // 0

/*
  8)
  Написать функцию pushZeros(), которая сдвигает все элементы со значением '0' в конец массива:

  // Examples:
  pushZeros([0, 9, 0, 8, 7, 0, 6, 5, 4, 3, 2, 1]) // [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 0, 0]
  pushZeros([0, 2, 12, 4, 5]) // [2, 12, 4, 5, 0]
*/

function pushZeros(arr) {
    return arr.sort((i, j) => {
        if(i===0) return +1;
        if(j===0) return -1;
        return 0;
    })
}

console.log(pushZeros([0, 9, 0, 8, 7, 0, 6, 5, 4, 3, 2, 1])); // [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 0, 0]
console.log(pushZeros([0, 2, 12, 4, 5])); // [2, 12, 4, 5, 0]