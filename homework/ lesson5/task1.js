function sumTo(n){
  if(n === 1){
    return 1;
  }
  return sumTo(n-1)+n;
}

/* 2-ой способ
function sumTo(n) {
  return n * (n + 1) / 2;
}
*/

console.log(sumTo(4));
console.log(sumTo(3));
console.log(sumTo(2));
console.log(sumTo(1));


/*
  1) Напишите функцию sumTo(n), которая вычисляет сумму чисел рекурсивно 1 + 2 + ... + n.
  sumTo(1) = 1
  sumTo(2) = 2 + 1 = 3
  sumTo(3) = 3 + 2 + 1 = 6
  sumTo(4) = 4 + 3 + 2 + 1 = 10
*/
