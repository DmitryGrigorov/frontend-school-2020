// Первые две задачи на понимание рекурсии.

/*
  1) Напишите функцию sumTo(n), которая вычисляет сумму чисел рекурсивно 1 + 2 + ... + n.

  sumTo(1) = 1
  sumTo(2) = 2 + 1 = 3
  sumTo(3) = 3 + 2 + 1 = 6
  sumTo(4) = 4 + 3 + 2 + 1 = 10
*/
console.log('sumTo');
function sumTo(n) {
  if(n === 1) {
    return 1;
  }
  return sumTo(n-1) + n;
}
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
console.log('fib');
function fib(n){
    if (n === 1 || n === 2 ){
      return 1;
    }
    return fib(n-1) + fib(n-2);

}
console.log(fib(3)); // 2
console.log(fib(7)); // 13


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
console.log('sum');
function sum(...args) {
  let sum = 0;
  for(let i = 0; i < args.length; i++) {
    sum += args[i];
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
function add(x, y){
  let newX = x;
  let newY = y;
  if (newY === undefined){
    return function (newY){
      return newX + newY;
    }
  }
  return x+y;
}

console.log('add');
console.log(add(2, 5));
console.log(add(2)(5));
/*
  5)
  Написать функцию sortOdd(), которая сортирует только четные числа в массиве:

  // Examples:
  sort([9, 8, 7, 6, 5, 4, 3, 2, 1]) // [9, 2, 7, 4, 5, 6, 3, 8, 1]
*/
function sortOdd(array){
    let oddArr = array.filter(function(number){
      return number%2 === 0;
    })
    oddArr.sort();
    let i=0;
    let sortedArr = array.map(function(num){
        if(num%2===0){
          return oddArr[i++];
        }else{
          return num;
        }
    });
    return sortedArr;
}
console.log(sortOdd([9, 8, 7, 6, 5, 4, 3, 2, 1]));

/*
  6)
  Написать функцию findMax(), которая найдет максимальный элемент из аргументов:

  // Examples:
  findMax(9, 8, 7, 6, 5, 4, 3, 2, 1) // 9
  findMax(0, 2, 12, 4, 5) // 12
*/

function findMax(...args){
   let max=args[0];
   for (let i=1; i<args.length; i++){
      if (args[i]>max){
        max=args[i];
      }
   }
   return max;
}
console.log('findMax '+findMax(9, 8, 7, 6, 5, 4, 3, 2, 1) );// 9

//решение через apply и call
function findMaxApply(...args){
    return Math.max.apply(null, args);
}
console.log('findMaxApply '+findMaxApply(9, 8, 7, 6, 5, 4, 3, 2, 1) );// 9

function findMaxCall(...args){
  return Math.max.call(null, ...args);
}
console.log('findMaxCall '+findMaxCall(9, 8, 7, 6, 5, 4, 3, 2, 1) );// 9
/*
  7)
  Написать функцию findMin(), которая найдет минимальный элемент из аргументов:

  // Examples:
  findMax(9, 8, 7, 6, 5, 4, 3, 2, 1) // 1
  findMax(0, 2, 12, 4, 5) // 0
*/
function findMin(...args){
  let min=args[0];
  for (let i=1; i<args.length; i++){
     if (args[i]<min){
       min=args[i];
     }
  }
  return min;
}
console.log('findMin '+findMin(0, 2, 12, 4, 5) );

//решение через apply и call
function findMin_apply(...args){
  return Math.min.apply(null, args);
}
console.log('findMinApply '+findMin_apply(0, 2, 12, 4, 5) );

function findMinCall(...args){
  return Math.min.call(null, ...args);
}
console.log('findMinCall '+findMinCall(0, 2, 12, 4, 5) );
/*
  8)
  Написать функцию pushZeros(), которая сдвигает все элементы со значением '0' в конец массива:

  // Examples:
  pushZeros([0, 9, 0, 8, 7, 0, 6, 5, 4, 3, 2, 1]) // [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 0, 0]
  pushZeros([0, 2, 12, 4, 5]) // [2, 12, 4, 5, 0]
*/
function pushZeros(array){
    let notZeroArr = array.filter(function(number){
      return number !== 0;
    });
    let zeroArr = array.filter(function(number){
      return number === 0;
    });
    return notZeroArr.concat(zeroArr);


}
console.log(pushZeros([0, 9, 0, 8, 7, 0, 6, 5, 4, 3, 2, 1]));
console.log(pushZeros([0, 2, 12, 4, 5])); // [2, 12, 4, 5, 0]