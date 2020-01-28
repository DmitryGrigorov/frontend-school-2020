// Первые две задачи на понимание рекурсии.

/*
  1) Напишите функцию sumTo(n), которая вычисляет сумму чисел рекурсивно 1 + 2 + ... + n.

  sumTo(1) = 1
  sumTo(2) = 2 + 1 = 3
  sumTo(3) = 3 + 2 + 1 = 6
  sumTo(4) = 4 + 3 + 2 + 1 = 10
*/

function sumTo(n) {
    if (n == 1) return 1;
    else return n + sumTo(n - 1);
}

console.log(`1) sumTo(3) = ${sumTo(3)}`);

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
    if (n == 0) return 0;
    if (n == 1 || n == 2) return 1;
    return fib(n - 1) + fib(n - 2);
}

console.log(`2) fib(3) = ${fib(3)}`);

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
    return args.reduce((last, current) => last + current, 0);
}

console.log(`3) sum(10, 20, 3, 7)) = ${sum(10, 20, 3, 7)} `); // 40

/*
  4) Напишите функцию add, которая работает, как на примере:

  add(2, 5) // 7
  add(2)(5) // 7
*/

//Вариант №1, который мне показали после занятия. Только немного улучшил с помощью reduce.
function add(...args) {
    if (args.length > 1) {
        return args.reduce((s,i)=>s+i, 0);
    }
    return function sum(b) {
        return args[0] + b
    }
}
console.log(`4) Вариант №1: add(2, 5) = ${ add(2, 5) }`);
console.log(`Вариант №1: add(2, 5) = ${ add(2)(5) }`);

function add2(...args) {
    let sum = 0;

    function intAdd(...argues) {
        if (argues.length>1) {
            for (let a of argues) sum += +a;
            return intAdd;
        }
        if (argues.length == 1) {
            sum += +argues[0];
            return intAdd;
        }
        if (argues.length == 0) {
            return +sum;
        }
    }
    return intAdd(args);
}
console.log( `Вариант №2: add2(1)(2,3)(4)(5,15,20)(30)() = ${add2(1)(2,3)(4)(5,15,20)(30)()} ` );
console.log('2 вариант сделан через замыкания внутреннего метода на поле sum. Единственное ограничение \n' + 'в конце набора методом нужно указать пустые скобки, чтобы вывелся результат из sum');




/*
  5)
  Написать функцию sortOdd(), которая сортирует только четные числа в массиве:

  // Examples:
  sort([9, 8, 7, 6, 5, 4, 3, 2, 1]) // [9, 2, 7, 4, 5, 6, 3, 8, 1]
*/

//Применена сортировка методом подстановки с пропуском нечётных чисел
function sortOdd(arr) {
    for (let n = 0; n < arr.length - 1; n++) { //Перебор от 0 элемента до предпоследнего
        if (arr[n] % 2 != 0) continue; //Нечётные числа нет смысла сравнивать с остальными
        for (let s = n + 1; s < arr.length; s++) { //Перебор подстановочных чисел массива от 1 эл до посл.
            if (arr[s] % 2 != 0) continue; //Нет смысла сравнивать нечётные числа - снова пропускаем
            if (arr[n] < arr[s]) { //Если левое число меньше правого
                let temp = arr[n]; //Операция по смене элементов местами
                arr[n] = arr[s];
                arr[s] = temp;
            }
        }
    }
    return arr; //Возврат готового массива
}

console.log(`5) sortOdd([2, 4, 1, 3, 5, 2, 4]) = ${sortOdd([2, 4, 1, 3, 5, 2, 4])}`); // Сортировка по убыванию как указано в условии

/*
  6)
  Написать функцию findMax(), которая найдет максимальный элемент из аргументов:

  // Examples:
  findMax(9, 8, 7, 6, 5, 4, 3, 2, 1) // 9
  findMax(0, 2, 12, 4, 5) // 12
*/

function findMax(...args) {
    return args.reduce((max, current) => max < current ? current : max);
}

console.log(`6) findMax(0, 2, 12, 4, 5) = ${findMax(0, 2, 12, 4, 5)}`); // 12
/*
  7)
  Написать функцию findMin(), которая найдет минимальный элемент из аргументов:

  // Examples:
  findMax(9, 8, 7, 6, 5, 4, 3, 2, 1) // 1
  findMax(0, 2, 12, 4, 5) // 0
*/

function findMin(...args) {
    return args.reduce((min, current) => min > current ? current : min);
}

console.log(`7) findMin(0, 2, 12, 4, 5) = ${findMin(0, 2, 12, 4, 5)}`); // 0

/*
  8)
  Написать функцию pushZeros(), которая сдвигает все элементы со значением '0' в конец массива:

  // Examples:
  pushZeros([0, 9, 0, 8, 7, 0, 6, 5, 4, 3, 2, 1]) // [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 0, 0]
  pushZeros([0, 2, 12, 4, 5]) // [2, 12, 4, 5, 0]
*/

function pushZeros(arr) {
    let countOfZeros = 0; //Не самый быстрый, зато понятный способ работы с массивом
    for (let c = 0; c < arr.length-1-countOfZeros; c++) {
        if (arr[c] == 0) { //Если элемент нулевой, то
            arr.splice(c, 1); //Удаляем этот элемент из этого места, схлопывая массив (жутко трудоёмкая операция на больших массивах)
            arr.push(0); //Добавляем в конец массива удалённый ноль
            countOfZeros++;
        }
    }
    return arr;
}
console.log(`8) pushZeros([0, 2, 0, 12, 4, 5]) = ${pushZeros([0, 2, 0, 12, 4, 5])} `);