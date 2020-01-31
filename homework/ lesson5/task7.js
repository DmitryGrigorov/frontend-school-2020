function findMin(...elements){
  return Math.min(...elements);
};

let min = findMin(9, 8, 7, 6, 5, 4, 3, 2, 1);
console.log(min);

let min2 = findMin(0, 2, 12, 4, 5);
console.log(min2);

console.log(findMin.call(this, 9, 8, 7, 6, 5, 4, 3, 2, 1)); //call
console.log(findMin.apply(null,[0, 2, 12, 4, 5])); //apply

/*
  7)
  Написать функцию findMin(), которая найдет минимальный элемент из аргументов:
  // Examples:
  findMax(9, 8, 7, 6, 5, 4, 3, 2, 1) // 1
  findMax(0, 2, 12, 4, 5) // 0
*/