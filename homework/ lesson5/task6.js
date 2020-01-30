function findMax(...elements){
  return Math.max(...elements);
};

let max = findMax(9, 8, 7, 6, 5, 4, 3, 2, 1);
console.log(max);

let max2 = findMax(0, 2, 12, 4, 5);
console.log(max2);


/*
  6)
  Написать функцию findMax(), которая найдет максимальный элемент из аргументов:
  // Examples:
  findMax(9, 8, 7, 6, 5, 4, 3, 2, 1) // 9
  findMax(0, 2, 12, 4, 5) // 12
*/