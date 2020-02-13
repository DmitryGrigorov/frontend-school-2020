// Первые две задачи на понимание рекурсии.

/*
  1) Напишите функцию sumTo(n), которая вычисляет сумму чисел рекурсивно 1 + 2 + ... + n.

  sumTo(1) = 1
  sumTo(2) = 2 + 1 = 3
  sumTo(3) = 3 + 2 + 1 = 6
  sumTo(4) = 4 + 3 + 2 + 1 = 10
*/

function sumTo(n)
{
  if(n == 1)
    return 1;
  else 
     return n+sumTo(n-1);
}
console.log(sumTo(6));
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
  
function fib(n)
{
  if(n<=1) 
    return n;
  else
    return fib(n-1) + fib(n-2);
}
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
  function sum(...args)
  {
    let result = 0;
    for(let a of args)
    {
      result+=a;
    }
    return result;
  }
console.log(sum(5,5)); 

/*
  4) Напишите функцию add, которая работает, как на примере:

  add(2, 5) // 7
  add(2)(5) // 7
*/
function add(a,b){
        const addFunc = function (b) {return a+b;};
        if(typeof b =='undefined'){
            return addFunc;
        }
        else
        {
            return addFunc(b);
        }
    }
console.log(add(2)(5));
/*
  5)
  Написать функцию sortOdd(), которая сортирует только четные числа в массиве:

  // Examples:
  sort([9, 8, 7, 6, 5, 4, 3, 2, 1]) // [9, 2, 7, 4, 5, 6, 3, 8, 1]
*/

function sortOdd(array) {
   const odd = array.filter((x) => (x % 2)===0).sort((a,b) => a - b); 
   return array.map((x) => (x % 2)===0 ? odd.shift() : x);
}
console.log(sortOdd([9, 8, 7, 6, 5, 4, 3, 2, 1]));
/*
  6)
  Написать функцию findMax(), которая найдет максимальный элемент из аргументов:

  // Examples:
  findMax(9, 8, 7, 6, 5, 4, 3, 2, 1) // 9
  findMax(0, 2, 12, 4, 5) // 12
*/
  function findMax(...args)
  {
    return Math.max.apply(null, args)
  }
// without apply
// function findMax(...args)
// {
//   return Math.max(...args);
// }
console.log(findMax(0, 2, 12, 4, 5));
/*
  7)
  Написать функцию findMin(), которая найдет минимальный элемент из аргументов:

  // Examples:
  findMax(9, 8, 7, 6, 5, 4, 3, 2, 1) // 1
  findMax(0, 2, 12, 4, 5) // 0
*/

function findMin(...args)
  {
    return Math.min.call(null, ...args);
  }
//without call
// function findMin(...args)
// {
//   return Math.min(...args);
// }

console.log(findMin(9, 8, 7, 6, 5, 4, 3, 2, 1));
/*
  8)
  Написать функцию pushZeros(), которая сдвигает все элементы со значением '0' в конец массива:

  // Examples:
  pushZeros([0, 9, 0, 8, 7, 0, 6, 5, 4, 3, 2, 1]) // [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 0, 0]
  pushZeros([0, 2, 12, 4, 5]) // [2, 12, 4, 5, 0]
*/
function pushZeros(array)
{
  return array.sort(function(a, b) {
        if(a==0 && b!=0)
            return 1;
        else if(b==0 && a!=0)
            return -1;
        else 
            return 0;
    });
}
console.log(pushZeros([0, 9, 0, 8, 7, 0, 6, 5, 4, 3, 2, 1]));
