// Первые две задачи на понимание рекурсии.

/*
  1) Напишите функцию sumTo(n), которая вычисляет сумму чисел рекурсивно 1 + 2 + ... + n.

  sumTo(1) = 1
  sumTo(2) = 2 + 1 = 3
  sumTo(3) = 3 + 2 + 1 = 6
  sumTo(4) = 4 + 3 + 2 + 1 = 10

Решение:
* /
const sumTo = n => (n == 1) ? n : n += sumTo(n - 1)

document.write(sumTo(1) + '<br>')
document.write(sumTo(2) + '<br>')
document.write(sumTo(3) + '<br>')
document.write(sumTo(4))
//*/

/*
  2)
  Последовательность чисел Фибоначчи определяется формулой Fn = Fn-1 + Fn-2. То есть, следующее число получается как сумма двух предыдущих.

  Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3) и так далее: 1, 1, 2, 3, 5, 8, 13, 21....

  Числа Фибоначчи тесно связаны с золотым сечением и множеством природных явлений вокруг нас.

  Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.

  Пример работы:
  function fib(n) { ваш код }

  alert(fib(3)); // 2
  alert(fib(7)); // 13
  alert(fib(77)); // 5527939700884757

Решение:
* /
const fib = n => { //Количество шагов
 let o = 1 //Fn-1
 let p = 1 //Fn-2
 let m = 2 //Fn
 let i = 1 //Шаг (начиная с 1)
 for(i = 3; i < n; i++){ p = o; o = m; m = o + p }

 return m
}

document.write(fib(3) + '<br>')
document.write(fib(7) + '<br>')
document.write(fib(77))
//*/

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

Решение:
* /
 const sum = (...props) => {
  let sum = 0

  for(let key in props){
   sum += props[key]
  }

  return sum
 }

document.write(sum(1, 2, 3) + '<br>')
document.write(sum(5, 5) + '<br>')
document.write(sum(10, 20, 3, 7))
//*/

/*
  4) Напишите функцию add, которая работает, как на примере:

  add(2, 5) // 7
  add(2)(5) // 7

Решение:
*/
function add(...props){
 let sum = 0

 if(props.length > 1){
  for(let key in props){ sum += props[key] }
  return sum
 } else{
  return (b) => { return sum = +b + +props }
 }
}
document.write(add(2, 5) + '<br>')
document.write(add(2)(5))
//*/

/*
  5)
  Написать функцию sortOdd(), которая сортирует только четные числа в массиве:

  // Examples:
  sort([9, 8, 7, 6, 5, 4, 3, 2, 1]) // [9, 2, 7, 4, 5, 6, 3, 8, 1]

Решение:
* /
//*/

/*
  6)
  Написать функцию findMax(), которая найдет максимальный элемент из аргументов:

  // Examples:
  findMax(9, 8, 7, 6, 5, 4, 3, 2, 1) // 9
  findMax(0, 2, 12, 4, 5) // 12

Решение:
* /
//*/

/*
  7)
  Написать функцию findMin(), которая найдет минимальный элемент из аргументов:

  // Examples:
  findMax(9, 8, 7, 6, 5, 4, 3, 2, 1) // 1
  findMax(0, 2, 12, 4, 5) // 0

Решение:
* /
//*/


/*
  8)
  Написать функцию pushZeros(), которая сдвигает все элементы со значением '0' в конец массива:

  // Examples:
  pushZeros([0, 9, 0, 8, 7, 0, 6, 5, 4, 3, 2, 1]) // [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 0, 0]
  pushZeros([0, 2, 12, 4, 5]) // [2, 12, 4, 5, 0]

Решение:
* /
//*/