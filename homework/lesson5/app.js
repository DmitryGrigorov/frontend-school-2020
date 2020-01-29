// Первые две задачи на понимание рекурсии.

/*
  1) Напишите функцию sumTo(n), которая вычисляет сумму чисел рекурсивно 1 + 2 + ... + n.

  sumTo(1) = 1
  sumTo(2) = 2 + 1 = 3
  sumTo(3) = 3 + 2 + 1 = 6
  sumTo(4) = 4 + 3 + 2 + 1 = 10
*/

function sumTo (n) {  
  return n > 0 ? n + sumTo(n-1) : n;
}

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

function fib (n) {
  return n > 1 ? fib(n-1) + fib(n-2) : n;
}

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

function sum (...numbers) {
  let sum = 0;
  for(let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum;
}

/*
  4) Напишите функцию add, которая работает, как на примере:

  add(2, 5) // 7
  add(2)(5)() // 7
*/

function add (...restNums) {
  if(restNums.length > 1){
    let sum = 0;
    for(let i = 0; i < restNums.length; i++) {
      sum += restNums[i];
    }
        
    return sum;
  }else {
    this.collector = 0;

    var innerFunc = function(...innerRest){
      if(innerRest.length > 0){
        this.collector = this.collector + innerRest[0];
        return innerFunc;
      }else{                                    //условие для вызова функции без аргумента add(2)(5)()
        return this.collector;
      }
    }

    return innerFunc.apply(null, restNums);
  }
}

/*
  5)
  Написать функцию sortOdd(), которая сортирует только четные числа в массиве:

  // Examples:
  sort([9, 8, 7, 6, 5, 4, 3, 2, 1]) // [9, 2, 7, 4, 5, 6, 3, 8, 1]
*/

function sort (arr) {
  let indexes = [];
  arr.filter((v, i) => v % 2 === 0 && indexes.push(i))//фильтрация массива на четные числа, запись их индесов в массив indexes
  .sort((a, b) => a - b)                              //сортировка массива четных чисел по возрастанию
  .forEach((v, i) => arr[indexes[i]] = v);            //замена в исходном массиве четных чисел в соответсвии с индексом в indexes на число из отсортированного списка
  return arr;
}

/*
  6)
  Написать функцию findMax(), которая найдет максимальный элемент из аргументов:

  // Examples:
  findMax(9, 8, 7, 6, 5, 4, 3, 2, 1) // 9
  findMax(0, 2, 12, 4, 5) // 12
*/

function findMax (...args) {
  let maxNum = -Infinity;
  args.forEach((n) => {
    if(maxNum < n){
      maxNum = n;
    }
  });

  return maxNum;
}

/*
  7)
  Написать функцию findMin(), которая найдет минимальный элемент из аргументов:

  // Examples:
  findMin(9, 8, 7, 6, 5, 4, 3, 2, 1) // 1
  findMin(0, 2, 12, 4, 5) // 0
*/

function findMin (...args) {
  let minNum = Infinity;
  args.forEach((n) => {
    if(minNum > n){
      minNum = n;
    }
  });

  return minNum;
}

/*
  8)
  Написать функцию pushZeros(), которая сдвигает все элементы со значением '0' в конец массива:

  // Examples:
  pushZeros([0, 9, 0, 8, 7, 0, 6, 5, 4, 3, 2, 1]) // [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 0, 0]
  pushZeros([0, 2, 12, 4, 5]) // [2, 12, 4, 5, 0]
*/

function pushZeros (arr) {  
  return arr.filter((v, i) => v !== 0)
  .concat(arr.filter((v, i) => v === 0))
}
