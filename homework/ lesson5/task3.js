function sum(...elements) {
  let sum = 0;

  for(let i = 0; i < elements.length; i++) {
    sum += elements[i];
  }
  return sum;
}

console.log(sum(10, 20, 3, 7)) //40
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


